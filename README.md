# BASE-NESTJS

> Main project with an app and libraries that support the develop with hexagonal architecture.

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)]()

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

[Nx](https://github.com/nrwl/nx) smart, Fast and Extensible Build System with monorepo, guides, extendable tools.

## Hexagonal Architecture

![Component diagram](docs/images/domain-driven-hexagon.jpeg)
_Ref: [DDD Hexagon](https://find-error.com/questions/66785439/ddd-hexagon-should-the-domain-layer-ever-talk-to-the-infrastructure-dal-laye)_

### How to create a module?

For an example we need to create the a `users` module:

```bash

npx nx generate @nrwl/nest:library infrastructure --directory=user/adapter --buildable --strict --testEnvironment=jsdom --no-interactive

npx nx generate @nrwl/nest:library interface --directory=user/adapter --buildable --strict --testEnvironment=jsdom --no-interactive

npx nx generate @nrwl/nest:library application --directory=user --buildable --strict --testEnvironment=jsdom --no-interactive

npx nx generate @nrwl/nest:library domain --directory=user --buildable --strict --testEnvironment=jsdom --no-interactive

npx nx generate @nrwl/nest:library entities --directory=user --buildable --strict --testEnvironment=jsdom --no-interactive

```

npx nx generate @nrwl/nest:controller user --project=user-adapter-interface --module=UserAdapterInterfaceModule --directory=lib --language=ts --no-interactive

npx nx generate @nrwl/nest:service user --project=user-application --directory=lib --language=ts --no-interactive

### Other general configurations:

- Google Typescript Style - GTS: Prettier and Eslint with some rules in 0 for nest. More information: .eslintrc.json
- Husky (Lite version): Only in Pre-commit, for the future is necessary to include in all stages. in **TODO**