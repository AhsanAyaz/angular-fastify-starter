

import appConfig from '../config/config';
import fastifyMongodb from 'fastify-mongodb';

const mongodbUrl = appConfig.mongoUrl;


/**
 * @author Ahsan Ayaz
 * The function registers mongodb plugin with our fastify app
 * This allows to share the same mongodb throughout the whole app
 * @param {fastify app} app 
 * @return Promise
 */
const registerDB = (app) => {
    return new Promise((resolve, reject) => {
        app.register(fastifyMongodb, {
            url: mongodbUrl
        }, err => {
            if (err) {
                throw err;
            }else{
                console.log('Connected to mongo successfully');
                resolve();
            }
        })
    })
}


export default registerDB;