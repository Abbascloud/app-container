export type TBuildMode = "development" | "production"

export interface IBuildPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
    public: string
}

export interface IBuildOptions {
    port: number,
    paths: IBuildPaths,
    mode?: TBuildMode;
}