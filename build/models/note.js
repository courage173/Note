"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Note = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const noteSchema = _mongoose.default.Schema({
  title: {
    type: String,
    required: true
  },
  noteBody: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date()
  },
  favourite: {
    type: Boolean,
    default: false
  }
});

const Note = _mongoose.default.model('Note', noteSchema);

exports.Note = Note;