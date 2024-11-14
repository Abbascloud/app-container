
import { type Configuration } from "webpack";
import { makeBuildConfig } from "./webpackConfig/makeBuidConfig";
import path from "path";
import { IBuildPaths } from "./webpackConfig/types";

export interface IWebpackConfigOptions {
  mode?: "development" | "production";
  port?: number;
}

export default (env: IWebpackConfigOptions) => {

  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public')
  }

  const config: Configuration = makeBuildConfig({ port: env.port ?? 3000, mode: env.mode ?? 'development', paths })

  return config;
};
