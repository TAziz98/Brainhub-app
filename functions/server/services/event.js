import { firestore } from 'firebase-admin'
import { collections } from '../constants'

async function fetchEvent(documentId) {
  const { events } = collections
  try {
    return await firestore()
      .collection(events)
      .doc(documentId)
      .get()
      .then((doc) => doc.data())
  } catch (error) {
    throw error
  }
}

export async function publishEvent(id, eventData) {
  const { events } = collections
  try {
    const previousEventRecord = await fetchEvent(id)
    if (previousEventRecord) return previousEventRecord
    await firestore().collection(events).doc(id).set(eventData)
    return eventData
  } catch (error) {
    throw error
  }
}
