"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = api;

var _express = _interopRequireDefault(require("express"));

var _event = _interopRequireDefault(require("./routes/event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

function api() {
  router.use('/event', _event.default);
  return router;
}