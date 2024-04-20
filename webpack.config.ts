import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildWeback } from './config/build/buildWebpack';
import { BuildMode, BuildPath } from './config/build/types/types';

interface EnvProps {
	mode: BuildMode;
	port: number;
}

export default (env: EnvProps) => {
	const paths: BuildPath ={
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html')
	}
	
	const config: webpack.Configuration = buildWeback({
		port: env.port ?? 3000,
		mode: env.mode ?? 'development',
		path: paths
	})
	return config;
};
