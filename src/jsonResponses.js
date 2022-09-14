// Note this object is purely in memory.
// It will be reset each time the server restarts.
const users = {};

const respondJSON = (request, response, status, object) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  
  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {

};

const getUsers = (request, response) => {

};

const getUsersMeta = (request, response) => {

};

const updateUser = (request, response) => {

};

const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  }

  return respondJSON(request, response, 404, responseJSON);
};

const notFoundMeta = (request, response) => {

};

module.exports = {
  getUsers,
  getUsersMeta,
  updateUser,
  notFound,
  notFoundMeta,
};
