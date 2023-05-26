import { createAsyncThunk } from '@reduxjs/toolkit'
import { createStopEventRequest } from '../../utils/stop-event-request.utils'
import { convertStopEvents } from '../../utils/train-builder.utils'

export const fetchStopEvents = createAsyncThunk(
  'stopEvents/trains',
  async (_, { getState }: { getState: any }) => {
    const originLocation = getState().config.originLocation
    const triasApiKey = process.env.REACT_APP_TRIAS_API_KEY
    const triasApiUrl = process.env.REACT_APP_TRIAS_API_URL


    if (originLocation && triasApiKey && triasApiUrl) {
      try {
        const body = createStopEventRequest(originLocation?.stopPointRef)

        const response = await fetch(triasApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/xml',
            Authorization: triasApiKey,
          },
          body: body,
          redirect: 'follow',
        })

        const text = await response.text()

        return convertStopEvents(text)
      } catch (error) {
        console.log(error)
      }
    }
    return undefined
  },
)
