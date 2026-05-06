# Bkper API Types

## Auto-Generated Types

**DO NOT manually edit `index.d.ts`** - this file is auto-generated.

The types are generated from the Bkper [Open API spec](https://bkper.com/docs/api/rest/openapi.json) using the [dtsgenerator](https://github.com/horiuchi/dtsgenerator) tool.

## Regenerating Types

Types should be regenerated after `bkper-api` deployment:

```bash
bun run build
```

This fetches the latest OpenAPI spec from the production API and regenerates `index.d.ts`.

## Workflow

1. Make changes to the API in `bkper-api`
2. Deploy `bkper-api` to production
3. Run `bun run build` in this project to regenerate types
4. Publish the updated types package

## Agent Workflow Guardrails

These rules are mandatory for coding agents working on this repository.

### Release workflow

Releases are published by GitHub Actions (Trusted Publisher with OIDC), not from local machines.

- Work directly on `master`. This is a simple project with no PR flow.
- Run `bun run build` to regenerate types when needed.
- When ready to release from a clean, up-to-date `master`, run one of:
  - `bun run release:patch`
  - `bun run release:minor`
  - `bun run release:major`
- Push the resulting commit and tag with `git push origin master --follow-tags`
- CI publishes only from version tags matching `v*.*.*`

### Publishing policy

- Never publish manually from local environment unless explicitly instructed.
- Publishing is performed by CI on version tag pushes, with Trusted Publisher (OIDC).
- If publish fails, fix root cause and re-run through the tag-based release flow; do not bypass with ad-hoc changes.
