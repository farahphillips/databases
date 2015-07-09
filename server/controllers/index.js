var models = require('../models');
var bluebird = require('bluebird');
var mysql = require('mysql');
var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (req, res) {
      res.writeHead(200)
      models.messages.get()
    },

    post: function (req, res) {
      res.writeHead(201)
      console.log(req.body)
      models.messages.post(req.body["username"], req.body["roomname"], req.body["message"])
      res.end()
    }
  },

  users: {
    get: function (req, res) {
      models.users.get()
    },
    post: function (req, res) {
      models.users.post(req.body)
    }
  }
};

