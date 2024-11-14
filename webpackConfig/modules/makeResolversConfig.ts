import { Configuration } from "webpack"
import { IBuildOptions } from "../types"

export const makeResolversConfig = ({ paths }: IBuildOptions): Configuration['resolve'] => ({
    extensions: [".tsx", ".ts", ".js"],
    alias: { '@': paths.src }
})