"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postEvent = postEvent;

var _constants = require("../../constants");

var _event = require("../../services/event");

async function postEvent(req, res) {
  const {
    postEventSuccess,
    postEventError
  } = _constants.messages;
  const event = req.body;
  const {
    id: documentId
  } = req.params;

  try {
    const eventData = await (0, _event.publishEvent)(documentId, event);
    return res.status(200).send({
      event: eventData,
      message: postEventSuccess
    });
  } catch (error) {
    return res.status(500).send(postEventError(error));
  }
}