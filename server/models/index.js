var connection = require('../db/');

module.exports = {
  messages: {
    get: function (req, res) {
    },
    post: function (user, room, msg) {
      // console.log("INSERT INTO messages (user, roomname, msgs) VALUES (" + connection.escape(user) + "," + connection.escape(room) + "," + connection.escape(msg) + ")")
      connection.query("INSERT INTO messages (user, roomname, msgs) VALUES (" + connection.escape(user) + "," + connection.escape(room) + "," + connection.escape(msg) + ")")
    }
  },

  users: {
    get: function (req, res) {
      connection.query('SELECT * FROM users', function(err) {
        if (err) throw err;
      })
    },
    post: function (username) {
      // console.log("INSERT INTO users (username) VALUES (" + connection.escape(username) + ")")
      connection.query("INSERT INTO users (username) VALUES (" + connection.escape(username) + ")")
    }
  }
};

