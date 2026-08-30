const capabilities = [
  ['Referrals', 'Submit management referrals through a structured employer pathway and see exactly where each case sits.'],
  ['Surveillance programmes', 'Track who is due, booked, in progress, completed or needs follow-up across sites and teams.'],
  ['Appointments', 'See planned activity without exposing confidential clinical detail.'],
  ['Reports', 'Access employer-facing outcomes and programme reporting from the appropriate secure workspace.'],
  ['Workforce records', 'Maintain the operational picture of roles, surveillance requirements and due dates.'],
  ['Audit & permissions', 'Role-based organisation access, traceable activity and controlled access to sensitive information.'],
];

export default function EmployersPage() {
  return (
    <main>
      <header className="inner-header"><div className="shell nav-wrap"><a className="brand" href="/"><span className="brand-mark">W</span><span>Work<span>Well</span></span></a><nav><a href="/services">Services</a><a href="/employers">Employers</a><a href="/industries">Industries</a><a href="/contact">Contact</a></nav><div className="nav-actions"><a className="text-link" href="/portal">Portal login</a><a className="button button-dark" href="/contact">Talk to our team</a></div></div></header>
      <section className="inner-hero employer-hero"><div className="shell narrow"><div className="eyebrow"><span></span> For employers</div><h1>See what is happening across your occupational-health service.</h1><p>WorkWell combines clinical delivery with a clear operational layer for HR, health and safety, operations and authorised managers.</p><div className="hero-actions"><a className="button button-primary" href="/portal/workspace">Preview WorkWell Connect →</a><a className="button button-ghost" href="/contact">Discuss your requirements</a></div></div></section>
      <section className="section"><div className="shell"><div className="section-heading split-heading"><div><div className="eyebrow"><span></span> WorkWell Connect</div><h2>A proper employer workspace, not a shared inbox.</h2></div><p>Operational visibility sits separately from confidential clinical notes. Employers see the information they need to manage referrals, compliance and programmes, while clinical detail remains controlled by role and purpose.</p></div><div className="capability-grid">{capabilities.map(([title, body],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="data-separation"><div className="shell separation-grid"><div><div className="eyebrow light"><span></span> Privacy by architecture</div><h2>Employer data and clinical data are not treated as the same thing.</h2></div><div className="separation-cards"><article><strong>Employer workspace</strong><p>Appointments, referral status, programme progress, due dates, employer reports and authorised workforce administration.</p></article><article><strong>Clinical workspace</strong><p>Clinical history, examination notes, test values, professional reasoning and other information that requires clinical access controls.</p></article><article><strong>Controlled outcome</strong><p>Only the appropriate employer-facing result moves across the boundary, with access and activity auditable.</p></article></div></div></section>
      <section className="section"><div className="shell"><div className="section-heading"><div className="eyebrow"><span></span> Multi-location ready</div><h2>One platform now. Regional separation when it is actually needed.</h2><p className="large-copy">The service model is designed so additional regions can share the same core platform while maintaining separate organisations, policies, data locations, service catalogues and operational rules where required.</p></div></div></section>
    </main>
  );
}
