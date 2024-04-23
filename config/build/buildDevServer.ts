import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';
export function buildDevServer(option: BuildOptions): DevServerConfiguration {
    return {
        port: option.port ?? 3000,
        open: true,
        historyApiFallback: true,
        hot: true
  }
}