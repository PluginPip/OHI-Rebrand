const sectors = [
  ['Construction', 'Safety-critical medicals, HAVS, hearing, respiratory and role-specific surveillance for site-based teams.'],
  ['Manufacturing', 'Exposure-led programmes for noise, respiratory hazards, skin risks, vibration and shift-based workforces.'],
  ['Engineering', 'Structured surveillance and fitness pathways for specialist roles, workshops and field operations.'],
  ['Energy & utilities', 'Operationally practical medicals and surveillance for safety-sensitive and distributed teams.'],
  ['Transport & logistics', 'Driver and safety-critical assessments, night-worker support and scalable workforce programmes.'],
  ['Public sector', 'Clear referral pathways, workforce programmes and employer reporting for complex organisations.'],
];

export default function IndustriesPage(){
  return <main>
    <header className="inner-header"><div className="shell nav-wrap"><a className="brand" href="/"><span className="brand-mark">W</span><span>Work<span>Well</span></span></a><nav><a href="/services">Services</a><a href="/employers">Employers</a><a href="/industries">Industries</a><a href="/contact">Contact</a></nav><div className="nav-actions"><a className="text-link" href="/portal">Portal login</a><a className="button button-dark" href="/contact">Talk to our team</a></div></div></header>
    <section className="inner-hero"><div className="shell narrow"><div className="eyebrow"><span></span> Industries</div><h1>Occupational health shaped around the work, not a generic package.</h1><p>Different industries create different exposures, fitness requirements and operational constraints. WorkWell programmes are configured around those realities.</p></div></section>
    <section className="section compact-top"><div className="shell industry-grid">{sectors.map(([name,body],i)=><article key={name}><span>0{i+1}</span><h2>{name}</h2><p>{body}</p><a href="/contact">Build a programme →</a></article>)}</div></section>
    <section className="process-section"><div className="shell"><div className="section-heading"><div className="eyebrow light"><span></span> Programme design</div><h2>One workforce can contain several different health-risk profiles.</h2></div><div className="process-grid"><div><span>01</span><h3>Roles</h3><p>Map job groups and safety-sensitive responsibilities.</p></div><div><span>02</span><h3>Exposures</h3><p>Identify surveillance requirements from actual workplace hazards.</p></div><div><span>03</span><h3>Frequency</h3><p>Set appropriate assessment and recall cycles by pathway.</p></div><div><span>04</span><h3>Delivery</h3><p>Combine mobile, clinic and remote services around operations.</p></div></div></div></section>
  </main>
}
