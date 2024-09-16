// Note this object is purely in memory.
// It will be reset each time the server restarts.
const users = {};

const respondJSON = (request, response, status, object) => {
  
};

const getUsers = (request, response) => {

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

module.exports = {
  getUsers,
  updateUser,
  notFound,
};
