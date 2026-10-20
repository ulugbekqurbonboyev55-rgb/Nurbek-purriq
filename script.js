* {
  box-sizing: border-box;
}

:root {
  --bg: #070b16;
  --bg-soft: #0f1729;
  --panel: rgba(19, 28, 44, 0.85);
  --panel-strong: #111c30;
  --panel-alt: #172338;
  --primary: #7c9cff;
  --primary-2: #b884ff;
  --accent: #5fe0ff;
  --text: #edf4ff;
  --muted: #b8c4d9;
  --success: #7ef0c7;
  --warning: #ffc35a;
  --border: rgba(148, 163, 184, 0.2);
  --shadow: 0 18px 45px rgba(11, 16, 28, 0.45);
  --radius: 18px;
  --max-width: 1200px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 156, 255, 0.18), transparent 32%),
    radial-gradient(circle at top right, rgba(184, 132, 255, 0.12), transparent 25%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(var(--max-width), calc(100% - 1.5rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(18px);
  background: rgba(8, 12, 22, 0.82);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.brand-mark {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  box-shadow: 0 12px 30px rgba(124, 156, 255, 0.35);
}

.brand-text {
  font-size: 0.9rem;
}

.nav {
  display: none;
  align-items: center;
  gap: 1.1rem;
  font-size: 0.95rem;
  color: var(--muted);
}

.nav a {
  transition: color 0.2s ease;
}

.nav a:hover,
.nav a:focus-visible {
  color: var(--text);
}

.nav-toggle {
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  width: 44px;
  height: 44px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.28rem;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--text);
  border-radius: 10px;
}

.hero {
  padding: 4rem 0 3rem;
}

.hero-content {
  display: grid;
  gap: 2rem;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(95, 224, 255, 0.12);
  border: 1px solid rgba(95, 224, 255, 0.24);
  color: var(--accent);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 700;
}

.hero-copy h1,
.section-heading h2,
.about-copy h2,
.contact-header h2 {
  margin: 0.9rem 0 1rem;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.hero-copy p,
.section-heading p,
.about-copy p,
.portfolio-content p,
.contact-card p,
.promo-banner p,
.service-card p,
.card-highlight p {
  color: var(--muted);
  margin: 0;
}

.hero-actions,
.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.btn,
.mini-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  padding: 0.9rem 1.2rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  cursor: pointer;
}

.btn:hover,
.mini-btn:hover,
.btn:focus-visible,
.mini-btn:focus-visible {
  transform: translateY(-1px);
}

.btn-primary,
.mini-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #fff;
  box-shadow: 0 16px 30px rgba(107, 124, 255, 0.35);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
  border: 1px solid var(--border);
}

.btn-ghost {
  background: rgba(95, 224, 255, 0.06);
  color: var(--accent);
  border: 1px solid rgba(95, 224, 255, 0.22);
}

.hero-stats {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  padding: 0;
  margin: 2rem 0 0;
}

.hero-stats li {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1rem 0.9rem;
}

.hero-stats strong,
.metric-grid strong {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.85rem;
}

.hero-visual {
  position: relative;
  margin-top: 0.5rem;
  min-height: 420px;
}

.orb {
  position: absolute;
  filter: blur(40px);
  border-radius: 50%;
  opacity: 0.7;
}

.orb-one {
  width: 180px;
  height: 180px;
  background: rgba(124, 156, 255, 0.5);
  top: 10%;
  right: 12%;
}

.orb-two {
  width: 220px;
  height: 220px;
  background: rgba(95, 224, 255, 0.26);
  bottom: 5%;
  left: 14%;
}

.glass-panel {
  position: relative;
  z-index: 2;
  background: linear-gradient(180deg, rgba(18, 26, 41, 0.9), rgba(15, 22, 34, 0.8));
  border: 1px solid var(--border);
  border-radius: 26px;
  box-shadow: var(--shadow);
}

.card-highlight {
  padding: 1.5rem;
  max-width: 420px;
  margin: 4.2rem auto 0;
}

.mini-tag {
  display: inline-block;
  font-size: 0.7rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(95, 224, 255, 0.08);
  border: 1px solid rgba(95, 224, 255, 0.2);
  padding: 0.38rem 0.7rem;
  border-radius: 999px;
}

.card-highlight h2 {
  margin: 1rem 0 1.2rem;
  font-size: clamp(1.7rem, 5vw, 2.5rem);
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
}

.metric-grid > div {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 14px;
  padding: 0.85rem;
}

.metric-grid span {
  font-size: 0.75rem;
  color: var(--muted);
  display: block;
  margin-bottom: 0.15rem;
}

.services-section,
.info-section,
.packages,
.portfolio,
.about,
.faq,
.contact {
  padding: 3.5rem 0;
}

.section-heading {
  margin-bottom: 1.8rem;
}

.section-heading.center {
  text-align: center;
}

.section-heading h2,
.about-copy h2,
.contact-header h2 {
  font-size: clamp(2rem, 5vw, 3rem);
}

.service-grid,
.tier-grid,
.portfolio-grid {
  display: grid;
  gap: 1.2rem;
}

.feature-card,
.price-card,
.portfolio-card,
.contact-card,
.faq-list details,
.about-card {
  border: 1px solid var(--border);
  background: rgba(17, 28, 48, 0.8);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.service-card {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.icon-wrap {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(124, 156, 255, 0.2), rgba(184, 132, 255, 0.2));
  font-size: 1.6rem;
}

.service-card h3,
.price-card h3,
.portfolio-card h3 {
  margin: 0;
  font-size: 1.35rem;
}

.service-card .mini-btn,
.portfolio-card .btn,
.price-card .mini-btn {
  margin-top: auto;
  width: fit-content;
}

.packages {
  background: rgba(10, 16, 29, 0.7);
}

.promo-banner {
  background: linear-gradient(135deg, rgba(124, 156, 255, 0.13), rgba(184, 132, 255, 0.18));
  border: 1px solid rgba(124, 156, 255, 0.25);
  border-radius: 20px;
  padding: 1.4rem;
  margin: 1.5rem 0 2rem;
}

.promo-badge {
  display: inline-block;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 195, 90, 0.12);
  color: var(--warning);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 800;
}

.promo-banner h3 {
  margin: 0.8rem 0 0.5rem;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
}

.pricing-grid {
  display: grid;
  gap: 1rem;
}

.price-card {
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.price-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
}

.price-tag {
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--accent);
}

