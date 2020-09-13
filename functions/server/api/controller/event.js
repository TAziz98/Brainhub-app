import { messages } from '../../constants'
import {
  publishEvent,
} from '../../services/event'

export async function postEvent(req, res) {
  const { postEventSuccess, postEventError } = messages
  const event = req.body
  const { id: documentId } = req.params
  try {
    const eventData = await publishEvent(documentId, event)
    return res.status(200).send({ event: eventData, message: postEventSuccess })
  } catch (error) {
    return res.status(500).send(postEventError(error))
  }
}