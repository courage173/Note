"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _noteController = require("./controllers/noteController");

var _validation = require("./middlewares/validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

_dotenv.default.config();

_mongoose.default.set('useCreateIndex', true);

_mongoose.default.Promise = global.Promise;

_mongoose.default.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => console.log('database connected')).catch(err => console.log(err));

app.use((0, _cors.default)());
app.use(_express.default.static('./client/build'));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.post('/v1/post-note', _validation.validateNote, _noteController.postNote);
app.get('/v1/get-single-note/:id', _noteController.getSingleNote);
app.get('/v1/get-all-note', _noteController.getAllNote);
app.patch('/v1/update-favourite/:id', _noteController.updateFavourite);
app.get('/v1/get-favourite', _noteController.getAllFavourites);
app.post('/v1/search', _noteController.search);
var _default = app;
exports.default = _default;