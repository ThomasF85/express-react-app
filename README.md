# Getting Started with Express React Template

This project contains an express server application and a react app bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To get started run `npm run install:all` in the project directory.

After that:
To start developing run `npm run dev` in the project directory to start the `express` server and the `React` app. Start coding!

## Available Scripts

In the project directory, you can run:

### `npm run server`

Runs the express server with nodemon, so the server will restart when you make changes.
The server serves api routes and the latest build of the react app from the client/build folder.
Open [http://localhost:5000](http://localhost:5000) to view the latest build of the react app in your browser.

### `npm run client`

Runs the react app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run dev`

Runs the express server with nodemon and the react app in the development mode.\
This command should be used during development.\

Open [http://localhost:3000](http://localhost:3000) to view the react app in development mode in your browser.\
Open [http://localhost:5000](http://localhost:5000) to view the latest build of the react app in your browser.

### `npm run build`

Builds the react app for production to the `client/build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run install:all`

Installs all dependencies for the root project, the client project and the server project.
