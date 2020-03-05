const { History, Song, User } = require('../models');
const _ = require('lodash');

module.exports = {
  async index(req, res) {
    try {
      const histories = await History.findAll({
        where: req.body,
        include: [
          {
            model: Song
          }
        ]
      })
        .map(history => history.toJSON())
        .map(history => _.extend({}, history.Song, history));

      res.send(histories);
    } catch (error) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the history'
      });
    }
  },
  async post(req, res) {
    try {
      const history = await History.create(req.body);
      res.send(history);
    } catch (error) {
      res.status(500).send({
        error: 'An error has occured trying to create the history'
      });
    }
  }
};
