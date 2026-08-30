export default function PersonRecordPage() {
  return (
    <main className="person-record-page">
      <header className="encounter-header"><div><a href="/clinical">← Worklist</a><span>Person record</span></div><div><button>Print summary</button><button className="primary-action">Start encounter</button></div></header>
      <div className="person-record-shell">
        <section className="person-record-hero">
          <div className="person-avatar large">DA</div>
          <div><small>Synthetic demo record</small><h1>Demo Patient A</h1><p>North Site Engineering · Maintenance Technician · UK</p></div>
          <span className="status-chip green">Active surveillance</span>
        </section>
        <div className="person-record-grid">
          <section className="clinical-panel"><div className="clinical-panel-head"><div><small>Current programme</small><h2>Health surveillance</h2></div></div><div className="record-summary-list"><div><span>Audiometry</span><strong className="status-chip green">Complete</strong></div><div><span>Spirometry</span><strong className="status-chip amber">Due today</strong></div><div><span>Skin surveillance</span><strong className="status-chip green">Complete</strong></div><div><span>Vision screening</span><strong className="status-chip grey">Not required</strong></div></div></section>
          <section className="clinical-panel"><div className="clinical-panel-head"><div><small>Employer-authorised output</small><h2>Current status</h2></div></div><div className="employer-output"><strong>No report pending</strong><p>Employer-facing information is generated from signed clinical outcomes only. Clinical notes and detailed test responses are not shown in the employer workspace.</p></div></section>
        </div>
        <section className="clinical-panel"><div className="clinical-panel-head"><div><small>Clinical history</small><h2>Encounters & results</h2></div></div><div className="history-table"><div><span>18 Feb 2026</span><strong>Health surveillance</strong><span>Audiometry · Spirometry · Skin</span><b className="status-chip green">Completed</b></div><div><span>12 Aug 2025</span><strong>Annual surveillance</strong><span>Audiometry · Respiratory</span><b className="status-chip green">Completed</b></div><div><span>04 Sep 2024</span><strong>Baseline assessment</strong><span>Pre-placement surveillance</span><b className="status-chip green">Completed</b></div></div></section>
      </div>
    </main>
  );
}
