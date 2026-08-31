import Link from 'next/link';

const VERSION = 'v1.0.1';
const services = [
  ['🩺','Health surveillance','Risk-led health surveillance programmes for workplace exposure risks.','£55','/health-surveillance'],
  ['👩‍⚕️','Management referral','Occupational-health advice for absence, capability and workplace adjustments.','£195','/management-referral'],
  ['🦺','Safety-critical medicals','Role-appropriate medical assessment for safety-critical workers.','£125','/safety-critical-medicals'],
  ['🧪','Drug & alcohol testing','Workplace testing programmes and policy-aligned delivery.','£85','/drug-alcohol-testing'],
  ['📋','Pre-placement health','Proportionate pre-placement screening based on role requirements.','£49','/pre-placement-health'],
  ['💉','Workplace vaccinations','Employer vaccination programmes and suitable workplace delivery.','£65','/workplace-vaccinations']
];
const fleet = [
  ['9.jpg','OHI large two-person mobile unit','OHI large mobile health screening unit'],
  ['16.jpg','OHI smaller one-person unit','OHI smaller mobile health screening unit'],
  ['17.jpg','OHI mobile screening unit','OHI mobile health screening vehicle'],
  ['3.jpg','Mobile clinical interior','Interior of an OHI mobile health screening unit'],
  ['4.jpg','On-site screening space','OHI mobile health unit clinical interior']
];

export default function Home() {
  return <>
    <a className="skip" href="#main">Skip to main content</a>
    <div className="topbar"><span>UK-wide occupational health delivery</span><span>01253 366156 · Blackpool</span></div>
    <header><div className="nav">
      <Link className="brand" href="/"><span className="mark">W</span><span><b>WorkWell {VERSION} by OHI</b><small>Occupational health, rebuilt around work</small></span></Link>
      <nav className="navlinks">{[['Services','/services'],['Sectors','/sectors'],['Mobile units','/mobile-units'],['Employers','/employers'],['Employees','/employees'],['Resources','/resources'],['About','/about']].map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav>
      <div className="actions"><Link className="btn soft" href="/login">Portal</Link><Link className="btn primary" href="/what-do-i-need">Tell us what you need</Link></div>
    </div></header>
    <main id="main">
      <section className="hero"><div className="wrap hero-grid"><div><span className="kicker">Occupational health, rebuilt around work</span><h1>Healthier people.<br/>Stronger workplaces.</h1><p className="lead">WorkWell by OHI makes occupational health easier to understand, buy, book and manage, from one employee referral to nationwide mobile health surveillance.</p><div className="hero-actions"><Link className="btn primary" href="/services">Explore services</Link><Link className="btn dark" href="/what-do-i-need">Tell us what you need</Link></div><div className="ticks"><span>✓ UK-wide mobile delivery</span><span>✓ Employer + employee journeys</span><span>✓ Privacy-first clinical workflows</span></div></div>
      <div className="visual"><div className="hero-photo"><img alt="OHI mobile health screening unit" src="https://images.weserv.nl/?url=www.ohihealthessentials.co.uk/images/Gallery/9.jpg&output=webp&q=88"/><div className="photo-fallback">OHI MOBILE HEALTH</div><div className="hero-copy"><span className="badge">OHI mobile delivery</span><h3>Occupational health that comes to your workforce</h3><p>Real-world delivery backed by a modern digital journey.</p></div></div><div className="metrics"><div className="metric"><strong>6</strong><small>mobile units</small></div><div className="metric"><strong>UK</strong><small>wide delivery</small></div><div className="metric"><strong>1</strong><small>connected journey</small></div></div></div></div></section>

      <section className="section"><div className="wrap"><span className="kicker">The real OHI mobile fleet</span><h2 className="mt14">Six mobile units. Flexible delivery across UK workplaces.</h2><p className="lead">OHI states that its fleet comprises two large two-person units and four smaller one-person units. All six units have sound-proof hearing booths, while advisors and technicians also carry portable health-screening equipment.</p><div className="ohi-fleet-grid">{fleet.map(([img,label,alt])=><figure className="ohi-photo-card" key={img}><img className="ohi-fleet-photo" src={`https://images.weserv.nl/?url=www.ohihealthessentials.co.uk/images/Gallery/${img}&output=webp&q=88`} alt={alt}/><figcaption className="ohi-photo-label">{label}</figcaption></figure>)}</div><div className="ohi-facts"><div className="ohi-fact"><b>6</b><span>mobile units</span></div><div className="ohi-fact"><b>2</b><span>large two-person units</span></div><div className="ohi-fact"><b>4</b><span>smaller one-person units</span></div><div className="ohi-fact"><b>13A</b><span>domestic power supply</span></div></div><p className="ohi-source-note">Fleet imagery and operational facts are based on OHI Health Essentials&apos; current Mobile Units page. Production should store OHI-supplied originals locally on the new site.</p></div></section>

      <section className="section"><div className="wrap"><span className="kicker">Core services</span><h2 className="mt14">Occupational health without the maze.</h2><div className="grid3 services-grid">{services.map(([icon,name,desc,price,href])=><article className="card visual-card" key={name}><div className="art">{icon}</div><div className="card-body"><span className="badge">Service</span><h3 className="mt12">{name}</h3><p>{desc}</p><div className="price">{price}</div><div className="muted">Representative demo price</div><Link className="btn dark mt14btn" href={href}>View service</Link></div></article>)}</div></div></section>
      <section className="section band"><div className="wrap grid2"><div><span className="kicker">Employer systems</span><h2 className="mt14">One front door for referrals, surveillance and reporting.</h2><p>Use the demo portal to see how the website connects into employer operations.</p><Link className="btn primary" href="/login">Open portal login</Link></div><div className="grid2"><div className="card"><h3>Referrals</h3><p>Structured management referrals and clear status.</p></div><div className="card"><h3>Surveillance</h3><p>Programme activity, attendance and recalls.</p></div><div className="card"><h3>Mobile units</h3><p>Site requirements and on-site programme requests.</p></div><div className="card"><h3>Documents</h3><p>Employer-facing reports and programme records.</p></div></div></div></section>
    </main>
    <footer><div className="wrap"><div className="footergrid"><div><div className="brand"><span className="mark">W</span><span><b>WorkWell {VERSION} by OHI</b><small className="footer-small">Occupational health without the friction.</small></span></div><p>Employer-led occupational health, mobile surveillance, management referrals and practical workplace health services.</p></div><div><b>Services</b><Link href="/services">All services</Link><Link href="/mobile-units">Mobile units</Link><Link href="/management-referral">Management referrals</Link><Link href="/shop">Buy online</Link></div><div><b>Company</b><Link href="/about">About</Link><Link href="/governance">Clinical governance</Link><Link href="/accreditations">Accreditations</Link><Link href="/standards-security">Standards & security</Link><Link href="/production-blueprint">Production blueprint</Link><Link href="/careers">Careers</Link></div><div><b>Support</b><Link href="/contact">Contact</Link><Link href="/faq">FAQ</Link><Link href="/privacy">Privacy</Link><Link href="/accessibility">Accessibility</Link><Link href="/terms">Terms</Link></div></div><div className="legal">WorkWell {VERSION} by OHI · End-demo release concept for OHI Health Essentials Ltd. Demo pricing and sample records are illustrative only.</div></div></footer>
  </>;
}
