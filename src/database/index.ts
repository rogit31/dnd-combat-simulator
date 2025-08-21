/** Represents the abstraction to be layered on top of any database implementation.
I.e, for now we're using sqlite with wasm, but we would want to change that for a web version
to use a live MySQL server instead for example. **/
export interface Database {
    query<T = never>(sql: string, params?: never[]): Promise<T[]>;
    exec(sql: string, params?: never[]): Promise<void>;
    initialize(): Promise<void>;
}

export const isElectron = () =>
    typeof window !== "undefined" && (window).process?.type === "browser";
