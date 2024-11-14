import { type Configuration } from "webpack";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import { makeDevServerConfig, makeRulesConfig, makePluginsConfig, makeResolversConfig } from "./modules";
import { IBuildOptions } from "./types";


export function makeBuildConfig(options: IBuildOptions): Configuration {
    const { mode, paths } = options
    const isDev = mode === "development";

    return {
        mode: mode ?? "development",
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: "[contenthash].[name].js",
            clean: true,
        },
        devtool: isDev ? "inline-source-map" : false,
        module: {
            rules: makeRulesConfig(options),
        },
        resolve: makeResolversConfig(options),
        plugins: makePluginsConfig(options),
        devServer: makeDevServerConfig(options)
    }
}