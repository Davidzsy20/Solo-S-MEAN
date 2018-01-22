var db = require('./db');

var User = {};

User.findByUsername = function(username) {
  console.log('hi')
  return db('users').where({ username: username }).select('*')
    .then(function(user) {
      console.log(user)
      return user;
    })
    .catch(function(err) {
      console.error(err)
    });
};
User.addUser = function({username,password}) {
  console.log(`Add user ${username} with password ${password}`)
  return db('users').insert({username, password})

.then(function(user) {
  return user;
})
.catch(function(err) {
  console.error(err);
})
};
User.findById = function(id) {
  return db('users').where({id: id}).select('*')
  .then(function(user) {
    return user;
  })
  .catch(function(err) {
    console.err(err);
  })
}

// TODO: ADD MORE MODEL FUNCTIONS HERE

module.exports = User;
