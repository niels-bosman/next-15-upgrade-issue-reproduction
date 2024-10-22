# next-15-upgrade-issue-reproduction

## Requirements:

- Bun installed (I am on 1.1.32 which is the latest)
- Node installed (I am on 20.11.0)

## Steps to reproduce:

1. Run `bun install` in the root of this project
2. Run `bun run build` in the `./package` folder
3. Run `bun run dev` in the `./my-app` folder
4. Open `http://localhost:3000` in your browser

## Expected behavior:

The app should build and run without errors.

## Actual behavior:

The app errors with the following message:

```
TypeError: Cannot read properties of undefined (reading 'ReactCurrentDispatcher')
    at http://localhost:3000/_next/static/chunks/%5Bproject%5D__2b8898._.js:209:19
    at cr (http://localhost:3000/_next/static/chunks/%5Bproject%5D__2b8898._.js:610:6)
    at [project]/package/dist/package.js [app-client] (ecmascript) (http://localhost:3000/_next/static/chunks/%5Bproject%5D__2b8898._.js:612:90)
    at http://localhost:3000/_next/static/chunks/%5Bproject%5D_my-app_9044f1._.js:693:27
    at runModuleExecutionHooks (http://localhost:3000/_next/static/chunks/%5Bproject%5D_my-app_9044f1._.js:738:9)
    at instantiateModule (http://localhost:3000/_next/static/chunks/%5Bproject%5D_my-app_9044f1._.js:691:9)
    at getOrInstantiateModuleFromParent (http://localhost:3000/_next/static/chunks/%5Bproject%5D_my-app_9044f1._.js:624:12)
    at esmImport (http://localhost:3000/_next/static/chunks/%5Bproject%5D_my-app_9044f1._.js:142:20)
    at [project]/my-app/src/app/page.tsx [app-client] (ecmascript) (http://localhost:3000/_next/static/chunks/%5Bproject%5D__2b8898._.js:631:133)
    at http://localhost:3000/_next/static/chunks/%5Bproject%5D_my-app_9044f1._.js:693:27
    at runModuleExecutionHooks (http://localhost:3000/_next/static/chunks/%5Bproject%5D_my-app_9044f1._.js:738:9)
    at instantiateModule (http://localhost:3000/_next/static/chunks/%5Bproject%5D_my-app_9044f1._.js:691:9)
    at getOrInstantiateModuleFromParent (http://localhost:3000/_next/static/chunks/%5Bproject%5D_my-app_9044f1._.js:624:12)
    at commonJsRequire (http://localhost:3000/_next/static/chunks/%5Bproject%5D_my-app_9044f1._.js:157:20)
    at requireModule (http://localhost:3000/_next/static/chunks/08b5e_next_dist_compiled_107ce8._.js:2675:29)
    at initializeModuleChunk (http://localhost:3000/_next/static/chunks/08b5e_next_dist_compiled_107ce8._.js:3217:25)
    at resolveModuleChunk (http://localhost:3000/_next/static/chunks/08b5e_next_dist_compiled_107ce8._.js:3186:43)
    at http://localhost:3000/_next/static/chunks/08b5e_next_dist_compiled_107ce8._.js:3526:24
```