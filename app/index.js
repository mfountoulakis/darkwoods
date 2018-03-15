// import choo
var choo = require('choo');

// import choo's template helper
var html = require('choo/html');

// initialize choo
var app = choo();

// create a route
app.route('/', main);

app.mount('body');

function main(state, emit) {
  return html`
    <body>
      <div>ANIMALS</div>
    </body>
  `;
}

// start app
window.onload = function() {
  console.log('loaded');
  app.mount('div');
};
