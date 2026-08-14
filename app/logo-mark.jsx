export default function LogoMark({ className = "brand-mark" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      role="img"
      aria-label="HS logo"
    >
      <rect width="64" height="64" fill="#17211f" stroke="#46d6c9" strokeWidth="2.5" />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="23"
        letterSpacing="-1.5"
        fill="#46d6c9"
      >
        HS
      </text>
    </svg>
  );
}
