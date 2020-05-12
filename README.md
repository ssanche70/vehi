**Starting node-server from /server:**

1. Do `npm install` - This will install all the dependencies listed in the package.json.
2. `node app.js` will start the server on localhost:4000

**Starting the react application from /frontend:**

1. From the root directory, go to frontend folder. Do `npm install` in the frontend folder.
2. Do `npm start` and the client will be started at localhost:3000. The proxy is already configured to make all the requests to localhost:4000.
