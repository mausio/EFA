import { createSelector } from '@reduxjs/toolkit'
import { StopEventsState } from '../slicers/data.slicer'
import { filterStopEvents } from '../../utils/filter-stop-events.utils'
import { RootState } from '../../types/store.types'

const selectMainData = (state: RootState): StopEventsState => state.stopEvents

export const selectStopEvents = createSelector(
  [selectMainData],
  (state) => state.stopEvents,
)

export const selectFilteredStopEvents = createSelector(
  [
    (state: RootState) => {
      return {
        stopEvents: state.stopEvents.stopEvents,
        destinationLocation: state.config.destinationLocation,
        ptModesOptions: state.config.ptModesOptions,
      }
    },
  ],
  ({
     stopEvents,
     destinationLocation,
     ptModesOptions,
   }) => {
    return filterStopEvents(
      stopEvents,
      destinationLocation,
      ptModesOptions,
    )
  },
)
