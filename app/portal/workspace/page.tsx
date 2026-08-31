const rows = [
  ['EMP-1042','A. Morgan','Audiometry','Complete','Today'],
  ['EMP-1187','J. Patel','Management referral','Clinician review','Today'],
  ['EMP-1098','S. Hughes','Safety-critical medical','Booked','Yesterday'],
  ['EMP-1214','R. Evans','HAVS surveillance','Action required','Yesterday'],
  ['EMP-1162','L. Green','Spirometry','In progress','28 Aug'],
];

function statusClass(status:string){
  if(status==='Complete') return 'status green';
  if(status==='Action required') return 'status red';
  if(status==='Clinician review' || status==='In progress') return 'status amber';
  return 'status blue';
}

export default function WorkspacePage(){
  return <main className="workspace-page">
    <aside className="workspace-sidebar">
      <a className="workspace-brand" href="/"><span className="brand-mark">W</span><span>WorkWell <b>Connect</b></span></a>
      <nav className="workspace-nav"><a className="active" href="#">Overview</a><a href="#">Employees</a><a href="#">Referrals <em>18</em></a><a href="#">Surveillance</a><a href="#">Appointments</a><a href="#">Reports <em>7</em></a><a href="#">Documents</a><a href="#">Organisation</a></nav>
      <div className="workspace-user"><span>JS</span><div><strong>Demo employer</strong><small>Organisation admin</small></div></div>
    </aside>
    <section className="workspace-main">
      <header className="workspace-top"><div><small>WorkWell Connect / Overview</small><h1>Workforce health overview</h1></div><div className="workspace-actions"><button>Export report</button><button className="primary-action">+ New referral</button></div></header>
      <div className="notice-banner"><span>●</span><div><strong>Programme attention</strong><p>4 employees require follow-up before the current surveillance cycle can be closed.</p></div><a href="#">Review actions →</a></div>
      <div className="workspace-metrics">
        <article><small>Open referrals</small><strong>18</strong><span><i className="dot amber-dot"></i>5 awaiting appointment</span></article>
        <article><small>Surveillance due</small><strong>34</strong><span><i className="dot blue-dot"></i>Next 30 days</span></article>
        <article><small>Reports ready</small><strong>7</strong><span><i className="dot green-dot"></i>Available to review</span></article>
        <article><small>Programme completion</small><strong>82%</strong><div className="metric-progress"><i></i></div></article>
      </div>
      <div className="workspace-grid">
        <article className="workspace-panel activity-panel"><div className="panel-title"><div><small>Live activity</small><h2>Cases & examinations</h2></div><a href="#">View all</a></div><div className="workspace-table-wrap"><table className="workspace-table"><thead><tr><th>ID</th><th>Employee</th><th>Service</th><th>Status</th><th>Updated</th></tr></thead><tbody>{rows.map(r=><tr key={r[0]}><td>{r[0]}</td><td><strong>{r[1]}</strong></td><td>{r[2]}</td><td><span className={statusClass(r[3])}>{r[3]}</span></td><td>{r[4]}</td></tr>)}</tbody></table></div></article>
        <article className="workspace-panel programme-panel"><div className="panel-title"><div><small>Current cycle</small><h2>North Site</h2></div><span className="status green">On track</span></div><div className="programme-ring"><div><strong>82%</strong><span>complete</span></div></div><div className="programme-stats"><div><span>Completed</span><strong>86</strong></div><div><span>Booked</span><strong>15</strong></div><div><span>Outstanding</span><strong>4</strong></div></div><a className="programme-link" href="#">Open programme →</a></article>
      </div>
      <div className="workspace-grid lower-grid"><article className="workspace-panel"><div className="panel-title"><div><small>Upcoming</small><h2>Appointments</h2></div><a href="#">Calendar</a></div><div className="appointment-list"><div><span>31 AUG</span><div><strong>Mobile surveillance day</strong><small>North Site · 24 employees</small></div><b>08:30</b></div><div><span>02 SEP</span><div><strong>Safety-critical medicals</strong><small>Blackpool clinic · 6 employees</small></div><b>09:00</b></div><div><span>04 SEP</span><div><strong>Management referral</strong><small>Remote consultation</small></div><b>14:30</b></div></div></article><article className="workspace-panel"><div className="panel-title"><div><small>Compliance</small><h2>Due soon</h2></div><a href="#">View employees</a></div><div className="due-list"><div><span className="status red">4 overdue</span><p>Health surveillance requires action</p></div><div><span className="status amber">12 due soon</span><p>Due within the next 14 days</p></div><div><span className="status blue">18 upcoming</span><p>Due within 15–30 days</p></div></div></article></div>
    </section>
  </main>
}
