import { Location } from '../types/location-request.types'
import { xmlToJsonObject } from './xml-converter.utils'

export const convertLocations = (locationsData: any) => {
  if (!locationsData) return []

  const convertedLocationData = xmlToJsonObject(locationsData)

  // creates empty Array to return it later
  const locations: Location[] = []

  const locationResponse: any[] =
    convertedLocationData['trias:Trias']['trias:ServiceDelivery'][
      'trias:DeliveryPayload'
    ]['trias:LocationInformationResponse']['trias:Location']

  if (!locationResponse || !convertedLocationData) {
    return []
  }

  if (!locationResponse.length) {
    const singleLocation = getSingleLocation(locationResponse, locations)

    if (singleLocation) {
      locations.push(singleLocation)
      return locations
    }
    return
  }

  locationResponse.forEach((locationResponse: any) => {
    const singleLocation = getSingleLocation(locationResponse, locations)

    if (singleLocation) {
      locations.push(singleLocation)
    }
  })
  return locations
}

const getSingleLocation = (locationResponse: any, locations: Location[]) => {
  const location = locationResponse['trias:Location']

  const locationName = location['trias:LocationName']?.['trias:Text']?._text
  const stopPointName =
    location['trias:StopPoint']?.['trias:StopPointName']?.['trias:Text']?._text
  const stopPointRef =
    location['trias:StopPoint']?.['trias:StopPointRef']?._text
  const probability = locationResponse['trias:Probability']?._text

  if (
    !locationResponse ||
    !locationName ||
    !stopPointName ||
    !stopPointRef ||
    !probability
  ) {
    //check if any data is missing
    return
  }

  const duplicate = locations.find(
    (locations) => locations.stopPointRef === stopPointRef,
  ) // find duplicate and if there is one in the array do not return a new location
  if (duplicate) {
    return
  }

  const singleLocation: Location = {
    // build new location for array
    locationName: locationName,
    stopPointName: stopPointName,
    stopPointRef: stopPointRef,
    probability: parseFloat(probability),
  }
  return singleLocation
}
