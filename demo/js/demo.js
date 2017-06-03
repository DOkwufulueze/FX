require('../css/demo');

let fx = require('../../src/fx');

const dateDOM = new DOMParser().parseFromString(`
  <div id='wrapper'>
    <h1>FX LAB</h1>
    <div class='content'></div>
  </div>
`, 'text/html').body.firstChild;

document.body.appendChild(dateDOM);
fx.begin();
