const services = [
  ['🩺','Health surveillance','Risk-led health surveillance programmes for workplace exposure risks.','£55'],
  ['👩‍⚕️','Management referral','Occupational-health advice for absence, capability and workplace adjustments.','£195'],
  ['🦺','Safety-critical medicals','Role-appropriate medical assessment for safety-critical workers.','£125'],
  ['🧪','Drug & alcohol testing','Workplace testing programmes and policy-aligned delivery.','£85'],
  ['📋','Pre-placement health','Proportionate pre-placement screening based on role requirements.','£49'],
  ['💉','Workplace vaccinations','Employer vaccination programmes and suitable workplace delivery.','£65'],
];

const fleet = [
  ['https://images.weserv.nl/?url=www.ohihealthessentials.co.uk/images/Gallery/9.jpg&output=webp&q=88','OHI large two-person mobile unit'],
  ['https://images.weserv.nl/?url=www.ohihealthessentials.co.uk/images/Gallery/16.jpg&output=webp&q=88','OHI smaller one-person unit'],
  ['https://images.weserv.nl/?url=www.ohihealthessentials.co.uk/images/Gallery/17.jpg&output=webp&q=88','OHI mobile screening unit'],
  ['https://images.weserv.nl/?url=www.ohihealthessentials.co.uk/images/Gallery/3.jpg&output=webp&q=88','Mobile clinical interior'],
  ['https://images.weserv.nl/?url=www.ohihealthessentials.co.uk/images/Gallery/4.jpg&output=webp&q=88','On-site screening space'],
];

export default function Home(){
  return <main className="end-demo">
    <a className="ed-skip" href="#main">Skip to main content</a>
    <div className="ed-topbar"><span>UK-wide occupational health delivery</span><span>01253 366156 · Blackpool</span></div>
    <header className="ed-header"><div className="ed-nav">
      <a className="ed-brand" href="/"><span className="ed-mark">W</span><span><b>WorkWell by OHI</b><small>Occupational health, rebuilt around work</small></span></a>
      <nav className="ed-navlinks" aria-label="Main navigation"><a href="/services">Services</a><a href="/industries">Sectors</a><a href="#real-ohi-fleet">Mobile units</a><a href="/employers">Employers</a><a href="#employees">Employees</a><a href="#resources">Resources</a><a href="#about">About</a></nav>
      <div className="ed-actions"><a className="ed-btn soft" href="/portal">Portal</a><a className="ed-btn primary" href="/contact">Tell us what you need</a></div>
    </div></header>

    <div id="main">
      <section className="ed-hero"><div className="ed-wrap ed-hero-grid"><div>
        <span className="ed-kicker">Occupational health, rebuilt around work</span>
        <h1>Healthier people.<br/>Stronger workplaces.</h1>
        <p className="ed-lead">WorkWell by OHI makes occupational health easier to understand, buy, book and manage, from one employee referral to nationwide mobile health surveillance.</p>
        <div className="ed-hero-actions"><a className="ed-btn primary" href="/services">Explore services</a><a className="ed-btn dark" href="/contact">Tell us what you need</a></div>
        <div className="ed-ticks"><span>✓ UK-wide mobile delivery</span><span>✓ Employer + employee journeys</span><span>✓ Privacy-first clinical workflows</span></div>
      </div><div className="ed-visual"><div className="ed-hero-photo"><img alt="OHI mobile health screening unit" src={fleet[0][0]}/><div className="ed-photo-fallback">OHI MOBILE HEALTH</div><div className="ed-hero-copy"><span className="ed-badge">OHI mobile delivery</span><h3>Occupational health that comes to your workforce</h3><p>Real-world delivery backed by a modern digital journey.</p></div></div><div className="ed-metrics"><div className="ed-metric"><strong>6</strong><small>mobile units</small></div><div className="ed-metric"><strong>UK</strong><small>wide delivery</small></div><div className="ed-metric"><strong>1</strong><small>connected journey</small></div></div></div></div></section>

      <section className="ed-section" id="real-ohi-fleet"><div className="ed-wrap">
        <span className="ed-kicker">The real OHI mobile fleet</span><h2>Six mobile units. Flexible delivery across UK workplaces.</h2>
        <p className="ed-lead">OHI states that its fleet comprises two large two-person units and four smaller one-person units. All six units have sound-proof hearing booths, while advisors and technicians also carry portable health-screening equipment.</p>
        <div className="ed-fleet-grid">{fleet.map(([src,label])=><figure className="ed-photo-card" key={label}><img src={src} alt={label}/><figcaption>{label}</figcaption></figure>)}</div>
        <div className="ed-facts"><div><b>6</b><span>mobile units</span></div><div><b>2</b><span>large two-person units</span></div><div><b>4</b><span>smaller one-person units</span></div><div><b>13A</b><span>domestic power supply</span></div></div>
      </div></section>

      <section className="ed-section ed-services"><div className="ed-wrap"><span className="ed-kicker">Core services</span><h2>Occupational health without the maze.</h2><div className="ed-grid3">{services.map(([icon,title,copy,price])=><article className="ed-card ed-visual-card" key={title}><div className="ed-art">{icon}</div><div className="ed-card-body"><span className="ed-badge">Service</span><h3>{title}</h3><p>{copy}</p><div className="ed-price">{price}</div><div className="ed-muted">Representative demo price</div><a className="ed-btn dark" href="/services">View service</a></div></article>)}</div></div></section>

      <section className="ed-section ed-band"><div className="ed-wrap ed-grid2"><div><span className="ed-kicker">Employer systems</span><h2>One front door for referrals, surveillance and reporting.</h2><p>Use the demo portal to see how the website connects into employer operations.</p><a className="ed-btn primary" href="/portal">Open portal login</a></div><div className="ed-grid2"><div className="ed-card"><h3>Referrals</h3><p>Structured management referrals and clear status.</p></div><div className="ed-card"><h3>Surveillance</h3><p>Programme activity, attendance and recalls.</p></div><div className="ed-card"><h3>Mobile units</h3><p>Site requirements and on-site programme requests.</p></div><div className="ed-card"><h3>Documents</h3><p>Employer-facing reports and programme records.</p></div></div></div></section>
    </div>

    <footer className="ed-footer" id="about"><div className="ed-wrap"><div className="ed-footergrid"><div><div className="ed-brand"><span className="ed-mark">W</span><span><b>WorkWell by OHI</b><small>Occupational health without the friction.</small></span></div><p>Employer-led occupational health, mobile surveillance, management referrals and practical workplace health services.</p></div><div><b>Services</b><a href="/services">All services</a><a href="#real-ohi-fleet">Mobile units</a><a href="/services">Management referrals</a><a href="/services">Buy online</a></div><div><b>Company</b><a href="#about">About</a><a href="/clinical">Clinical governance</a><a href="#about">Accreditations</a><a href="#about">Standards & security</a></div><div><b>Support</b><a href="/contact">Contact</a><a href="#resources">FAQ</a><a href="#about">Privacy</a><a href="#about">Accessibility</a><a href="#about">Terms</a></div></div><div className="ed-legal">End-demo release concept for OHI Health Essentials Ltd. Demo pricing and sample records are illustrative only.</div></div></footer>
  </main>
}
