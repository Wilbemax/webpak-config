import { BuildOptions } from '../types/types';
import removeDataTestIdBablePlugin from './removeDataTestIdBablePlugin';

export function buildBabelLoader({ mode }: BuildOptions) {
	const isProd = mode === 'production';

	const plugins = [];

	if (isProd) {
		plugins.push([
			removeDataTestIdBablePlugin,
			{
				props: ['data-testid'],
			},
		]);
	}

	return {
		test: /\.tsx?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					'@babel/preset-env',
					'@babel/preset-typescript',
					[
						'@babel/preset-react',
						{
							runtime: 'automatic',
						},
					],
				],
				plugins: plugins.length ? plugins : undefined,
			},
		},
	};
}
