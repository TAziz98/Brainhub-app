import admin from 'firebase-admin'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import { firebaseConfig } from './config/firebase'
import api from './api'

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig)
})

//init express
const expressApp = express()
expressApp.use(
  cors({
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200,
  }),
)

expressApp.use(bodyParser.json({ limit: '5mb' }))
expressApp.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '5mb',
    parameterLimit: 1000000,
  }),
)

//API-endpoints
expressApp.use('/v1', api())

module.exports = {
  api: expressApp,
}
