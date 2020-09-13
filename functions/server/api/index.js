import express from 'express'
import event from './routes/event'

const router = express.Router()

export default function api() {
  router.use('/event', event)

  return router
}
