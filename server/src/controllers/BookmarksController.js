const { Bookmark, Song, User } = require('../models');
const _ = require('lodash');

module.exports = {
  async index(req, res) {
    try {
      const { songId, userId } = req.query;
      const where = {
        UserId: userId
      };
      if (songId) {
        where.SongId = songId;
      }
      const bookmarks = await Bookmark.findAll({
        where: req.query,
        include: [
          {
            model: Song
          }
        ]
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend({}, bookmark.Song, bookmark));

      res.send(bookmarks);
    } catch (error) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the bookmarks'
      });
    }
  },
  async post(req, res) {
    try {
      // const bookmark = await Bookmark.findOne({
      //   where: {
      //     SongId: songId,
      //     UserId: userId
      //   }
      // });

      // if (bookmark) {
      //   return res.status(400).send({
      //     error: 'you already have this set as a bookmark'
      //   });
      // }

      const newBookmark = await Bookmark.create(req.body);
      res.send(newBookmark);
    } catch (error) {
      res.status(500).send({
        error: 'An error has occured trying to create the bookmark'
      });
    }
  },
  async delete(req, res) {
    try {
      const { bookmarkId } = req.params;
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId
        }
      });
      console.log(bookmark);
      console.log(bookmark);
      console.log(bookmark);
      console.log(bookmark);
      if (!bookmark) {
        return res.status(403).send({
          error: 'you do not have access to this bookmark'
        });
      }
      await bookmark.destroy();
      res.send(bookmark);
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the bookmark'
      });
    }
  }
};
