// Note this object is purely in memory.
// It will be reset each time the server restarts.
const users = {
  trav: 'is',
};

const respondJSON = (request, response, status, object) => {

};

const getUsers = (request, response) => {
  const responseJSON = JSON.stringify({
    users: users
  });

  response.writeHead(200, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(responseJSON, 'utf8')
  })

  if (request.method !== 'HEAD') {
    response.write(responseJSON);
  }

  response.end();
};

const updateUser = (request, response) => {

};

const notFound = (request, response) => {
  const responseJSON = JSON.stringify({
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  });

  response.writeHead(404, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(content, 'utf8')
  })
  response.write(responseJSON);
  response.end();

  return respondJSON(request, response, 404, responseJSON);
};

module.exports = {
  getUsers,
  updateUser,
  notFound,
};
