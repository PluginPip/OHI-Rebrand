const worklist = [
  { time: '09:00', person: 'Demo Patient A', employer: 'North Site Engineering', service: 'Health surveillance', stage: 'Ready', tone: 'green' },
  { time: '09:45', person: 'Demo Patient B', employer: 'North Site Engineering', service: 'HAVS Tier 2', stage: 'In progress', tone: 'amber' },
  { time: '10:30', person: 'Demo Patient C', employer: 'Civils Group', service: 'Safety-critical medical', stage: 'Awaiting clinician', tone: 'blue' },
  { time: '11:15', person: 'Demo Patient D', employer: 'Manufacturing UK', service: 'Audiometry', stage: 'Review required', tone: 'red' },
];

export default function ClinicalWorkspace() {
  return (
    <main className="clinical-shell">
      <aside className="clinical-sidebar">
        <a className="clinical-brand" href="/"><span>W</span><strong>WorkWell Clinical</strong></a>
        <nav className="clinical-nav" aria-label="Clinical navigation">
          <a className="active" href="/clinical">Worklist</a>
          <a href="/clinical/people/demo-001">People</a>
          <a href="#appointments">Appointments</a>
          <a href="#reports">Reports</a>
          <a href="#tasks">Clinical tasks</a>
          <a href="#audit">Audit trail</a>
        </nav>
        <div className="clinical-user"><span>RN</span><div><strong>Demo Clinician</strong><small>Registered nurse · UK</small></div></div>
      </aside>

      <section className="clinical-main">
        <header className="clinical-topbar">
          <div><small>Clinical workspace</small><h1>Today’s worklist</h1></div>
          <div className="clinical-top-actions"><button>Search</button><button className="primary-action">+ New encounter</button></div>
        </header>

        <div className="clinical-banner"><strong>Demo environment</strong><span>All names and records shown here are synthetic demonstration data.</span></div>

        <div className="clinical-metrics">
          <article><span>Today</span><strong>12</strong><small>appointments</small></article>
          <article><span>In progress</span><strong>3</strong><small>encounters</small></article>
          <article><span>Review</span><strong>2</strong><small>need sign-off</small></article>
          <article><span>Completed</span><strong>7</strong><small>today</small></article>
        </div>

        <section className="clinical-panel">
          <div className="clinical-panel-head"><div><small>Sunday 30 August</small><h2>Appointments & encounters</h2></div><div className="filter-pills"><button className="selected">All</button><button>Mine</button><button>Open</button></div></div>
          <div className="worklist-table">
            <div className="worklist-row worklist-head"><span>Time</span><span>Person</span><span>Employer</span><span>Service</span><span>Status</span><span></span></div>
            {worklist.map((row, index) => (
              <a className="worklist-row" href={index === 1 ? '/clinical/encounters/demo-enc-002' : '/clinical/people/demo-001'} key={row.time}>
                <strong>{row.time}</strong><span>{row.person}</span><span>{row.employer}</span><span>{row.service}</span><span><i className={`status-dot ${row.tone}`}></i>{row.stage}</span><b>→</b>
              </a>
            ))}
          </div>
        </section>

        <div className="clinical-lower-grid">
          <section className="clinical-panel"><div className="clinical-panel-head"><div><small>Clinical governance</small><h2>Tasks requiring attention</h2></div></div><div className="task-list"><a href="/clinical/encounters/demo-enc-002"><strong>HAVS questionnaire needs review</strong><span>Demo Patient B · due today</span></a><a href="#reports"><strong>2 fitness reports awaiting sign-off</strong><span>Employer release blocked until signed</span></a><a href="#audit"><strong>1 amended clinical record</strong><span>Review amendment audit entry</span></a></div></section>
          <section className="clinical-panel"><div className="clinical-panel-head"><div><small>Service delivery</small><h2>Programme progress</h2></div></div><div className="programme-card"><strong>North Site · August surveillance</strong><div className="clinical-progress"><i></i></div><div><span>38 of 50 complete</span><b>76%</b></div></div><div className="programme-card"><strong>Civils Group · Safety-critical</strong><div className="clinical-progress second"><i></i></div><div><span>17 of 22 complete</span><b>77%</b></div></div></section>
        </div>
      </section>
    </main>
  );
}
