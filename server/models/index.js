var connection = require('../db/');

module.exports = {
  messages: {
    get: function (req, res) {
      connection.query('SELECT * FROM messages', function(err) {
        if (err) throw err;
      })

    },
    post: function (user, room, msg) {
      connection.query("INSERT INTO messages (user, roomname, msgs) VALUES (" + connection.escape(user) + "," + connection.escape(room) + "," + connection.escape(msg) + ")")

    }
  },

  users: {
    get: function (req, res) {
      connection.query('SELECT * FROM users', function(err) {
        if (err) throw err;
      })
    },
    post: function (req, res) {
      var generatedQuery = "INSERT INTO users (username) VALUES '('"+req.body.username+"')'"
      connection.query(generatedQuery)
      res.end()
    }
  }
};

