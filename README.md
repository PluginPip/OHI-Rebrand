# WorkWell by OHI — Next.js demo

Current release: **v1.3.1-demo**

This repository is the versioned Next.js demonstration build for the OHI WorkWell rebrand and platform concept. It is intentionally a demo environment while public-site, commerce, employer, employee and clinician workflows are refined.

## Release v1.3.1-demo

- Fixed low-contrast `Change demo login` control in the portal sidebar.
- Added dedicated portal accessibility styles for navigation, active states, hover states and focus states.
- Strengthened keyboard focus treatment across portal links, controls and clinical inputs.
- Improved portal responsive behaviour for tablet and mobile widths.
- Improved contrast of sidebar text and navigation states.
- Kept demo-data and non-production labelling prominent.
- Updated page metadata so the environment is clearly described as a demo.
- Retained WCAG 2.2 AA as the production accessibility target; formal conformance is not claimed until audit and remediation are complete.

## Demo technology

- Next.js 15 App Router
- React
- TypeScript
- Custom CSS
- Node.js 24 on the current Plesk demo deployment
- Phusion Passenger via `app.js`
- GitHub `main` as the demo deployment branch

## Plesk deployment

Current application path:

```text
/var/www/vhosts/demo.pluginpip.uk/Ohi.demo.pluginpip.uk
```

Typical update sequence:

```bash
cd /var/www/vhosts/demo.pluginpip.uk/Ohi.demo.pluginpip.uk
export PATH=/opt/plesk/node/24/bin:$PATH

git fetch origin main
git reset --hard origin/main
npm install
npm run build
```

Only after a successful build:

```bash
mkdir -p tmp
touch tmp/restart.txt
```

## Release policy

The site remains a **demo** until real authentication, production data storage, clinical governance, security controls, privacy controls, accessibility verification, testing and operational sign-off are complete. Demo records, credentials, prices, outcomes and reports are illustrative only.
