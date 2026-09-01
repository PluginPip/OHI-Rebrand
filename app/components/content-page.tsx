import Link from 'next/link';import {Shell,PageHero} from '../components/site';

const pages:any={
sectors:['Sectors','Occupational health shaped around your working environment.','Construction & infrastructure|Manufacturing & engineering|Transport & logistics|Public sector|Healthcare & care|Office & professional'],
'mobile-units':['Mobile occupational health','Bring the clinic to the workforce.','Six-unit mobile fleet|Two large two-person units|Four smaller one-person units|Sound-proof hearing booths|Portable screening equipment|UK-wide delivery'],
employers:['For employers','One connected route from referral to outcome.','Management referrals|Health surveillance programmes|Employee status and recalls|Mobile-unit requests|Employer reports|Secure document access'],
employees:['For employees','Clear information before, during and after occupational health.','What to expect|Confidentiality and consent|Preparing for an appointment|Accessing your information|Workplace adjustments|Questions and support'],
resources:['Resources','Practical occupational-health guidance for employers and employees.','Management referral guide|Health surveillance guide|Safety-critical medicals|Drug & alcohol testing|Mobile-unit site preparation|Employee appointment guide'],
about:['About WorkWell by OHI','Modern occupational health built around people and work.','UK-wide service delivery|Experienced clinical team|Mobile occupational health|Employer-focused systems|Confidential employee journeys|Practical workplace advice'],
careers:['Careers','Help build a better occupational-health experience.','Occupational-health nurses|Doctors and physicians|Technicians|Administration|Client services|Digital and operations'],
faq:['Frequently asked questions','Straight answers about occupational health.','How quickly can an appointment be arranged?|Can services be delivered on site?|What does my employer receive?|How is clinical information protected?|Can we buy services online?|Do you provide UK-wide coverage?'],
terms:['Terms','Clear terms for using WorkWell services and digital systems.','Website use|Service ordering|Appointments|Cancellations|Employer responsibilities|Digital platform terms']};

const securitySections=[
['Security architecture','Production will use least-privilege role-based access, separate employer/employee/clinician permissions, MFA for privileged and clinical access, secure session controls and strict server-side authorisation.'],
['Clinical data separation','Clinical notes, test values and medical history must remain in the clinical record. Employer users receive only appropriate occupational-health outcomes, functional advice, restrictions, recommendations and programme information.'],
['Encryption','Production requires HTTPS/TLS in transit, encryption at rest for databases and backups, protected secrets and credentials, secure key management and no sensitive secrets committed to source control.'],
['Audit & accountability','Sensitive actions must generate tamper-resistant audit events covering sign-in, record access, changes, downloads, report issue, consent events, exports and administrative actions.'],
['Data lifecycle','Retention rules must be defined by record class and legal/clinical need. Production requires controlled deletion, legal holds where applicable, backup retention, subject-rights workflows and secure export capability.'],
['Infrastructure protection','Production hosting requires hardened operating systems, patching, firewall controls, rate limiting, monitoring, alerting, malware and vulnerability management, isolated backups and tested recovery procedures.'],
['Application security','The production platform must include secure headers, Content Security Policy, CSRF protection where applicable, input validation, output encoding, dependency scanning, secret scanning, secure file upload controls and OWASP-aligned testing.'],
['Incident response','A documented security and data-breach process is required with triage, containment, evidence preservation, recovery, lessons learned and ICO/data-subject notification assessment where required.']
];

const complianceSections=[
['UK GDPR & Data Protection Act 2018','Occupational-health information includes special-category health data. The production service must implement lawful processing, transparency, purpose limitation, minimisation, accuracy, retention controls, individual rights and appropriate technical and organisational measures.'],
['Clinical confidentiality','Access to medical information must be restricted to authorised clinical personnel and handled in accordance with professional confidentiality obligations and appropriate employee consent/information processes.'],
['PECR','Cookie and electronic communications controls must be implemented where the platform uses non-essential cookies, analytics, marketing technologies or electronic marketing.'],
['WCAG 2.2 Level AA','The target is WCAG 2.2 AA across the public website, employer portal, employee portal, commerce journey and clinician workspace. Automated testing alone is not sufficient; keyboard, screen-reader, zoom/reflow, focus, form/error and manual usability testing are required before a conformance claim.'],
['Equality Act 2010','Digital journeys and service delivery should support reasonable adjustments and avoid unnecessary barriers for disabled users.'],
['ISO readiness','The platform is being designed to support controls associated with ISO/IEC 27001 information security, ISO 9001 quality management and relevant ISO 45001 occupational health and safety practices. This demo does not claim that OHI is certified to those standards.'],
['PCI DSS','Card details should be handled by a compliant payment provider. WorkWell should not store raw card numbers or security codes.'],
['CQC / NHS requirements','CQC registration requirements, NHS DSP Toolkit obligations and other healthcare-sector requirements must be assessed against the exact regulated activities, contracts and data flows before production launch.']
];

