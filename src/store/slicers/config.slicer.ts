import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchLocation } from '../thunks/location-request.thunk'
import { Autocompletion, Location } from '../../types/location-request.types'
import { convertAutocompleteLocations } from '../../utils/autocomplete-locations.utils'
import { LocationType, PtModesOptions } from '../../types/config.types'
import { enqueueSnackbar } from 'notistack'

export interface Config {
  originLocation: Autocompletion | undefined
  destinationLocation: Autocompletion | undefined
  autocompletionArray: Autocompletion[]
  locations: Location[] | undefined
  isLoading: boolean
  ptModesOptions: PtModesOptions
  configIsOpen: boolean
}

export type ConfigState = {
  readonly originLocation: Autocompletion | undefined
  readonly destinationLocation: Autocompletion | undefined
  readonly autocompletionArray: Autocompletion[]
  readonly locations: Location[] | undefined
  readonly isLoading: boolean
  readonly ptModesOptions: PtModesOptions
  readonly configIsOpen: boolean
}

const initialState = {
  originLocation: undefined,
  destinationLocation: undefined,
  autocompletionArray: [],
  locations: undefined,
  isLoading: false,
  ptModesOptions: {
    rail: true,
    bus: true,
    tram: true,
  },
  configIsOpen: false,
} as Config

export const configSlicer = createSlice({
  name: 'config',
  initialState,
  reducers: {
    changeLocation(
      state,
      action: PayloadAction<{
        type: LocationType.origin | LocationType.destination
        location: Autocompletion | undefined
      }>,
    ) {
      switch (action.payload.type) {
        case LocationType.origin:
          state.originLocation = action.payload.location
          enqueueSnackbar(`origin: ${action.payload.location?.label}`, { variant: 'info' })
          break

        case LocationType.destination:
          state.destinationLocation = action.payload.location
          enqueueSnackbar(`destination: ${action.payload.location?.label}`, { variant: 'info' })
          break
      }
    },
    ptModesOptions(state, action: PayloadAction<PtModesOptions>) {
      state.ptModesOptions = action.payload
      enqueueSnackbar(`rail: ${action.payload.rail} bus: ${action.payload.bus} tram: ${action.payload.tram}`, { variant: 'info' })
    },
    toggleConfigWindow(state, action: PayloadAction<boolean>) {
      state.configIsOpen = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocation.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchLocation.fulfilled, (state, action: PayloadAction<Location[] | undefined>) => {
      state.isLoading = false
      state.locations = action.payload
      state.autocompletionArray = convertAutocompleteLocations(action.payload)
    })
    builder.addCase(fetchLocation.rejected, (state) => {
      state.isLoading = false
      enqueueSnackbar('Error while fetching locations', { variant: 'error' })
    })
  },
})

export const { changeLocation, ptModesOptions, toggleConfigWindow } =
  configSlicer.actions
export default configSlicer.reducer
