const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
	mode: isDevelopment ? "development" : "production",
	entry: path.resolve(__dirname, "src", "index.tsx"),
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.(js|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "public"),
		historyApiFallback: true,
		hot: true,
		port: 3000,
		stats: "minimal" //'none' | 'errors-only' | 'minimal' | 'normal' | 'verbose'
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html")
		}),
		isDevelopment && new ReactRefreshWebpackPlugin()
	].filter(Boolean)
};
