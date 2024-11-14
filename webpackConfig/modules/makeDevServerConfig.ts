import { type Configuration } from "webpack-dev-server";
import { IBuildOptions } from "../types";

export const makeDevServerConfig = ({
    port = 3000,
    mode,
}: IBuildOptions): Configuration => {
    if (mode === 'development') return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true
    };

    return;
};
