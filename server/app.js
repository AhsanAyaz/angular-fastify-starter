import fastify from 'fastify';
import registerDB from './db/db';
import api from './api/api';
import insertSeedData from './seed/seed';
import pino from 'pino';
import tee from 'pino-tee';
import fs from 'fs';
import appConfig from './config/config';

//  Set up stream for logging
const stream = tee(process.stdin);
stream.tee(fs.createWriteStream('server/logs/info'), line => line.level >= 20)
stream.pipe(process.stdout);

// Register logger for fastify app
const app = fastify({
    logger: pino(stream)
});


// register database (mongo setup for this example)
registerDB(app)
    .then(() => {
        //  when registered, initiate the api
        api(app);

        if(appConfig.seedData){ //  insert seed data if configured in the appConfig
            insertSeedData(app);   
        }
    })
    .catch(err=>{
        console.log(err);
    });


// Run the server!
app.listen(appConfig.serverPort || 4500, function (err) {
  if (err) throw err
  console.log(`server listening on ${app.server.address().port}`)
})


exports = module.exports = app;