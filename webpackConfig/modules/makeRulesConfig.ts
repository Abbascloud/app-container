import { ModuleOptions, RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { IBuildOptions } from "../types";



export const makeRulesConfig = ({ mode }: IBuildOptions): ModuleOptions['rules'] => {
    const isDev = mode === "development";

    const cssLoader: RuleSetRule = {
        loader: "css-loader",
        options: {
            modules: {
                namedExport: false,
                exportLocalsConvention: 'as-is',
                localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : '',
            },
        },
    }

    const loaders: Record<string, RuleSetRule> = {
        tsLoader: {
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        getCustomTransformers: () => ({
                            before: isDev ? [ReactRefreshTypeScript()] : [],
                        }),
                        transpileOnly: isDev
                    }
                }
            ]
        },
        cssLoader: {
            test: /\.css$/i,
            use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                cssLoader
            ],
        },
        scssLoader: {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                cssLoader,
                "sass-loader",
            ],
        },
    }
    return Object.values(loaders)
}

