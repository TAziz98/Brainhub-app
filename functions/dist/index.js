"use strict";

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _firebase = require("./config/firebase");

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_firebaseAdmin.default.initializeApp({
  credential: _firebaseAdmin.default.credential.cert(_firebase.firebaseConfig)
}); //init express


const expressApp = (0, _express.default)();
expressApp.use((0, _cors.default)({
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200
}));
expressApp.use(_bodyParser.default.json({
  limit: '5mb'
}));
expressApp.use(_bodyParser.default.urlencoded({
  extended: true,
  limit: '5mb',
  parameterLimit: 1000000
})); //API-endpoints

expressApp.use('/v1', (0, _api.default)());
module.exports = {
  api: expressApp
};