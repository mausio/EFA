import { Autocompletion, Location } from '../types/location-request.types'

export const convertAutocompleteLocations = (
  locationsArray: Location[] | undefined,
) => {
  if (!locationsArray) {
    return []
  }

  const autocompleteArray: Autocompletion[] = []

  locationsArray.forEach((location) => {
    const newLabel = buildLabel(location)
    const newRef = location.stopPointRef
    const newLocationName = location.locationName
    const newStopPointName = location.stopPointName

    if (
      autocompleteArray.find(
        (singleLocation) => singleLocation.label === newLabel,
      )
    ) {
      return
    }

    autocompleteArray.push({
      label: newLabel,
      stopPointRef: newRef,
      locationName: newLocationName,
      stopPointName: newStopPointName,
    })
    return
  })

  return autocompleteArray
}

const buildLabel = (location: Location) => {
  if (location.locationName === location.stopPointName) {
    return `${location.locationName}`
  }

  return `${location.locationName} ${location.stopPointName}`
}
