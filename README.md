# OHI WorkWell Next.js conversion

Next.js conversion of the signed-off OHI WorkWell End Demo Release.

## Plesk deployment

- Application root: repository root
- Document root: leave as managed by the Node.js application
- Node.js version: 20 LTS or newer
- Package manager: npm
- Install: `npm install`
- Build: `npm run build`
- Start: `npm run start`
- Default port is provided by Plesk through the `PORT` environment variable.

## Local development

```bash
npm install
npm run dev
```

The current commit contains the recovered signed-off homepage conversion. Remaining demo routes can be converted from the complete source release without changing the approved visual direction.
