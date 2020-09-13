"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postEvent = void 0;

var _celebrate = require("celebrate");

const postEvent = (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: _celebrate.Joi.object({
    firstName: _celebrate.Joi.string().required(),
    lastName: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().email({
      minDomainSegments: 2,
      tlds: {
        deny: []
      }
    }).required(),
    eventDate: _celebrate.Joi.date().iso().required()
  })
});
exports.postEvent = postEvent;