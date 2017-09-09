import UserModel from '../../../models/user.model';

export const USERS_RESPONSE = { //  multi users response
    200: {
        type: 'object',
        properties: {
            users: { type: 'array' , items: UserModel }
        }
    },
    '4xx': {
        type: 'object',
        properties: {
            error: { type: 'string' },
            message: { type: 'string' }
        }
    }
}

export const USER_RESPONSE = { //  single user response
    200: {
        type: 'object',
        properties: {
            user: UserModel
        }
    },
    '4xx': {
        type: 'object',
        properties: {
            error: { type: 'string' },
            message: { type: 'string' }
        }
    }
}

export const CREATE_USER_BODY = { //  create user body validation
    type: 'object',
    properties: {
      email: { type: 'string' },
      password: { type: 'string' }
    }
}

export const DELETE_USER_PARAMS = { //  delete user params validation
    userId: { type: 'string' }
}

export const USER_SCHEMAS = {
    USERS_RESPONSE,
    USER_RESPONSE,
    CREATE_USER_BODY,
    DELETE_USER_PARAMS
};

export default USER_SCHEMAS;