import { ConfigState } from '../slicers/config.slicer'
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../types/store.types'

const selectConfigReducer = (state: RootState): ConfigState => state.config

export const selectOriginLocation = createSelector(
  [selectConfigReducer],
  (state) => state.originLocation,
)

export const selectDestinationLocation = createSelector(
  [selectConfigReducer],
  (state) => state.destinationLocation,
)

export const selectAutocompletionArray = createSelector(
  [selectConfigReducer],
  (state) => state.autocompletionArray,
)

export const selectPtModesOptions = createSelector(
  [selectConfigReducer],
  (state) => state.ptModesOptions,
)

export const selectConfigIsOpen = createSelector([selectConfigReducer], (state) => state.configIsOpen)