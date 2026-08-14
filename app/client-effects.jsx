"use client";

import { useEffect } from "react";

const lanes = [
  { label: "UI", x: 0.64, y: 0.23, w: 168, h: 70, color: "#46d6c9" },
  { label: "API", x: 0.79, y: 0.4, w: 146, h: 68, color: "#f07f5f" },
  { label: "DB", x: 0.58, y: 0.58, w: 150, h: 68, color: "#e6bb62" },
  { label: "CI", x: 0.82, y: 0.7, w: 132, h: 62, color: "#90c77b" },
];

const flows = [
  { from: 0, to: 1, offset: 0 },
  { from: 1, to: 2, offset: 0.28 },
  { from: 2, to: 3, offset: 0.54 },
  { from: 0, to: 2, offset: 0.78 },
];

export default function ClientEffects() {
  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const canvas = document.querySelector("#stackCanvas");

    if (!(canvas instanceof HTMLCanvasElement)) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return undefined;
    }

    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let animationFrame = 0;

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }

    function roundedRect(x, y, w, h, r) {
      const radius = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + w, y, x + w, y + h, radius);
      ctx.arcTo(x + w, y + h, x, y + h, radius);
      ctx.arcTo(x, y + h, x, y, radius);
      ctx.arcTo(x, y, x + w, y, radius);
      ctx.closePath();
    }

    function getBox(lane) {
      const scale = width < 700 ? 0.72 : 1;
      return {
        x: width * lane.x - lane.w * scale * 0.5,
        y: height * lane.y - lane.h * scale * 0.5,
        w: lane.w * scale,
        h: lane.h * scale,
      };
    }

    function drawGrid(time) {
      const gap = width < 700 ? 46 : 58;
      ctx.strokeStyle = "rgba(247, 243, 234, 0.055)";
      ctx.lineWidth = 1;

      for (let x = ((time * 8) % gap) - gap; x < width + gap; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + height * 0.34, height);
        ctx.stroke();
      }

      for (let y = -gap; y < height + gap; y += gap) {
        ctx.beginPath();
        ctx.moveTo(width * 0.38, y + ((time * 5) % gap));
        ctx.lineTo(width, y + ((time * 5) % gap) - height * 0.16);
        ctx.stroke();
      }
    }

    function drawBox(lane, time, index) {
      const box = getBox(lane);
      const pulse = Math.sin(time * 2 + index) * 0.5 + 0.5;

      ctx.shadowColor = lane.color;
      ctx.shadowBlur = 18 + pulse * 10;
      ctx.fillStyle = "rgba(18, 24, 23, 0.78)";
      ctx.strokeStyle = lane.color;
      ctx.lineWidth = 1.4;
      roundedRect(box.x, box.y, box.w, box.h, 8);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.fillStyle = lane.color;
      ctx.font = "800 13px Inter, system-ui, sans-serif";
      ctx.fillText(lane.label, box.x + 18, box.y + 25);

      ctx.fillStyle = "rgba(247, 243, 234, 0.58)";
      for (let i = 0; i < 3; i += 1) {
        const lineWidth = box.w - 38 - i * 20;
        ctx.fillRect(box.x + 18, box.y + 38 + i * 10, Math.max(30, lineWidth), 2);
      }
    }

    function drawFlow(flow, time) {
      const from = getBox(lanes[flow.from]);
      const to = getBox(lanes[flow.to]);
      const start = { x: from.x + from.w, y: from.y + from.h * 0.5 };
      const end = { x: to.x, y: to.y + to.h * 0.5 };
      const midX = (start.x + end.x) * 0.5;
      const progress = (time * 0.22 + flow.offset) % 1;

      ctx.strokeStyle = "rgba(247, 243, 234, 0.18)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.bezierCurveTo(midX, start.y, midX, end.y, end.x, end.y);
      ctx.stroke();

      const t = progress;
      const x =
        (1 - t) ** 3 * start.x +
        3 * (1 - t) ** 2 * t * midX +
        3 * (1 - t) * t ** 2 * midX +
        t ** 3 * end.x;
      const y =
        (1 - t) ** 3 * start.y +
        3 * (1 - t) ** 2 * t * start.y +
        3 * (1 - t) * t ** 2 * end.y +
        t ** 3 * end.y;

      ctx.fillStyle = lanes[flow.to].color;
      ctx.fillRect(x - 5, y - 5, 10, 10);
    }

    function drawCodeRails(time) {
      const railX = width * 0.46;
      const railY = height * 0.2;
      const railW = Math.min(380, width * 0.38);
      const railH = height * 0.62;

      ctx.strokeStyle = "rgba(247, 243, 234, 0.1)";
      ctx.lineWidth = 1;
      roundedRect(railX, railY, railW, railH, 8);
      ctx.stroke();

      for (let i = 0; i < 16; i += 1) {
        const y = railY + 28 + i * 24;
        const flicker = Math.sin(time * 3 + i * 0.8) * 0.5 + 0.5;
        const color = i % 4 === 0 ? "#46d6c9" : i % 5 === 0 ? "#f07f5f" : "#f7f3ea";
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.18 + flicker * 0.18;
        ctx.fillRect(railX + 24, y, 42 + (i % 5) * 22, 3);
        ctx.fillRect(railX + 96, y + 9, 90 + (i % 3) * 36, 3);
      }

      ctx.globalAlpha = 1;
    }

    function render(now) {
      const time = now * 0.001;
      ctx.clearRect(0, 0, width, height);

      const base = ctx.createLinearGradient(0, 0, width, height);
      base.addColorStop(0, "#101313");
      base.addColorStop(0.5, "#17211f");
      base.addColorStop(1, "#141416");
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, height);

      drawGrid(time);
      drawCodeRails(time);
      flows.forEach((flow) => drawFlow(flow, time));
      lanes.forEach((lane, index) => drawBox(lane, time, index));

      animationFrame = requestAnimationFrame(render);
    }

    function updateHeader() {
      header?.classList.toggle("is-scrolled", window.scrollY > 18);
    }

    resizeCanvas();
    updateHeader();
    animationFrame = requestAnimationFrame(render);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  return null;
}
