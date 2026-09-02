# WorkWell v1.4.0-rc1

Release-candidate demonstration build for OHI rebrand review. This is not a production clinical system and is not approved for public launch.

## RC1 highlights

- Next.js 16.3.4, React 19.2 and Node 24 deployment target.
- Public occupational-health website, detailed service pages and employer journeys.
- Employer, employee and clinician demo portal workspaces using fictional data only.
- TOTP MFA enrolment with QR-code scanning and six-digit authenticator verification.
- Clinician demo login now requires a second-factor challenge before portal entry.
- Portal Account Security view with MFA state and role policy.
- Employer and employee demo MFA can be disabled; clinician MFA is mandatory.
- Ten selectable WCAG 2.2 AA-oriented colour palettes with browser persistence.
- Visual-only LinkedIn, Facebook, Instagram and X footer placements.
- Commerce demo routes for checkout/orders plus Stripe and Xero webhook architecture.
- Next.js 16 TypeScript configuration committed so builds no longer rewrite tsconfig.
- Demo commerce filesystem access narrowed for Turbopack tracing.
- Production blueprint refreshed for Next.js 16, MFA status and final-brand launch gate.

## RC1 verification before sign-off

Run `npm install`, `npm audit` and `npm run build` on the demo server. Require zero known npm vulnerabilities and a successful production build before restarting Passenger.

Smoke-test homepage, service catalogue, all service detail routes, employer page, commerce/shop/checkout, login, MFA enrolment, repeat MFA challenge, employer/employee/clinician portal views, Account Security, theme selector, footer/social placement, contact, privacy, accessibility, standards/security and production blueprint.

Check keyboard-only navigation, visible focus, reflow at narrow tablet/mobile widths, text/button contrast across all ten colour palettes, form labels/errors and touch target sizes. RC1 is AA-oriented but no WCAG conformance claim is made until formal automated and manual verification is complete.

## Production blockers

Production still requires real identity, server-side MFA secrets and recovery, RBAC and tenancy, database-backed clinical records, live scheduling, report/document generation, production Stripe/Xero, notifications, audit logging, retention, encryption/key management, backups and disaster recovery, penetration testing, DPIA/privacy operations, clinical governance, accessibility sign-off, data migration and final organisational approval.

The final brand name, logo, domains, production legal wording, metadata, documents/emails and public-facing content must also be approved before launch. WorkWell remains the working/demo identity.
