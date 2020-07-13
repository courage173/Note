"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = exports.getAllFavourites = exports.updateFavourite = exports.getAllNote = exports.getSingleNote = exports.postNote = void 0;

var _note = require("../models/note");

const postNote = (req, res) => {
  try {
    const note = new _note.Note(req.body);
    note.save((err, doc) => {
      if (err) return res.status(400).json({
        success: false,
        message: err.message
      });
      return res.status(201).json({
        success: true,
        id: doc._id
      });
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

exports.postNote = postNote;

const getSingleNote = (req, res) => {
  try {
    const {
      id
    } = req.params;

    _note.Note.findOne({
      _id: id
    }, (err, doc) => {
      if (err) return res.status(400).json({
        success: false,
        message: err.message
      });
      return res.status(200).json({
        success: true,
        data: doc
      });
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

exports.getSingleNote = getSingleNote;

const getAllNote = (req, res) => {
  try {
    _note.Note.find({}, (err, doc) => {
      if (err) return res.status(400).json({
        success: false,
        message: err.message
      });
      return res.status(200).json({
        success: true,
        data: doc
      });
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

exports.getAllNote = getAllNote;

const updateFavourite = (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      favourite
    } = req.body;

    _note.Note.findOneAndUpdate({
      _id: id
    }, {
      $set: {
        "favourite": favourite
      }
    }, {
      new: true
    }, (err, doc) => {
      if (err) return res.json({
        success: false,
        err
      });
      return res.status(200).json({
        success: true,
        favourite: doc.favourite
      });
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

exports.updateFavourite = updateFavourite;

const getAllFavourites = (req, res) => {
  try {
    _note.Note.find({
      favourite: true
    }, (err, doc) => {
      if (err) return res.json({
        success: false,
        err
      });
      return res.status(200).json({
        success: true,
        data: doc
      });
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

exports.getAllFavourites = getAllFavourites;

const search = (req, res) => {
  try {
    let {
      searchWord
    } = req.body;

    _note.Note.find({
      $text: {
        $search: searchWord
      }
    }, (err, doc) => {
      if (err) return res.json({
        success: false,
        err
      });
      return res.status(200).json({
        success: true,
        data: doc
      });
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

exports.search = search;