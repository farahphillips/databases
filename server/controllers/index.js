var models = require('../models');
var bluebird = require('bluebird');
var mysql = require('mysql');
var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get()
    },

    post: function (req, res) {
      console.log(req.body)
      console.log(req.body["username"])
      models.messages.post(req.body["username"], req.body["roomname"], req.body["message"])
      res.status(201).end()
    }
  },

  users: {
    get: function (req, res) {
      models.users.get()
    },
    post: function (req, res) {
      models.users.post(req.body["username"])
      res.status(201).end()
    }
  }
};

