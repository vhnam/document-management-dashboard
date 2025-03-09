# Document Management Dashboard

Dashboard to help manage folders and file formats

## Development

### Initial code

```sh
npm install
cd packages/tokens-config && npm run build
cd packages/tailwind-config && npm run build
```

### Run project

Start Storybook

```shell
cd packages/ui && npm run storybook
```

Start Dashboard

```shell
cd apps/web && npm run dev
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/tailwind-config`: `tailwindcss` configurations
- `@repo/tokens-config`: generate design tokens and using for `tailwind-config`
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for code linting and formatting

## Reference

- Ui8.net, [Storage Management Dashboard](https://ui8.net/phuong-designer/products/storage-management-dashboard)
- Digital.co.jp, [Design System Example Components](https://github.com/digital-go-jp/design-system-example-components)
- Digital.co.jp, [Design Tokens](https://github.com/digital-go-jp/design-tokens)
- Digital.co.jp, [Tailwind Theme Plugin](https://github.com/digital-go-jp/tailwind-theme-plugin)
