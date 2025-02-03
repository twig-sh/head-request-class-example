const fs = require('fs');  // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const cssFile = fs.readFileSync(`${__dirname}/../client/style.css`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getCSS = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/css'
  });
  response.write(cssFile);
  response.end();
}

module.exports = {
  getIndex,
  getCSS,
};
