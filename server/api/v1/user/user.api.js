import USER_SCHEMAS from './user.api.schemas';
import assert from 'assert';
let db, userCollection, ObjectId;
const routeOpts = {
    schema: {
        
    }
}

// USER API HANDLERS

const getUsers = (request, reply) => {
    userCollection.find().toArray((err, users) => {
        if(err) reply.send({ error: err });
        else{
            reply.send({ users })
        }
    })
}

const addUser = (request, reply) => {
    const user = request.body;
    userCollection.insert(user, (err, result) => {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        reply.send({ user: result.ops[0] })
    })
}

const deleteUser = (request, reply) => {
    request.log.error(request.params);
    userCollection.remove({
        _id: new ObjectId(request.params.userId)
    }, (err, result) => {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        reply.send({ result: result.result })
    })
}

const getUserById = (request, reply) => {
    userCollection.findOne({
        _id: new ObjectId(request.params.userId)
    }, (err, result) => {
        assert.equal(err, null);
        reply.send({ user: result })
    })
}


export default function (app, options, next) {
    db = app.mongo.db;
    ObjectId = app.mongo.ObjectId;
    userCollection = db.collection('users');

    // ROUTES
    
    // get users
    app.get('/user', Object.assign(routeOpts, {
        schema: {
            response: USER_SCHEMAS.USERS_RESPONSE 
        }
    }), getUsers);

    // get user by id
    app.get('/user/:userId', {} , getUserById);
    
    // add user
    app.post('/user', Object.assign(routeOpts, {
        schema: {
            body: USER_SCHEMAS.CREATE_USER_BODY,
            response: USER_SCHEMAS.USER_RESPONSE
        }
    }), addUser);
    
    // delete user
    app.delete('/user/:userId', {} , deleteUser);
    
    next()
}