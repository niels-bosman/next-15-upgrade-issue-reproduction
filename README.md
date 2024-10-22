# next-15-upgrade-issue-reproduction

## Requirements:

- Bun installed (I am on 1.1.32 which is the latest)
- Node installed (I am on 20.11.0)

## Steps to reproduce:

1. Run `bun install` in the root of this project
2. Run `bun run build` in the `./my-app` folder (this builds the package and the next app)

## Expected behavior:

The app should build, because the dev command also works.

## Actual behavior:

The app errors with the following message:

```
TypeError: Cannot read properties of null (reading 'useContext')
    at exports.useContext (/Users/niels/Code/SlideSpeak/next-15-issue-repro/node_modules/react/cjs/react.production.js:489:33)
    at StyleRegistry (/Users/niels/Code/SlideSpeak/next-15-issue-repro/node_modules/styled-jsx/dist/index/index.js:450:30)
    at Wc (/Users/niels/Code/SlideSpeak/next-15-issue-repro/node_modules/next/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:68:44)
    at Zc (/Users/niels/Code/SlideSpeak/next-15-issue-repro/node_modules/next/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:70:253)
    at Z (/Users/niels/Code/SlideSpeak/next-15-issue-repro/node_modules/next/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:76:89)
    at Zc (/Users/niels/Code/SlideSpeak/next-15-issue-repro/node_modules/next/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:74:209)
    at Z (/Users/niels/Code/SlideSpeak/next-15-issue-repro/node_modules/next/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:76:89)
    at Zc (/Users/niels/Code/SlideSpeak/next-15-issue-repro/node_modules/next/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:74:209)
    at Z (/Users/niels/Code/SlideSpeak/next-15-issue-repro/node_modules/next/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:76:89)
    at Zc (/Users/niels/Code/SlideSpeak/next-15-issue-repro/node_modules/next/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:74:209)
Failed to build /_error: /404 after 1 attempts.

> Build error occurred
Error: Export encountered an error on /_error: /404, exiting the build.
    at exportPageWithRetry (/Users/niels/Code/SlideSpeak/next-15-issue-repro/node_modules/next/dist/export/worker.js:289:31)
    at async Promise.all (index 0)
    at async /Users/niels/Code/SlideSpeak/next-15-issue-repro/node_modules/next/dist/export/worker.js:319:35
    at async Object.exportPages (/Users/niels/Code/SlideSpeak/next-15-issue-repro/node_modules/next/dist/export/worker.js:314:5) {
  type: 'ExportPageError',
  code: 'NEXT_EXPORT_PAGE_ERROR'
}
   Generating static pages (0/5)  [    ]error: script "build:app" exited with code 1

```