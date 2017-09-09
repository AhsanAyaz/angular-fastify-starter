import seedData from './seed.data';
import appConfig from '../config/config';
import assert from 'assert';


/**
 * @author Ahsan Ayaz
 * The function adds the seed data from seed.data.js into the database
 * On every restart/start of the server, the previous data will we be WIPED out and
 * seed data will be inserted.
 * To avoid this behavior, set seedData property to false in appConfig
 */
const insertSeedData = (app) => {
    const { db } = app.mongo;
    const usersCollection = db.collection('users');
    usersCollection.remove({}, (err) => {
        assert.equal(null, err);
        usersCollection.insertMany(seedData, (err, result) => {
            assert.equal(null, err);
            console.log('seed data entered');
        });
    })
}


export default insertSeedData;