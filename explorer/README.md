## Installation

### Install yarn package manager
Follow the installation instructions at [classic.yarnpkg.com](https://classic.yarnpkg.com/en/)

### Add Vue and Quasar packages
```bash
yarn global add @vue/cli
yarn global add @quasar/cli
```

### Note regarding Node version from [quasar docs](https://quasar.dev/quasar-cli/installation)

Do not use uneven versions of Node i.e. 13, 15, etc. These versions are not tested with Quasar and often cause issues due to their experimental nature. We highly recommend always using the LTS version of Node.

It is recommended to use Node version 16 if you experience issues running the application with other versions.

Using nvm: `nvm use 16`

### Clone repo
```bash
git clone https://github.com/telosnetwork/teloscan
```

### Install the dependencies
```bash
yarn
```

### Restore .env file
```bash
cp .env.example .env
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
yarn dev
```

### Lint the files
```bash
yarn lint
```

### Build the app for production
```bash
yarn build
cd dist/spa
quasar serve
```
