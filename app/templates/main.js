var html = require('choo/html');
// const onload = require('on-load');

// export module
module.exports = function() {
  // create html template
  function initCanvas() {
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  }
  return html`
  <body onload=${() => initCanvas()} >
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"> 
  </body>
  `;
};

// `<div onload=${() => console.log('loaded!')}></div>`
