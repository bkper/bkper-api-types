# Summary

This package contains Typescript definitions for the [Bkper REST API](https://api.bkper.com).

The types are generated based on the Bkper [Open API spec](https://app.bkper.com/openapi.json) using the [dtsgenerator](https://github.com/horiuchi/dtsgenerator) tool.

More information at the [Bkper Developer Documentation](http://bkper.com/docs/#rest-api)

# Instalation

### 1) Add the package:

```
npm i -S @bkper/bkper-api-types
```
or
```
yarn add --dev @bkper/bkper-api-types
```

### 2) Configure tsconfig.json:

```
{
    "compilerOptions": {
        "typeRoots" : ["node_modules/@bkper", "node_modules/@types" ]
    }
}
```

[Learn more](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types) about **@types**, **typeRoots** and **types**

