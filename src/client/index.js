import React from 'react';
import ReactDOM from 'react-dom';

// import App from './components';
import ALO from './components/alo';

// if (global.document === undefined) {
//   const mainHtml = require('../../public/index.html');
//   global.document = new JSDOM(JSON.stringify(mainHtml));
// }

// JSDOM.fromFile('../../public/index.html').then((dom) => {
//   global.window = dom.window;
//   global.document = window.document;
// });
if (typeof window !== 'undefined') {
  ReactDOM.hydrate(<ALO />, document.getElementById('root'));
}
