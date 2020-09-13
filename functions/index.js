const functions = require('firebase-functions')
const { api } = require('./dist')

exports.api = functions.region('europe-west3').https.onRequest(api)
