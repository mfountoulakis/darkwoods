// import choo
var choo = require('choo');

// import choo's template helper
var html = require('choo/html');

var main = require('./templates/main.js');
// var canvas = require('./templates/canvas.js');

// initialize choo
var app = choo();

// create a route
app.route('/', main);
app.route('/404', notFound);

// start app
app.mount('body');

function notFound() {
  return html`
      <body>
        <a href="/">
          Route not found. Navigate back.
        </a>
      </body>
    `;
}

// function main(state, emit) {
//   return html`
//     <body>
//       <div>ANIMALS</div>
//     </body>
//   `;
// }
