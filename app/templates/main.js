var html = require('choo/html');
module.exports = function() {
  // create html template
  function initCanvas() {
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    ctx.stroke();

    var imageObj = new Image();

    imageObj.onload = function() {
      ctx.drawImage(imageObj, 0, 0);
    };
    imageObj.src = '../assets/bg.png';
  }

  return html`
  <body onload=${() => initCanvas()} >
    <canvas id="myCanvas" width="900" height="588" style="border:1px solid #000000;"> 
  </body>
  `;
};
