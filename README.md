# AngularFastifyStarter

<center><img width="550" src="src/assets/ng-fastify.png" /></center>

## Technology Stack Used

- [Angular ( 4.x )](angular.io)
- [Bootstrap 4](getbootstrap.com)
- [NgxBootstrap](https://www.npmjs.com/package/ng2-toastr)
- [Ng2Toastr](valor-software.com/ngx-bootstrap/#/)
- [Fastify](https://github.com/fastify/fastify)
- [FastifyMongoDb](https://github.com/fastify/fastify-mongodb)
- [AngularCLI](https://github.com/angular/angular-cli)
- [Webpack](https://github.com/webpack/webpack)
- [Pino](https://github.com/pinojs/pino)
- [Nodemon](https://nodemon.io/)
- [Concurrently](https://www.npmjs.com/package/concurrently)

## Features Covered

### Front End
- Angular Smart vs Dumb Components
- Usage of HttpModule
- Showing Toaster alerts via Ng2Toaster
- Lazy Loading Routes (User route)
- Usage of NgxBootstrap i.e. Modal & Collapse (for menu on small screen widths)

### Back End
- Fastify as backend framwork
- Fastify Mongo Db extension to connect to mongo db
- Usage of fastify logging
- Writing log stream to file using pino-tee
- Usage of fastify routes, prefixing (e.g. for versioning)
- Usage of fastify schemas for responses and request params/body etc validation
- Usage of babel & babel-preset to be able to use ES6 for backend as well
- Using nodemon & concurrently for serving both front-end and client end while watching too

## Install / Development

```bash
git clone https://github.com/AhsanAyaz/angular-fastify-starter
cd angular-fastify-starter

# Install dependencies using npm or yarn
npm install
#or
yarn

#make sure your mongodb instance is running. If not, do
mongod
#or if required,
sudo mongod

# start the magic
npm run start
# this will start both client and server
# Client default url: http://localhost:4200
# Server ( fastify app ) API default url: http://localhost:4500
```

## Proxy for api calls

The api for the web front-end is proxied using `proxy.conf.json`. Modify as per requirement.

## Seed Data

The server config, i.e. `server/config/config.js` contains the app config for server.
It has a property `seedData` which is by default set to `true`. If it remains `true`, every time the server will start or restart, 
the data from `users` collection will be removed and fresh Seed data will be inserted. To disable this, just make `seedData` false.

## Client Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Client Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running client unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running client end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

# Contribute

Please feel free to fork, star and contribute to the repository. There surely is a lot of room for improvement for this starter :)