const blueprintBuilt=[
['Public website','Next.js 15 App Router demo with responsive navigation, homepage, service catalogue, service detail routes, sectors, mobile units, employer/employee information, resources and contact journeys.'],
['Frontend stack','React, TypeScript and custom CSS. The demo uses server-rendered/static Next.js routes plus client components where interaction is required.'],
['Demo hosting','Plesk-hosted Node.js deployment using Plesk Node 24 and Phusion Passenger with a custom app.js startup file. GitHub main is the source deployment branch for the demo.'],
['Demo portal','Interactive employer, employee and clinician workspaces with fictional records, programme status, reports, appointments, test-result examples and clinician test-entry screens.'],
['Service model','Six initial service families with fuller descriptions, who the service is for, preparation, assessments/tests, process, outputs, follow-up, limitations and FAQs.'],
['B2B commerce concept','Demo service pricing and buying/enquiry routes. Prices and purchasing behaviour remain illustrative until service specifications and commercial rules are signed off.'],
['Mobile delivery content','Real OHI mobile-unit imagery and fleet information are represented in the demo, with production migration intended to use approved locally stored source assets.'],
['Accessibility foundations','Semantic page structure, skip link, visible focus treatment, responsive layouts, reduced-motion handling and labelled form controls are already present as foundations, but formal WCAG 2.2 AA verification remains outstanding.'],
['Demo versioning','The Next.js site is intentionally in a versioned demo cycle. Demo data, credentials, pricing and workflows are not production records or production authentication.']
];

const blueprintTodo=[
['Production authentication','Implement real identity, secure password handling or SSO as selected, MFA, account recovery, session/device management, brute-force protection, role assignment and privileged-access controls.'],
['Authorisation & tenancy','Implement server-side RBAC and organisation tenancy so every request is checked against user role, employer, employee relationship and clinical permissions. Prepare architecture for UK/Australia entities to share a platform while maintaining configurable legal/data separation.'],
['Production database','Design and migrate to a production-grade relational data model for organisations, people, referrals, appointments, programmes, tests, clinical records, reports, consent, documents, invoices, payments, audit events and retention metadata.'],
['Clinical record system','Build the actual clinician workflow: assessment templates, service-specific tests, observations, clinical notes, outcomes, review/sign-off, restrictions, recalls, attachments, version history and access controls.'],
['Employer portal','Build live client onboarding, employee/referral creation, programme management, appointment status, outcome/report access, recall visibility, secure downloads, billing and authorised-user management.'],
['Employee portal','Build secure identity verification, appointments, preparation information, consent, questionnaires, personal documents, notifications, permitted outcome access and individual-rights requests.'],
['Reports & documents','Generate controlled PDF/report outputs, clinical approval/signature workflow, employer-safe report templates, document versioning, download audit and secure storage.'],
['Scheduling','Build clinician calendars, mobile-unit/site scheduling, capacity, appointment booking/rescheduling, reminders, no-show/cancellation rules and service-duration logic.'],
['Health-surveillance engine','Build risk/cohort assignment, surveillance protocols, recall intervals, due/overdue states, escalation, site programmes and employer-level compliance reporting.'],
['Commerce & billing','Build product/service rules, account pricing, volume pricing, quotes, purchase orders, VAT/tax handling, checkout, payment-provider integration, invoices, credits/refunds and finance reconciliation.'],
['CRM & communications','Connect enquiries, customer onboarding, email/SMS notifications, templates, delivery logging, preferences and appropriate marketing-consent controls.'],
['Security controls','Implement production secrets management, CSP/security headers, hardened file upload/download, malware scanning, rate limiting, WAF/firewall controls, dependency/secret scanning, vulnerability management and penetration testing.'],
['Audit & monitoring','Implement immutable audit logging, application/infrastructure logs, alerting, uptime monitoring, security-event monitoring, error tracking and operational dashboards.'],
['Backups & disaster recovery','Create encrypted automated backups, off-system copies, defined RPO/RTO, restoration testing, disaster-recovery runbooks and business-continuity procedures.'],
['Privacy tooling','Complete privacy notices, lawful-basis/special-category assessments, DPIA, processor register, data-processing agreements, retention schedule, SAR/export workflows, rectification/restriction/deletion handling and breach procedures.'],
['Accessibility verification','Run automated and manual WCAG 2.2 AA audits across all journeys, including keyboard-only, screen reader, focus order/visibility, target sizing, errors, authentication, reflow at 400%, contrast and document accessibility. Remediate before claiming conformance.'],
['Quality & ISO controls','Map operational procedures and evidence to the selected ISO management systems. Certification is an organisational audit programme, not something delivered merely by the website code.'],
['Clinical governance','Finalise clinical leadership, scope, competencies, SOPs, escalation, consent, incident management, equipment calibration/maintenance, medicines/vaccine governance where relevant and report-review rules.'],
['Payments & PCI','Use hosted/tokenised payment-provider components and complete the appropriate PCI DSS validation scope without storing raw cardholder data.'],
['Testing & release','Add unit/integration/end-to-end tests, access-control tests, security tests, accessibility regression tests, staging/UAT, migration testing, load/performance testing and formal production sign-off.'],
['Production infrastructure','Provision separate production/staging environments, domain/DNS/TLS, database, object/document storage, mail/SMS services, secrets, deployment automation, monitoring and rollback.'],
['Data migration','Inventory existing OHI data, agree source/ownership, cleanse/map/import records, preserve required history, validate completeness and retain migration audit evidence.'],
['Policies & contracts','Finalise privacy/cookie policies, portal terms, employer service terms, clinical information wording, processor/subprocessor schedules, SLAs and internal security/acceptable-use/access-control policies.'],
['Launch readiness','Complete penetration testing, vulnerability closure, backup restore test, incident exercise, accessibility sign-off, DPIA, clinical governance sign-off, legal/commercial approval, administrator training and go-live checklist.']
];