.list {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--muted);
}

.list li + li {
  margin-top: 0.45rem;
}

.tier-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.tier-card {
  background: rgba(19, 28, 44, 0.8);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  min-height: 100%;
}

.tier-card .name {
  font-size: 1.1rem;
  font-weight: 800;
}

.tier-card .price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent);
}

.tier-card .meta {
  color: var(--muted);
}

.alt-bg {
  background: rgba(9, 16, 28, 0.6);
}

.portfolio-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.portfolio-card {
  overflow: hidden;
}

.portfolio-thumb {
  height: 220px;
  background-size: cover;
  background-position: center;
}

.thumb-one {
  background: linear-gradient(135deg, rgba(95, 224, 255, 0.1), rgba(124, 156, 255, 0.6)), url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.thumb-two {
  background: linear-gradient(135deg, rgba(184, 132, 255, 0.1), rgba(124, 156, 255, 0.6)), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.thumb-three {
  background: linear-gradient(135deg, rgba(126, 240, 199, 0.12), rgba(124, 156, 255, 0.62)), url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.portfolio-content {
  padding: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.about-wrap {
  display: grid;
  gap: 1.4rem;
  align-items: center;
}

.skills-list {
  padding-left: 1.2rem;
  color: var(--muted);
  display: grid;
  gap: 0.5rem;
  margin: 1.2rem 0 0;
}

.about-card {
  padding: 1.5rem;
}

.faq-list {
  display: grid;
  gap: 0.9rem;
}

.faq-list details {
  padding: 1rem 1.1rem;
}

.faq-list summary {
  cursor: pointer;
  font-weight: 700;
  list-style: none;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list p {
  margin: 0.7rem 0 0;
  color: var(--muted);
}

.contact-wrap {
  display: grid;
  gap: 1.2rem;
}

.contact-card {
  padding: 1.4rem;
}

.contact-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.contact-row:last-of-type {
  border-bottom: none;
  margin-bottom: 0.4rem;
}

.contact-row span {
  color: var(--muted);
}

.site-footer {
  padding: 2.5rem 0 1.3rem;
  background: rgba(9, 12, 18, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-wrap {
  display: grid;
  gap: 1.2rem;
}

.footer-brand {
  margin-bottom: 0.5rem;
}

.footer-links,
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--muted);
}

.copyright {
  text-align: center;
  color: rgba(237, 244, 255, 0.6);
  padding-top: 1rem;
  font-size: 0.9rem;
}

.scroll-top {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: white;
  box-shadow: 0 14px 28px rgba(107, 124, 255, 0.35);
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.scroll-top.visible {
  opacity: 1;
  pointer-events: auto;
}

.hidden {
  display: none !important;
}

@media (min-width: 700px) {
  .nav {
    display: flex;
  }

  .nav-toggle {
    display: none;
  }

  .hero-content,
  .about-wrap,
  .footer-wrap {
    grid-template-columns: 1.2fr 0.8fr;
  }

  .pricing-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-wrap {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr;
    align-items: start;
  }
}

@media (min-width: 980px) {
  .pricing-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .service-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 699px) {
  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    background: rgba(7, 11, 22, 0.96);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 1rem 0.8rem;
    display: none;
    flex-direction: column;
    align-items: flex-start;
  }

  .nav.open {
    display: flex;
  }

  .hero-copy h1 {
    font-size: 2.5rem;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .contact-row {
    flex-direction: column;
  }
}
