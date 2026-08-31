const services = [
  ['◉','Health surveillance','Audiometry, lung function, HAVS, skin, vision and bespoke programmes.'],
  ['↗','Management referrals','Structured referrals with employer questions, appointment allocation and report tracking.'],
  ['✚','Safety-critical medicals','Fitness-for-role assessments for safety-sensitive occupations.'],
  ['▰','Mobile screening','Workplace delivery that reduces employee travel and operational downtime.'],
];

const products = [
  ['Management referral','£225','Evidence-based occupational health advice for an employee case.'],
  ['Safety-critical medical','From £95','Fitness-for-role assessment for safety-sensitive work.'],
  ['Drug & alcohol testing','From £65','Workplace testing with chain-of-custody options where required.'],
];

export default function Home() {
  return (
    <main className="prod-demo">
      <div className="pd-topbar"><span>UK-wide occupational health delivery</span><span>01253 366156 · Blackpool</span></div>
      <header className="pd-nav"><div className="pd-navin">
        <a className="pd-logo" href="/"><span className="pd-mark">W</span><span><b>WorkWell by OHI</b><small>Occupational health, rebuilt around work</small></span></a>
        <nav className="pd-navlinks"><a href="#services">Services</a><a href="#direct">WorkWell Direct</a><a href="#mobile">Mobile units</a><a href="#portalpreview">Employers</a><a href="/industries">Sectors</a></nav>
        <div className="pd-actions"><a className="pd-btn soft" href="/portal">Portal</a><a className="pd-btn primary" href="#direct">Tell us what you need</a></div>
      </div></header>

      <section className="pd-hero" id="home">
        <div><div className="pd-eyebrow">A new standard in workplace health</div><h1>Healthier people.<br/>Stronger workplaces.</h1><p>Preventative occupational health, health surveillance and workplace medicals with digital buying, structured referrals, mobile delivery and a secure employer portal.</p><div className="pd-heroCtas"><a className="pd-btn primary" href="#direct">Buy a service</a><a className="pd-btn soft" href="#mobile">Plan mobile delivery</a><a className="pd-btn soft" href="#direct">What do I need?</a></div></div>
        <div className="pd-visual"><div className="pd-eyebrow light">WORKWELL LIVE OPERATIONS</div><div className="pd-visual-title">Your workforce health, in one view.</div><div className="pd-visualCard"><b>ABC Engineering Ltd</b><div className="pd-metricgrid"><div className="pd-metric"><b>84</b><span>due this month</span></div><div className="pd-metric"><b>12</b><span>appointments booked</span></div><div className="pd-metric"><b>3</b><span>actions to review</span></div></div></div></div>
      </section>

      <section className="pd-section" id="services"><div className="pd-sectionHead"><div><div className="pd-eyebrow">Services</div><h2>One occupational-health partner.</h2></div><p>Each service is built as a proper digital journey, with the information, employer action and delivery route made clear before purchase or referral.</p></div><div className="pd-cards">{services.map(([icon,title,copy])=><article className="pd-card" key={title}><div><div className="pd-icon">{icon}</div><h3>{title}</h3><p>{copy}</p></div><a className="pd-link" href="/services">Explore →</a></article>)}</div></section>

      <section className="pd-section white" id="direct"><div className="pd-sectionHead"><div><div className="pd-eyebrow">WorkWell Direct</div><h2>Buy occupational health online.</h2></div><p>Every commerce service has a full description journey before purchase, covering suitability, inclusions, delivery and turnaround.</p></div><div className="pd-catalog">{products.map(([name,price,copy])=><article className="pd-product" key={name}><span className="pd-tag">Occupational health</span><h3>{name}</h3><div className="pd-price">{price}<small> demo pricing</small></div><p>{copy}</p><a className="pd-btn primary" href="/services">View service</a></article>)}</div></section>

      <section className="pd-section" id="mobile"><div className="pd-mobileGrid"><div className="pd-feature"><div className="pd-eyebrow">Mobile delivery</div><h2>Bring WorkWell to your workforce.</h2><p>Configure workplace delivery by location, headcount and screening programme.</p><div className="pd-fleet-callout"><div className="pd-eyebrow">Real OHI fleet</div><b>Using the existing mobile screening units</b><span>The production rebrand keeps the actual OHI vehicles as the visual source of truth.</span></div></div><div className="pd-planner"><div className="pd-eyebrow">Visit planner</div><h3>Plan a mobile visit</h3><label>Workplace postcode<input defaultValue="M1 1AE"/></label><label>Employees<input type="number" defaultValue="84"/></label><label>Programme<select defaultValue="Mixed health surveillance"><option>Mixed health surveillance</option><option>Audiometry + spirometry</option><option>HAVS + skin surveillance</option><option>Safety-critical medicals</option></select></label><label>Preferred date<input type="date"/></label><button className="pd-btn primary">Calculate requirement</button></div></div></section>

      <section className="pd-section white" id="real-fleet"><div className="pd-sectionHead"><div><div className="pd-eyebrow">The real mobile fleet</div><h2>Real OHI units, used properly in WorkWell.</h2></div><p>The original OHI vehicle photography remains the visual source of truth for the rebrand.</p></div><div className="pd-fleetGallery"><figure><img src="https://www.ohihealthessentials.co.uk/images/Gallery/16.jpg" alt="OHI smaller mobile health screening van"/><figcaption>Compact one-person screening unit</figcaption></figure><figure><img src="https://www.ohihealthessentials.co.uk/images/Gallery/17.jpg" alt="OHI larger mobile screening truck"/><figcaption>Large mobile screening unit</figcaption></figure><figure><img src="https://www.ohihealthessentials.co.uk/images/Gallery/18.jpg" alt="OHI mobile screening truck side view"/><figcaption>Flexible on-site delivery</figcaption></figure></div><div className="pd-fleetStats"><div><b>6</b><span>mobile units</span></div><div><b>2</b><span>large two-person units</span></div><div><b>4</b><span>smaller one-person units</span></div><div><b>13A</b><span>power requirement</span></div></div></section>

      <section className="pd-section" id="portalpreview"><div className="pd-sectionHead"><div><div className="pd-eyebrow">Employer portal</div><h2>Everything after the sale.</h2></div><p>Orders, employees, referrals, surveillance programmes, appointments, mobile visits, documents and billing in one workspace.</p></div><div className="pd-portalDemo"><div className="pd-portalFrame"><aside><div className="pd-sideitem active">Overview</div><div className="pd-sideitem">Employees</div><div className="pd-sideitem">Referrals</div><div className="pd-sideitem">Surveillance</div><div className="pd-sideitem">Appointments</div><div className="pd-sideitem">Documents</div></aside><div className="pd-dash"><div className="pd-stats"><div><b>18</b><span>Open referrals</span></div><div><b>34</b><span>Surveillance due</span></div><div><b>7</b><span>Reports ready</span></div><div><b>82%</b><span>Programme completion</span></div></div><div className="pd-panel"><b>North Site surveillance</b><p>86 completed · 15 booked · 4 outstanding</p></div><a className="pd-btn primary" href="/portal">Open employer portal</a></div></div></div></section>

      <footer className="pd-footer"><div className="pd-foot"><div><div className="pd-logo footer"><span className="pd-mark">W</span><span><b>WorkWell by OHI</b><small>Occupational health without the friction.</small></span></div><p>Employer-led occupational health, mobile surveillance, management referrals and practical workplace health services.</p></div><div><h4>Services</h4><a href="/services">All services</a><a href="#mobile">Mobile units</a><a href="/services">Management referrals</a></div><div><h4>Platform</h4><a href="/portal">Employer portal</a><a href="/clinical">Clinical workspace</a><a href="#direct">WorkWell Direct</a></div><div><h4>Contact</h4><span>01253 366156</span><span>Blackpool, UK</span></div></div></footer>
    </main>
  );
}
