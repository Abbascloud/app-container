import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import { ProgressPlugin } from "webpack"
import { Configuration } from "webpack"
import { IBuildOptions } from "../types"
import path from "path"

export const makePluginsConfig = ({ mode, paths }: IBuildOptions): Configuration['plugins'] => {
    const isDev = mode === "development";
    const isProd = mode === 'production';

    const plugins: Configuration['plugins'] = [new HtmlWebpackPlugin({
        template: paths.html,
        title: "Container",
        favicon: path.resolve(paths.public, 'favicon.ico')
    }),

    ]
    if (isDev) {
        plugins.push(new ProgressPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[contenthash].css",
            chunkFilename: "css/[contenthash].css",
        }))
    }

    return plugins
}