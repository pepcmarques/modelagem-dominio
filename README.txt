npm init -y

npm i -D typescript ts-node-dev tsconfig-paths jest ts-jest

npm i -D @types/jest @types/node

npm i uuid

npm i -D @types/uuid

npm i -D @faker-js/faker
npm i -D @js-brasil/fakerbr

package.json
```
  "scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register --respawn --transpile-only --ignore-watch node-modules src/index.ts",
    "test": "jest",
    "build": "tsc"
  },
```

jest.config.js
```
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  moduleNameMapper: {
      '^@/test/(.*)': '<rootDir>/test/$1',
      '^@/(.*)': '<rootDir>/src/$1',
  }
```

npx tsc --init

tsconfig.json
```
{
  "compilerOptions": {
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    "outDir": "./dist",                                   /* Redirect output structure to the directory. */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "skipLibCheck": true,                                 /* Skip type checking all .d.ts files. */
    "baseUrl": ".",                                       /* Specify the base directory to resolve non-relative module names. */
    "paths": {
      "@/test/*": ["test/*"],
      "@/*": ["src/*"]
    }
  }
}
```
