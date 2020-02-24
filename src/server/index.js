/* eslint-disable no-console */
import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import Client from '../client/components/index';

const PORT = 4000;
const app = express();

const router = express.Router();

// app.use(express.static('../../build'));

const serverSide = (req, res) => {
  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong', err);
      return res.status(500).send('Wrong response');
    }
    let replaced_data = data;
    replaced_data = replaced_data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<Client />)}</div>`);
    replaced_data = replaced_data.replace('(<head>)', `$1\n<meta http-equiv="Content-Security-Policy" content="default-src *; img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src 'self' 'unsafe-inline' *">
    `);
    return res.send(replaced_data);
  });
};

router.use('^/$', serverSide);

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);

app.use(router);

app.listen(PORT, () => {
  console.log(`SERVERSIDE IS RUNNING IN ${PORT}`);
});
