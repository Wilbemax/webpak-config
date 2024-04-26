# Webpack Configuration

## Overview

Our project leverages Webpack for bundling and optimizing the application. The configuration is meticulously modularized into several parts, enhancing maintainability and readability. The core configuration file is `webpack.config.js`, which exports a function that accepts environment variables as input and returns the final Webpack configuration.


### Output Configuration

The output configuration dictates where Webpack should output the bundled files. The output directory is set to `build/`, ensuring a clean and organized project structure.


### Entry Points

The entry points are defined within the `paths` object, which includes the path to the main TypeScript file (`index.tsx`) that serves as the starting point for the application.


### Entry Points

The entry points are defined in the `paths` object, which includes the path to the main TypeScript file (`index.tsx`) that bootstraps the application.


### Output

The output configuration specifies where Webpack should output the bundled files. The output directory is set to `build/`.


### Loaders

Loaders are used to preprocess files. This project uses a modular approach to define loaders, including loaders for TypeScript, CSS, and SVG files. The `buildLoaders` function constructs the array of loaders based on the build options.


### Plugins

Plugins are used for a wide range of tasks, including optimization, asset management, and environment variable injection. This project uses a modular approach to define plugins, with separate functions for each type of plugin. The `buildPlugins` function constructs the array of plugins based on the build options.


### Development Server

For development, the project uses `webpack-dev-server` with hot module replacement (HMR) enabled. The `buildDevServer` function configures the development server based on the build options.


### Resolvers

The `builResolver` function configures the resolver to automatically resolve certain extensions and set up aliases for easier import paths.


This modular approach to Webpack configuration allows for easy customization and extension of the build process. For more detailed information, refer to the [Webpack documentation](https://webpack.js.org/concepts/).


### Environment Variables

The configuration function takes an `EnvProps` object as input, which includes the build mode, port number, and an optional flag for the bundle analyzer. These variables are used to customize the build process.



## Example Usage in Microfrontends

Microfrontends allow for the development and deployment of independent parts of an application. This is achieved through the use of Module Federation, which enables the loading and use of code from other applications at runtime.

### Example with Module Federation

Considering the integration with [monorepo-module-federation](https://github.com/Wilbemax/monorepo-module-federation), where Webpack is configured for Module Federation.



## Dependencies

### Main Dependencies (`dependencies`)

| Package | Version |
|---------|---------|
| `@packages/shared` | `*` |
| `@packages/build-config` | `*` |
| `react` | `^18.2.0` |
| `react-dom` | `^18.2.0` |
| `react-router-dom` | `^6.16.0` |

### Development Dependencies (`devDependencies`)

| Package | Version |
|---------|---------|
| `@babel/core` | `^7.24.4` |
| `@babel/plugin-proposal-class-properties` | `^7.18.6` |
| `@babel/preset-env` | `^7.24.4` |
| `@babel/preset-react` | `^7.24.1` |
| `@babel/preset-typescript` | `^7.23.2` |
| `@pmmmwh/react-refresh-webpack-plugin` | `^0.5.11` |
| `@svgr/webpack` | `^8.1.0` |
| `@types/babel__core` | `^7.20.3` |
| `@types/node` | `^20.12.7` |
| `@types/react` | `^18.2.25` |
| `@types/react-dom` | `^18.2.11` |
| `@types/webpack` | `^5.28.3` |
| `@types/webpack-bundle-analyzer` | `^4.7.0` |
| `@types/webpack-dev-server` | `^4.7.2` |
| `babel-loader` | `^9.1.3` |
| `copy-webpack-plugin` | `^11.0.0` |
| `css-loader` | `^6.8.1` |
| `fork-ts-checker-webpack-plugin` | `^9.0.0` |
| `html-webpack-plugin` | `^5.5.3` |
| `mini-css-extract-plugin` | `^2.7.6` |
| `react-refresh-typescript` | `^2.0.9` |
| `sass` | `^1.69.0` |
| `sass-loader` | `^13.3.2` |
| `style-loader` | `^3.3.3` |
| `ts-loader` | `^9.5.0` |
| `ts-node` | `^10.9.1` |
| `typescript` | `^5.2.2` |
| `webpack` | `^5.91.0` |
| `webpack-bundle-analyzer` | `^4.9.1` |
| `webpack-cli` | `^5.1.4` |
| `webpack-dev-server` | `^4.15.1` |
