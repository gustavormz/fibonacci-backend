import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import fibonacciRoute from './route/fibonacci';
import defaultRoute from './route/default';

dotenv.config();

const port = process.env.SERVER_PORT;

const apiBasePath = process.env.API_BASE_PATH;
const routeFibonacciResource = process.env.ROUTE_FIBONACCI_RESOURCE;
const routeDefaultResource = process.env.ROUTE_DEFAULT_RESOURCE;

const app = express();

app.use(cors());

app.use(`${apiBasePath}/${routeFibonacciResource}`, fibonacciRoute);

app.get(`${routeDefaultResource}`, defaultRoute);

// start the Express server
app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
});
