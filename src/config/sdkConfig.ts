interface IConfig {
    serverPath: string;
}

let sdkConfig: IConfig = {
    serverPath: null
}

export const defineConfig = (config: IConfig) => sdkConfig = config;

export const getConfig = (): IConfig => sdkConfig;
