export default function PortalPage() {
  return (
    <main className="portal-page">
      <section className="portal-card">
        <div className="portal-side">
          <div>
            <a className="brand brand-footer" href="/">
              <span className="brand-mark">W</span>
              <span>Work<span>Well</span></span>
            </a>
            <h1>Your occupational health, organised.</h1>
            <p>Secure employer access for referrals, appointment progress, workforce programmes, reports and outcomes.</p>
          </div>
          <div className="portal-points">
            <span>Track referrals and examinations</span>
            <span>View programme progress</span>
            <span>Access employer reports securely</span>
            <span>Role-based access and audit history</span>
          </div>
        </div>
        <div className="portal-login">
          <h2>Employer portal</h2>
          <p>Sign in to your organisation workspace.</p>
          <label htmlFor="email">Work email</label>
          <input id="email" type="email" placeholder="name@company.co.uk" autoComplete="email" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="••••••••••••" autoComplete="current-password" />
          <button className="button button-dark" type="button">Sign in</button>
          <p className="portal-note">This screen is the live-site portal entry point. Authentication, organisation tenancy, MFA and clinical-data permissions are implemented in the secured application layer, not the public website.</p>
          <a href="/" style={{marginTop: 12, fontSize: 13, fontWeight: 700}}>← Back to WorkWell</a>
        </div>
      </section>
    </main>
  );
}
