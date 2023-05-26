import { createSlice } from '@reduxjs/toolkit'
import { StopEvent } from '../../types/stopEvent.types'
import { fetchStopEvents } from '../thunks/stop-event-request.thunk'
import { enqueueSnackbar } from 'notistack'

export interface StopEvents {
  stopEvents: StopEvent[] | undefined
  stopEventDetails: StopEvent | undefined
  lastRefresh: string
  isLoading: boolean
}

export type StopEventsState = {
  readonly lastRefresh: string
  readonly stopEventDetails: StopEvent | undefined
  readonly stopEvents: StopEvent[] | undefined
  readonly isLoading: boolean
}

const initialState = {
  stopEvents: undefined,
  stopEventDetails: undefined,
  lastRefresh: 'never',
  isLoading: false,
} as StopEvents

export const dataSlicer = createSlice({
  name: 'stopEvents',
  initialState,
  reducers: {
    stopEventDetails(state, action) {
      state.stopEventDetails = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStopEvents.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchStopEvents.fulfilled, (state, action) => {
      state.isLoading = false
      state.lastRefresh = new Date().toISOString()
      state.stopEvents = action.payload

    })
    builder.addCase(fetchStopEvents.rejected, (state) => {
      state.isLoading = false
      enqueueSnackbar('Error fetching stop events', {variant: 'error'})
    })
  },
})

export const {

} = dataSlicer.actions
export default dataSlicer.reducer
