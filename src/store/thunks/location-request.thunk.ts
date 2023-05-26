import { createAsyncThunk } from '@reduxjs/toolkit'
import { createLocationRequest } from '../../utils/location-request.utils'
import { convertLocations } from '../../utils/location-builder.utils'

export const fetchLocation = createAsyncThunk(
  'config/location',
  async (location: string | null) => {
    const triasApiKey = process.env.REACT_APP_TRIAS_API_KEY
    const triasApiUrl = process.env.REACT_APP_TRIAS_API_URL

    if (location && location.length > 2 && triasApiKey && triasApiUrl) {
      try {
        const response = await fetch(triasApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/xml',
            Authorization: triasApiKey,
          },
          body: createLocationRequest(location),
          redirect: 'follow',
        })

        const text = await response.text()
        return convertLocations(text)
      } catch (error) {
        console.log(error)
      }
    }
    return undefined
  },
)
