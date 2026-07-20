# nodejs-project-example

Basic Node.js library using JavaScript, ESM, JSDoc, and TypeScript declarations.

Requires Node.js 18 or newer.

## Modules

The package supports both module formats:

- ESM: `import`
- CommonJS: `require`

Rollup builds separate ESM and CommonJS files, so CommonJS does not depend on
Node.js `require(esm)` interoperability.

Rollup builds ESM and CommonJS files in `dist/`. TypeScript checks the JSDoc
types and generates `.d.ts` files in `dist/types/`, so the package publishes
only the `dist/` folder.

The package has no import-time side effects, enabling safe tree-shaking.

## Development

Install dependencies with:

```sh
npm install
```

Scripts:

- `npm test` runs the test suite.
- `npm run test:watch` runs tests in watch mode.
- `npm run test:cover` generates coverage.
- `npm run build` builds the package and declarations.
- `npm run lint` checks lint and formatting.
- `npm run lint:fix` fixes lint and formatting issues.
- `npm run types` checks JSDoc types.
- `npm run types:generate` generates declarations.
- `npm run check` runs tests, lint, and type checking.
- `npm run prepack` checks and builds before packaging.
