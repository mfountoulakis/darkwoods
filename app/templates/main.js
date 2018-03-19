const html = require('choo/html');
const canvas = require('../elements/canvas');

module.exports = function() {
  // create html template

  return html`
    <body>
      ${canvas()}
    </body>
  `;
};
