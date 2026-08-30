const groups = [
  {
    title: 'Health surveillance',
    intro: 'Risk-led surveillance programmes designed around the actual exposures in your workplace.',
    items: ['Audiometry / hearing surveillance', 'Spirometry / respiratory surveillance', 'HAVS and hand-arm vibration', 'Skin surveillance', 'Vision screening', 'Night worker assessments'],
  },
  {
    title: 'Medical assessments',
    intro: 'Consistent, practical fitness assessments for roles where health and operational safety meet.',
    items: ['Safety-critical medicals', 'Working at height', 'Confined space medicals', 'Forklift / plant operator medicals', 'Driver medicals', 'Pre-placement screening'],
  },
  {
    title: 'Management support',
    intro: 'Independent occupational-health advice that helps managers make informed, fair decisions.',
    items: ['Management referrals', 'Return-to-work advice', 'Reasonable adjustment guidance', 'Attendance and capability support', 'Case review', 'Workplace assessments'],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <header className="inner-header">
        <div className="shell nav-wrap">
          <a className="brand" href="/"><span className="brand-mark">W</span><span>Work<span>Well</span></span></a>
          <nav><a href="/services">Services</a><a href="/employers">Employers</a><a href="/industries">Industries</a><a href="/contact">Contact</a></nav>
          <div className="nav-actions"><a className="text-link" href="/portal">Portal login</a><a className="button button-dark" href="/contact">Talk to our team</a></div>
        </div>
      </header>

      <section className="inner-hero">
        <div className="shell narrow">
          <div className="eyebrow"><span></span> Occupational health services</div>
          <h1>Clinical services built around the risks, roles and people in your workplace.</h1>
          <p>Use WorkWell for a single assessment, a recurring health-surveillance programme or an integrated occupational-health service across multiple sites.</p>
        </div>
      </section>

      <section className="section compact-top">
        <div className="shell service-groups">
          {groups.map((group, index) => (
            <article className="service-group" key={group.title}>
              <div className="service-group-head"><span>0{index + 1}</span><div><h2>{group.title}</h2><p>{group.intro}</p></div></div>
              <div className="service-items">{group.items.map((item) => <div key={item}><span>✓</span>{item}</div>)}</div>
              <a className="button button-ghost" href="/contact">Discuss {group.title.toLowerCase()} →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="shell">
          <div className="section-heading"><div className="eyebrow light"><span></span> How it works</div><h2>From requirement to outcome, without the usual chasing.</h2></div>
          <div className="process-grid">
            <div><span>01</span><h3>Define the need</h3><p>Tell us the roles, hazards, headcount, locations or case you need support with.</p></div>
            <div><span>02</span><h3>Plan delivery</h3><p>We structure the right clinical pathway, appointments and on-site capacity.</p></div>
            <div><span>03</span><h3>Complete assessments</h3><p>Clinicians record examinations, findings, tests and professional outcomes securely.</p></div>
            <div><span>04</span><h3>See the result</h3><p>Employers receive appropriate outcomes and programme visibility through WorkWell Connect.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-section"><div className="shell cta-grid"><div><div className="eyebrow light"><span></span> Not sure what you need?</div><h2>Describe the workplace risk. We’ll map the service.</h2></div><div><p>You do not need to know the clinical terminology. Tell us what your people do and what you are trying to manage.</p><a className="button button-light" href="/contact">Get service guidance →</a></div></div></section>
    </main>
  );
}
