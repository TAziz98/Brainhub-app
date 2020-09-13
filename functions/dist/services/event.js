"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishEvent = publishEvent;

var _firebaseAdmin = require("firebase-admin");

var _constants = require("../constants");

async function fetchEvent(documentId) {
  const {
    events
  } = _constants.collections;

  try {
    return await (0, _firebaseAdmin.firestore)().collection(events).doc(documentId).get().then(doc => doc.data());
  } catch (error) {
    throw error;
  }
}

async function publishEvent(id, eventData) {
  const {
    events
  } = _constants.collections;

  try {
    const previousEventRecord = await fetchEvent(id);
    if (previousEventRecord) return previousEventRecord;
    await (0, _firebaseAdmin.firestore)().collection(events).doc(id).set(eventData);
    return eventData;
  } catch (error) {
    throw error;
  }
}