const services = [
  ['Health surveillance', 'Risk-led programmes including hearing, lung function, HAVS, skin and vision surveillance.'],
  ['Safety-critical medicals', 'Fitness assessments for working at height, confined spaces, FLT and other safety-critical roles.'],
  ['Drug & alcohol testing', 'Professional chain-of-custody workplace testing delivered at your site or clinic.'],
  ['Management referrals', 'Clear, practical occupational health advice to support attendance, adjustments and return to work.'],
  ['Mobile occupational health', 'Clinical teams and mobile screening units brought directly to your workforce.'],
  ['Workplace assessments', 'DSE, workstation and role-focused assessments aligned to the risks your people actually face.'],
];

const sectors = ['Construction', 'Manufacturing', 'Engineering', 'Energy', 'Transport & logistics', 'Public sector'];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>Occupational health for organisations across the UK</span>
          <div><a href="tel:01253366156">01253 366156</a><a href="mailto:admin@ohihealthessentials.co.uk">Email us</a></div>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="/" aria-label="WorkWell home">
            <span className="brand-mark">W</span>
            <span>Work<span>Well</span></span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#mobile">Mobile health</a>
            <a href="#employers">Employers</a>
            <a href="#sectors">Industries</a>
            <a href="#about">About</a>
          </nav>
          <div className="nav-actions">
            <a className="text-link" href="/portal">Portal login</a>
            <a className="button button-dark" href="#contact">Talk to our team</a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> Occupational health that comes to you</div>
            <h1>Healthier people.<br /><em>Stronger workplaces.</em></h1>
            <p className="hero-lead">Practical occupational health, health surveillance and safety-critical medicals, delivered around your workforce instead of the other way round.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Discuss your requirements <Arrow /></a>
              <a className="button button-ghost" href="#services">Explore services</a>
            </div>
            <div className="trust-row">
              <div><strong>UK-wide</strong><span>mobile delivery</span></div>
              <div><strong>Risk-led</strong><span>clinical programmes</span></div>
              <div><strong>Employer-ready</strong><span>digital reporting</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="WorkWell mobile occupational health unit">
            <div className="visual-card">
              <div className="visual-label"><span className="pulse"></span> Mobile clinical service</div>
              <img src="https://www.ohihealthessentials.co.uk/images/ohi-truck1.png" alt="OHI mobile health screening unit" />
              <div className="availability-card">
                <span className="availability-icon">✓</span>
                <div><strong>On-site appointments</strong><span>Reduce workforce downtime and travel</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="shell proof-grid">
          <p>Built around the real risks in your workplace</p>
          {['Hearing', 'Respiratory', 'HAVS', 'Safety critical', 'Drug & alcohol'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section" id="services">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><div className="eyebrow"><span></span> Occupational health services</div><h2>The right support,<br />at the right time.</h2></div>
            <p>From prevention and surveillance to individual referrals and complex workplace advice, our services are designed to help employers act earlier and make better-informed decisions.</p>
          </div>
          <div className="service-grid">
            {services.map(([title, description], index) => (
              <a className="service-card" href="#contact" key={title}>
                <div className="service-number">0{index + 1}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="card-link">Explore service <Arrow /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-section" id="mobile">
        <div className="shell mobile-grid">
          <div className="mobile-image">
            <div className="image-panel"><img src="https://www.ohihealthessentials.co.uk/images/ohi-truck1.png" alt="Mobile occupational health screening vehicle" /></div>
            <div className="stat-card"><strong>6</strong><span>mobile health units supporting flexible on-site delivery</span></div>
          </div>
          <div className="mobile-copy">
            <div className="eyebrow light"><span></span> Mobile occupational health</div>
            <h2>We bring the clinic<br />to your workforce.</h2>
            <p>On-site health surveillance means less disruption, less travel and a service that can scale around shifts, sites and operational demand.</p>
            <div className="feature-list">
              <div><i>01</i><span><strong>Purpose-built mobile units</strong>Set up for professional occupational health screening at your premises.</span></div>
              <div><i>02</i><span><strong>Flexible clinical teams</strong>Programmes shaped around workforce size, shift patterns and risk profiles.</span></div>
              <div><i>03</i><span><strong>Connected reporting</strong>Clear outcomes and employer reporting without losing sight of clinical confidentiality.</span></div>
            </div>
            <a className="button button-light" href="#contact">Plan an on-site programme <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section pale" id="employers">
        <div className="shell employer-grid">
          <div>
            <div className="eyebrow"><span></span> Built for employers</div>
            <h2>Less admin.<br />More visibility.</h2>
            <p className="large-copy">A modern occupational health service should be easy to manage. WorkWell is being built around a secure employer portal that keeps referrals, appointment progress, outcomes and workforce reporting organised in one place.</p>
            <a className="button button-dark" href="/portal">Preview employer portal <Arrow /></a>
          </div>
          <div className="dashboard-mock">
            <div className="dash-top"><span>WorkWell</span><small>Employer portal</small></div>
            <div className="dash-body">
              <div className="dash-sidebar"><b></b><b></b><b></b><b></b><b></b></div>
              <div className="dash-content">
                <div className="dash-title"><div><small>Good afternoon</small><strong>Workforce overview</strong></div><span>+ New referral</span></div>
                <div className="metrics"><div><small>Active cases</small><strong>18</strong></div><div><small>Appointments</small><strong>07</strong></div><div><small>Completed</small><strong>42</strong></div></div>
                <div className="progress-panel"><small>Surveillance programme</small><strong>North site · August</strong><div className="progress"><i></i></div><span>76% complete</span></div>
                <div className="mini-rows"><i></i><i></i><i></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="sectors">
        <div className="shell">
          <div className="section-heading"><div className="eyebrow"><span></span> Industries we support</div><h2>Occupational health shaped<br />around the work you do.</h2></div>
          <div className="sector-list">
            {sectors.map((sector, index) => <a href="#contact" key={sector}><span>0{index + 1}</span><strong>{sector}</strong><Arrow /></a>)}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="shell cta-grid">
          <div><div className="eyebrow light"><span></span> Start a conversation</div><h2>Make occupational health<br />work better for your business.</h2></div>
          <div><p>Tell us what you need, where your people are and the risks you need to manage. We’ll help you shape the right service.</p><div className="cta-actions"><a className="button button-light" href="tel:01253366156">Call 01253 366156</a><a className="button button-outline-light" href="mailto:admin@ohihealthessentials.co.uk">Email our team</a></div></div>
        </div>
      </section>

      <footer id="about">
        <div className="shell footer-grid">
          <div><a className="brand brand-footer" href="/"><span className="brand-mark">W</span><span>Work<span>Well</span></span></a><p>Occupational health built around people, workplaces and better decisions.</p></div>
          <div><strong>Services</strong><a href="#services">Health surveillance</a><a href="#services">Safety-critical medicals</a><a href="#services">Drug & alcohol testing</a><a href="#services">Management referrals</a></div>
          <div><strong>WorkWell</strong><a href="#mobile">Mobile health</a><a href="#employers">Employer portal</a><a href="#sectors">Industries</a><a href="#contact">Contact</a></div>
          <div><strong>Contact</strong><span>312 Central Drive<br />Blackpool, FY1 6LE</span><a href="tel:01253366156">01253 366156</a><a href="mailto:admin@ohihealthessentials.co.uk">admin@ohihealthessentials.co.uk</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 WorkWell. OHI Health Essentials Ltd.</span><span>Privacy · Cookies · Accessibility</span></div>
      </footer>
    </main>
  );
}
