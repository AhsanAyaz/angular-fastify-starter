const configurations = {
    development: {
        mongoUrl: 'mongodb://localhost:27017/fastify-app',
        seedData: false,
        serverPort: 4500
    },
    staging: {
        mongoUrl: 'mongodb://localhost:27017/fastify-app',
        seedData: false,
        serverPort: 4500
    },
    production: {
        mongoUrl: 'mongodb://localhost:27017/fastify-app',
        seedData: false,
        serverPort: 4500
    }
}

export const APP_ENVIRONMENTS = {
    DEV: 'development',
    PROD: 'prodoction',
    STAGING: 'staging'
}

const environment = APP_ENVIRONMENTS.DEV;


export default configurations[environment];