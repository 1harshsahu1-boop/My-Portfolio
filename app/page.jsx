import ClientEffects from "./client-effects";
import LogoMark from "./logo-mark";
import { absoluteUrl, siteDescription, siteName, siteUrl, socialLinks } from "./seo";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Harsh",
    url: siteUrl,
    jobTitle: "Full-Stack Engineer",
    description: siteDescription,
    email: "hello@harsh.dev",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "AWS",
      "API design",
      "Cloud infrastructure",
      "Product engineering",
    ],
    sameAs: [socialLinks.github, socialLinks.linkedin],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    inLanguage: "en-US",
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Selected Work",
        item: absoluteUrl("/#work"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: absoluteUrl("/#contact"),
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <ClientEffects />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="site-header" data-header>
        <a className="brand" href="#top" aria-label="Harsh portfolio home">
          <LogoMark />
          <span>Harsh</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">
          Hire me
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <canvas
            id="stackCanvas"
            width="1600"
            height="900"
            aria-hidden="true"
          />
          <div className="hero-shade" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">Full-stack engineer</p>
            <h1 id="hero-title">Harsh builds fast, reliable web products.</h1>
            <p className="hero-copy">
              I design and ship production-grade interfaces, APIs, data flows, and
              cloud infrastructure with an eye for product detail and long-term
              maintainability.
            </p>
            <div className="hero-actions" aria-label="Portfolio actions">
              <a className="button primary" href="#work">
                View work
              </a>
              <a className="button secondary" href={socialLinks.email}>
                Email me
              </a>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Engineering highlights">
          <div>
            <strong>2+</strong>
            <span>years building software</span>
          </div>
          <div>
            <strong>3+</strong>
            <span>product releases shipped</span>
          </div>
          <div>
            <strong>99.9%</strong>
            <span>uptime-minded architecture</span>
          </div>
          <div>
            <strong>0 to 1</strong>
            <span>prototype through scale</span>
          </div>
        </section>

        <section className="section intro-section" aria-labelledby="intro-title">
          <div className="section-kicker">What I do</div>
          <div className="intro-grid">
            <h2 id="intro-title">
              I connect polished product experiences with dependable systems.
            </h2>
            <p>
              My work sits where user experience, backend architecture, and
              delivery discipline meet. I like clean interfaces, boringly stable
              APIs, observable services, and teams that can move quickly without
              making the future harder.
            </p>
          </div>
        </section>

        <section className="section band" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Selected work</div>
              <h2 id="work-title">Projects built for real product pressure.</h2>
            </div>
            <p>
              A few representative builds across SaaS dashboards, automation, and
              infrastructure-heavy web applications.
            </p>
          </div>

          <div className="project-grid">
            <article className="project-card">
              <div className="project-topline">
                <span>Platform</span>
                <span>React + Node</span>
              </div>
              <h3>Operations Command Center</h3>
              <p>
                Built a role-aware dashboard for managing workflows, live metrics,
                approvals, and alert triage across distributed teams.
              </p>
              <ul className="tag-list" aria-label="Technologies used">
                <li>Next.js</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>WebSockets</li>
              </ul>
            </article>

            <article className="project-card featured-project">
              <div className="project-topline">
                <span>Automation</span>
                <span>TypeScript</span>
              </div>
              <h3>AI-Assisted Review Pipeline</h3>
              <p>
                Designed an internal tool that routes submissions, summarizes
                risk, captures reviewer decisions, and keeps a complete audit
                trail.
              </p>
              <ul className="tag-list" aria-label="Technologies used">
                <li>Express</li>
                <li>OpenAI API</li>
                <li>Queues</li>
                <li>Docker</li>
              </ul>
            </article>

            <article className="project-card">
              <div className="project-topline">
                <span>Infrastructure</span>
                <span>AWS</span>
              </div>
              <h3>Usage Analytics Service</h3>
              <p>
                Shipped a multi-tenant analytics layer with event ingestion,
                aggregation jobs, account-level reporting, and cost controls.
              </p>
              <ul className="tag-list" aria-label="Technologies used">
                <li>FastAPI</li>
                <li>S3</li>
                <li>Lambda</li>
                <li>ClickHouse</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section stack-section" id="stack" aria-labelledby="stack-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Technical stack</div>
              <h2 id="stack-title">Practical tools, chosen for the job.</h2>
            </div>
            <p>
              I am strongest in TypeScript-heavy product engineering, but I am
              comfortable moving across the layers needed to ship the whole system.
            </p>
          </div>

          <div className="stack-grid">
            <article>
              <h3>Frontend</h3>
              <p>React, Next.js, TypeScript, accessibility, design systems, testing.</p>
            </article>
            <article>
              <h3>Backend</h3>
              <p>Node.js, Python, REST, GraphQL, auth, queues, background jobs.</p>
            </article>
            <article>
              <h3>Data</h3>
              <p>PostgreSQL, Redis, analytics pipelines, schema design, migrations.</p>
            </article>
            <article>
              <h3>Cloud</h3>
              <p>AWS, Docker, CI/CD, monitoring, observability, cost-aware scaling.</p>
            </article>
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <div>
              <div className="section-kicker">Experience</div>
              <h2 id="experience-title">How I tend to show up on a team.</h2>
            </div>
            <p>
              I care about the whole delivery loop: shaping, building, reviewing,
              releasing, measuring, and keeping the codebase humane.
            </p>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <span aria-hidden="true">01</span>
              <div>
                <h3>Product-minded delivery</h3>
                <p>
                  Translate ambiguous product goals into usable flows, measurable
                  milestones, and code that can survive iteration.
                </p>
              </div>
            </article>
            <article className="timeline-item">
              <span aria-hidden="true">02</span>
              <div>
                <h3>Systems that age well</h3>
                <p>
                  Build APIs, data models, and operational paths with explicit
                  contracts, graceful failure modes, and useful telemetry.
                </p>
              </div>
            </article>
            <article className="timeline-item">
              <span aria-hidden="true">03</span>
              <div>
                <h3>Calm collaboration</h3>
                <p>
                  Write clear plans, review with care, mentor through examples,
                  and keep decisions visible when tradeoffs get real.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner">
            <p className="section-kicker">Available for meaningful work</p>
            <h2 id="contact-title">
              Need a full-stack engineer who can own the path from idea to production?
            </h2>
            <p>
              I am open to product engineering roles, freelance builds, and
              technical collaborations where quality matters.
            </p>
            <div className="contact-actions">
              <a className="button primary" href={socialLinks.email}>
                Start a conversation
              </a>
              <a
                className="button secondary"
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="button secondary"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Designed and built by Harsh.</span>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
