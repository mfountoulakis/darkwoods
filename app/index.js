var StateMachine = require('./StateMachine');
// import choo
var choo = require('choo');

// import choo's template helper
var html = require('choo/html');

var main = require('./templates/main.js');

// initialize choo
var app = choo();

console.log(app);
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

var machine = new StateMachine('green', {
  green: { timer: 'orange' },
  orange: { timer: 'red' },
  red: { timer: 'green' },
});

machine.next('timer');
console.log(machine.state); // => 'orange'

machine.next('timer');
console.log(machine.state); // => 'orange'
