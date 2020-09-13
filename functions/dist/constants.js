"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collections = exports.messages = void 0;
const messages = {
  // Event
  postEventSuccess: 'Event successfully published.',
  // Errors Event
  postEventError: error => `Error while posting event, ${error}`
};
exports.messages = messages;
const collections = {
  offers: 'events'
};
exports.collections = collections;