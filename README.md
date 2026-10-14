# Mokro

Mock API server with a dashboard, set up as a pnpm workspace monorepo.

| Package | Description |
| --- | --- |
| `apps/web` | Dashboard (React, Vite, Ant Design) |
| `apps/server` | API server (Express) |
| `packages/shared` | Shared types and Zod schemas |

## Requirements

- Node.js 22+
- pnpm (`corepack enable`)

## Setup

```sh
pnpm install
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Builds `shared`, then runs the dashboard, the server, and `shared` in watch mode |
| `pnpm build` | Builds all packages |
| `pnpm typecheck` | Type-checks all packages |

- Dashboard: http://localhost:5173
- Server: http://localhost:3001 (`GET /health`)

The server port comes from the `PORT` environment variable (default `3001`). The Vite dev server reads the same variable to proxy `/health` to the server.

Run the built server with `pnpm --filter @mokro/server start`.
