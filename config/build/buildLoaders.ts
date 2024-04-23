import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';
import ReactRefreshTypeScript from 'react-refresh-typescript'
export function buildLoaders(option: BuildOptions): ModuleOptions['rules'] {
	const isDev = option.mode === 'development';

	const assetLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	};

	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: [{
			loader: '@svgr/webpack',
			options: {
				icon: true,
				svgoConfig: {
					plugins: [
						{
							name: 'conventorColors',
							params: {
								currentColor: true,
							}
						}
					]
				} 
			}
		 }
		],
	};

	const cssLoaderWithModules = {
		loader: 'css-loader',
		options: {
			modules: {
				localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
			},
		},
	};

	const scssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			cssLoaderWithModules,
			// Compiles Sass to CSS
			'sass-loader',
		],
	};
	// const tsLoader = {
	// 	test: /\.tsx?$/,
	// 	use: 'ts-loader',
	// 	exclude: /node_modules/,
	// };
	
	const tsLoader = {
		test: /\.tsx?$/,
		use: [
			{
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
					getCustomTransformers: () => ({
						before:[isDev && ReactRefreshTypeScript()].filter(Boolean)
					})
				}
			}
		],
		exclude: /node_modules/,
	};

	return [svgLoader, assetLoader, scssLoader, tsLoader];
}
