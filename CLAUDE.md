# Bkper API Types

## Auto-Generated Types

**DO NOT manually edit `index.d.ts`** - this file is auto-generated.

The types are generated from the Bkper [Open API spec](https://app.bkper.com/openapi.json) using the [dtsgenerator](https://github.com/horiuchi/dtsgenerator) tool.

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
