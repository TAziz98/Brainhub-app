"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _celebrate = require("celebrate");

var _event = require("../controller/event");

var _event2 = require("../../middleware/validation/event");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.route("/:id").post(_event2.postEvent, _event.postEvent);
router.use((0, _celebrate.errors)());
var _default = router;
exports.default = _default;