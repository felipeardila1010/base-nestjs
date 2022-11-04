# BASE-NESTJS

Main project with an app and libraries that support the develop with hexagonal architecture.

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