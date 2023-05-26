import { Autocompletion } from '../types/location-request.types'
import { AppThunkDispatch } from '../store/hooks'
import { Autocomplete, TextField } from '@mui/material'
import { fetchLocation } from '../store/thunks/location-request.thunk'
import { LocationType } from '../types/config.types'
import { FC } from 'react'
import { changeLocation } from '../store/slicers/config.slicer'
import { AppDispatch } from '../types/store.types'

interface Props {
  options: Autocompletion[],
  thunkDispatch: AppThunkDispatch,
  dispatch: AppDispatch,
  locationType: LocationType.origin | LocationType.destination,
}


const AutocompleteComponent: FC<Props> = ({ options, thunkDispatch, dispatch, locationType }) => {

  const chooseStation = (
    location: Autocompletion | null,
  ) => {
    if (!location) {
      dispatch(changeLocation({ type: locationType, location: undefined }))
      return
    }

    dispatch(
      changeLocation({
        type: locationType,
        location: location,
      }),
    )
  }

  return (
    <Autocomplete
      className={'autocompleteInput'}
      options={options}
      onInputChange={(event: any, location: string | null) => {
        thunkDispatch(fetchLocation(location))
      }}
      onChange={(event, location) => {
        chooseStation(location)
      }}
      renderInput={(params) => (
        <TextField {...params} label={locationType} />
      )}
    />
  )
}


export default AutocompleteComponent