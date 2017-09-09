import userApi from './user/user.api'
// import more apis here

export default function(app) {
    // register all your v1 apis here
    app.register(userApi, { prefix: '/api/v1' })
}