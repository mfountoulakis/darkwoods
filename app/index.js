// import choo
var choo = require('choo');

// import choo's template helper
var html = require('choo/html');

var main = require('./templates/main.js');

// initialize choo
var app = choo();

// create a route
app.route('/', main);

// start app
app.mount('body');

// function main(state, emit) {
//   return html`
//     <body>
//       <div>ANIMALS</div>
//     </body>
//   `;
// }
