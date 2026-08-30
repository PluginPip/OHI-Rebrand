# OHI Rebrand / WorkWell

Production website and connected occupational-health platform programme.

## Current build

The `live-site-v1` branch contains the first production-oriented public website foundation using the temporary WorkWell brand.

### Included

- Premium responsive public homepage
- Occupational-health service architecture
- Mobile health surveillance positioning
- Employer portal entry point
- Employer dashboard concept embedded into the public journey
- UK-wide mobile service messaging
- Current OHI contact details
- Existing OHI mobile-unit imagery used without alteration
- Responsive layout for desktop, tablet and mobile
- Foundations for future commerce, employer and clinician applications

## Architecture principle

The public site, employer workspace and clinical workspace should remain separate application surfaces connected through controlled APIs and shared identity where appropriate. Clinical records must not be exposed through the public website application.

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```

## Status

This is the start of the live-site implementation, not a static presentation mock-up.