export const contentPageTypes=[...Object.keys(pages),'governance','accreditations','standards-security','production-blueprint','privacy','accessibility'];
export const isContentPage=(type:string)=>contentPageTypes.includes(type);

function Cards({items}:{items:[string,string][]}){return <div className="grid2">{items.map(([title,text])=><article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>}

function SecurityPage(){return <Shell><PageHero eyebrow="Standards & security" title="Security and compliance designed into the platform." intro="This demo shows the intended control model. Production claims will only be made after the relevant controls, policies, testing and organisational evidence are in place."/><section className="section"><div className="wrap"><span className="kicker">Security controls</span><h2 className="mt14">Protecting clinical, employee and employer information.</h2><Cards items={securitySections}/><div className="mt40"><span className="kicker">Compliance baseline</span><h2 className="mt14">Standards and legal requirements considered.</h2><Cards items={complianceSections}/></div><div className="cta-panel"><div><h2>Demo status</h2><p>No ISO certification or WCAG conformance claim is being made by this demo. Production evidence, testing and organisational certification must be completed before those claims are used.</p></div><Link className="btn primary" href="/production-blueprint">View production blueprint</Link></div></div></section></Shell>}

function PrivacyPage(){return <Shell><PageHero eyebrow="Privacy" title="Health information needs stronger boundaries than ordinary website data." intro="The production WorkWell platform is intended to minimise data, separate clinical information from employer-facing outcomes and provide accountable control over access, retention and disclosure."/><section className="section"><div className="wrap"><Cards items={[
['Data minimisation','Collect only information required for the service, clinical purpose, employer instruction, legal obligation or safe delivery of occupational health.'],
['Special-category health data','Health information requires an appropriate UK GDPR Article 6 lawful basis and Article 9 condition, together with appropriate safeguards and documented governance.'],
['Employer visibility','Employers should not receive raw clinical notes or unnecessary diagnoses. Reporting should be limited to relevant occupational-health opinions, functional effects, restrictions, adjustments and agreed programme information.'],
['Employee transparency','Employees need clear information about why information is collected, who receives what, applicable consent/confidentiality arrangements, retention and their data-protection rights.'],
['Individual rights','Production must support access, rectification, restriction and other applicable rights with identity verification, case tracking and controlled export.'],
['Retention & deletion','Different record types require documented retention periods and defensible deletion/archiving rules. Backups must be included in the lifecycle model.'],
['Processors & suppliers','Hosting, communications, payments and other suppliers must be assessed, contracted appropriately and recorded as processors/subprocessors where applicable.'],
['International expansion','Any UK/Australia deployment must allow legal entities, data residency, transfer mechanisms, privacy notices and access boundaries to be configured rather than assuming one undifferentiated dataset.']
]}/><div className="cta-panel"><div><h2>Privacy documentation still required</h2><p>Production launch requires final privacy notices, DPIA, processing records, processor agreements, retention schedule and operational rights/breach procedures.</p></div><Link className="btn primary" href="/production-blueprint">See outstanding work</Link></div></div></section></Shell>}

function AccessibilityPage(){return <Shell><PageHero eyebrow="Accessibility" title="Target: WCAG 2.2 Level AA across every digital journey." intro="Accessibility applies to the marketing site, purchasing, employer and employee portals, clinician workspace, authentication, forms, reports and downloadable documents."/><section className="section"><div className="wrap"><Cards items={[
['Keyboard & focus','All functionality must work without a mouse, with logical focus order, visible focus and focused controls not obscured by sticky UI.'],
['Forms & errors','Inputs need programmatic labels, instructions, meaningful errors, error summaries where useful and accessible validation that does not rely on colour alone.'],
['Authentication','Login and MFA journeys should satisfy WCAG 2.2 accessible-authentication requirements and avoid unnecessary cognitive-function tests or inaccessible CAPTCHAs.'],
['Reflow & zoom','Content must remain usable at high zoom and narrow widths without loss of information or two-dimensional scrolling except where genuinely necessary.'],
['Contrast & non-colour cues','Text, controls, states, charts and status indicators need sufficient contrast and must not communicate meaning by colour alone.'],
['Target size','Interactive targets must meet WCAG 2.2 target-size requirements or an applicable exception. Tablet and mobile clinical workflows need particular attention.'],
['Motion & timing','Respect reduced-motion preferences and avoid unnecessary time limits. Where timing is essential, accessible extension or warning behaviour must be provided.'],
['Assistive technology','Manual testing must include screen-reader and keyboard journeys, landmark/heading structure, announcements, dynamic content and accessible names/descriptions.'],
['Documents','Generated reports, appointment information and other downloadable documents must also be accessible where the content and use case require it.'],
['Verification','Automated scanners will be used as a safety net, not proof of conformance. Formal manual WCAG 2.2 AA audit and remediation are required before the production site makes a conformance claim.']
]}/></div></section></Shell>}

function GovernancePage(){return <Shell><PageHero eyebrow="Clinical governance" title="Clinical systems need clinical ownership as well as secure code." intro="The production platform must reflect approved clinical protocols, professional scope, confidentiality and accountable review rather than allowing software to decide clinical outcomes independently."/><section className="section"><div className="wrap"><Cards items={[
['Clinical leadership','Named clinical leadership should own clinical standards, protocol approval, escalation and quality assurance.'],
['Scope & competency','Roles must only access and perform activities for which they are authorised and appropriately trained/competent.'],
['Protocols & templates','Assessment forms, test sets, thresholds and recall pathways require clinically approved version-controlled specifications.'],
['Consent & confidentiality','Clinical workflows must present the right information, capture required consent/acknowledgement and preserve appropriate confidentiality boundaries.'],
['Clinical review','Reports and outcomes requiring clinical judgement must support review, sign-off, amendments and an auditable version history.'],
['Equipment & quality','Where tests rely on clinical equipment, production governance must include calibration, maintenance, quality-control and fault/escalation records.'],
['Incidents & learning','Clinical incidents, complaints and near misses need controlled recording, investigation, actions and quality-improvement follow-up.'],
['Audit','Clinical quality, record access, report quality, recalls and protocol adherence should be measurable and auditable.']
]}/></div></section></Shell>}

function AccreditationsPage(){return <Shell><PageHero eyebrow="Accreditations & standards" title="Evidence first, badges second." intro="This page separates standards the platform is being designed around from certifications or registrations that must be independently verified before being claimed publicly."/><section className="section"><div className="wrap"><Cards items={[
['WCAG 2.2 AA','Design and engineering target. Formal manual testing and remediation are required before claiming conformance.'],
['ISO/IEC 27001','Security controls and evidence can be designed to support an information security management system. Certification requires an organisational ISMS and independent certification audit.'],
['ISO 9001','Platform workflows can support controlled processes, records, corrective actions and continual improvement. Organisational certification remains separate.'],
['ISO 45001','Relevant occupational-health and safety principles can be supported, but certification depends on the organisation-wide OH&S management system.'],
['Professional registrations','Clinician professional registrations, competencies and scope should be verified and maintained in operational governance.'],
['CQC / healthcare requirements','Applicability must be assessed against actual regulated activities. No registration/accreditation should be claimed by the demo unless independently confirmed.'],
['Information governance','ICO registration/fee status, privacy documentation, processor governance and any NHS DSP Toolkit requirement should be confirmed for the production operating model.'],
['PCI DSS','Payment architecture should minimise scope through a compliant hosted/tokenised provider and complete the required merchant validation.']
]}/></div></section></Shell>}

function BlueprintPage(){return <Shell><PageHero eyebrow="Production blueprint" title="Everything in the demo, and everything still required for production." intro="This is the working technical and operational blueprint for turning WorkWell from a presentation-grade Next.js demo into a secure occupational-health platform."/><section className="section"><div className="wrap"><div className="demo-note"><b>DEMO STATUS</b><p>The current system is intentionally a demo. Authentication, records, clinical entry, reports, commerce and portal data shown in the demo must not be treated as production controls or real patient/employee records.</p></div><span className="kicker">Already represented</span><h2 className="mt14">What has been built into the demo.</h2><Cards items={blueprintBuilt}/><div className="mt40"><span className="kicker">Production backlog</span><h2 className="mt14">What still needs to be engineered, configured or formally signed off.</h2><Cards items={blueprintTodo}/></div><div className="mt40"><span className="kicker">Target architecture</span><h2 className="mt14">Production layers.</h2><Cards items={[
['Presentation','Next.js/React public site and role-specific web applications with WCAG 2.2 AA as the accessibility target.'],
['Application/API','Server-side business services for referrals, surveillance, scheduling, clinical records, reporting, documents, commerce, notifications and administration.'],
['Identity','Central authentication, MFA, organisation tenancy, RBAC, session/device controls and audited privileged administration.'],
['Data','Relational transactional database plus controlled document/object storage, encryption, retention metadata and backup/restore capability.'],
['Integrations','Payment provider, transactional email/SMS, accounting/finance where selected, analytics configured with privacy controls and future external clinical/business integrations where approved.'],
['Operations','CI/CD, staging/production separation, logging, monitoring, alerting, vulnerability management, backups, disaster recovery, support tooling and incident response.'],
['Governance','Clinical SOPs, information governance, DPIA/privacy controls, accessibility evidence, security policies, quality management, contracts and release approval.'],
['Geography','Configurable multi-entity architecture so UK and future Australian operations can share technology while maintaining required legal, clinical, tax, data-access and residency boundaries.']
]}/></div><div className="cta-panel"><div><h2>Definition of production ready</h2><p>Production ready means the real workflows, security controls, clinical governance, data protection, accessibility testing, infrastructure, monitoring, recovery, contracts and formal sign-offs are implemented and evidenced. A successful demo build alone is not production readiness.</p></div><Link className="btn primary" href="/standards-security">Security & standards</Link></div></div></section></Shell>}

export function ContentPage({type}:{type:string}){
if(type==='standards-security')return <SecurityPage/>;
if(type==='privacy')return <PrivacyPage/>;
if(type==='accessibility')return <AccessibilityPage/>;
if(type==='governance')return <GovernancePage/>;
if(type==='accreditations')return <AccreditationsPage/>;
if(type==='production-blueprint')return <BlueprintPage/>;
const p=pages[type];if(!p)return null;return <Shell><PageHero eyebrow={p[0]} title={p[1]} intro="WorkWell by OHI combines practical occupational-health delivery with a clearer digital experience."/><section className="section"><div className="wrap grid3">{p[2].split('|').map((x:string,i:number)=><div className="card" key={x}><span className="badge">{String(i+1).padStart(2,'0')}</span><h3>{x}</h3><p>Built into the WorkWell service model with clear ownership, appropriate governance and a straightforward user journey.</p></div>)}</div><div className="wrap cta-panel"><div><h2>Need something specific?</h2><p>Tell us what you are trying to achieve and we will route you to the right service.</p></div><Link className="btn primary" href="/what-do-i-need">Tell us what you need</Link></div></section></Shell>}
