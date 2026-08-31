const tests = [
  { name: 'Identity & consent', state: 'Complete', tone: 'green' },
  { name: 'Exposure questionnaire', state: 'Complete', tone: 'green' },
  { name: 'HAVS Tier 2 questionnaire', state: 'In review', tone: 'amber' },
  { name: 'Clinical assessment', state: 'Not started', tone: 'grey' },
  { name: 'Outcome & report', state: 'Locked', tone: 'grey' },
];

export default function EncounterPage() {
  return (
    <main className="encounter-page">
      <header className="encounter-header">
        <div><a href="/clinical">← Worklist</a><span>Encounter DEMO-ENC-002</span></div>
        <div><button>Save draft</button><button className="primary-action">Complete review</button></div>
      </header>

      <div className="encounter-grid">
        <aside className="encounter-person">
          <div className="person-avatar">DB</div>
          <small>Synthetic demo record</small>
          <h1>Demo Patient B</h1>
          <p>North Site Engineering</p>
          <dl><div><dt>Service</dt><dd>HAVS Tier 2</dd></div><div><dt>Role</dt><dd>Fabricator</dd></div><div><dt>Region</dt><dd>UK</dd></div><div><dt>Appointment</dt><dd>30 Aug 2026 · 09:45</dd></div></dl>
          <div className="confidentiality-box"><strong>Clinical record</strong><span>Detailed responses and notes remain within the clinical workspace. Employer users receive only authorised occupational-health outcomes.</span></div>
        </aside>

        <section className="encounter-content">
          <div className="encounter-title"><div><small>Health surveillance encounter</small><h2>HAVS Tier 2 review</h2></div><span className="status-chip amber">In progress</span></div>

          <div className="encounter-stage-list">
            {tests.map((test, index) => <div className={`encounter-stage ${index === 2 ? 'current' : ''}`} key={test.name}><span className="stage-number">{index + 1}</span><strong>{test.name}</strong><span className={`status-chip ${test.tone}`}>{test.state}</span></div>)}
          </div>

          <section className="clinical-form-card">
            <div className="form-card-head"><div><small>Tier 2 questionnaire</small><h3>Review reported symptoms</h3></div><span>Autosave enabled in production</span></div>
            <div className="answer-grid">
              <div><span>Numbness or tingling reported</span><strong>Yes</strong></div><div><span>Blanching of fingers reported</span><strong>No</strong></div><div><span>Symptoms affecting work</span><strong>Occasionally</strong></div><div><span>Recent change</span><strong>No</strong></div>
            </div>
            <label className="form-label" htmlFor="clinical-note">Clinical review note</label>
            <textarea id="clinical-note" defaultValue="Synthetic demonstration note. Review symptom pattern and exposure history before determining whether escalation is clinically indicated." />
            <div className="form-check"><input id="reviewed" type="checkbox" /><label htmlFor="reviewed">I have reviewed the questionnaire responses and relevant occupational history.</label></div>
          </section>

          <section className="clinical-form-card outcome-card">
            <div className="form-card-head"><div><small>Next step</small><h3>Clinical decision</h3></div></div>
            <div className="decision-grid"><button>Continue surveillance</button><button>Escalate for Tier 3 assessment</button><button>Request further information</button></div>
            <p>No employer-facing fitness or restriction outcome is released until the clinician completes the encounter and signs the appropriate report.</p>
          </section>
        </section>
      </div>
    </main>
  );
}
