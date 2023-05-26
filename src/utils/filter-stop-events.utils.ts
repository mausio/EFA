import { StopEvent } from '../types/stopEvent.types'
import { Autocompletion } from '../types/location-request.types'
import { shortenLocationRef } from './shorten-location-ref.utils'
import 'moment/locale/de'
import { PtModesOptions } from '../types/config.types'

export const filterStopEvents = (
  stopEvents: StopEvent[] | undefined,
  destinationLocation: Autocompletion | undefined,
  ptModesOptions: PtModesOptions,
) => {
  if (!stopEvents) {
    return []
  }

  return stopEvents.filter((event) => {
    return filterLambda(event, destinationLocation, ptModesOptions)
  })
}

const filterLambda = (
  vehicle: StopEvent,
  destinationLocation: Autocompletion | undefined,
  ptModesOptions: PtModesOptions,
): boolean => {
  const trainDestinationRef = shortenLocationRef(vehicle.destinationRef)
  const destinationRef = shortenLocationRef(destinationLocation?.stopPointRef)
  const ptMode = checkPtMode(ptModesOptions, vehicle.ptMode)
  const foundMatchingStop = findMatchingStop(vehicle, destinationRef)
  const matchingDestinationRefs = compareRefs(
    destinationRef,
    trainDestinationRef,
  )

  return !!((matchingDestinationRefs || foundMatchingStop) && ptMode)
}

const findMatchingStop = (event: StopEvent, destinationRef: string | undefined) => {
  if (!destinationRef) {
    return true
  }

  return event.stops?.find(
    (stop) => shortenLocationRef(stop.stopPointRef) === destinationRef,
  )
}

const checkPtMode = (
  ptModesOptions: PtModesOptions,
  ptMode: string | undefined,
) => {
  const rail = ptModesOptions.rail
  const tram = ptModesOptions.tram
  const bus = ptModesOptions.bus


  return (ptMode === 'bus' && bus) || (ptMode === 'tram' && tram) || (ptMode === 'rail' && rail)
}

const compareRefs = (
  destinationRef: string | undefined,
  trainRef: string | undefined,
) => {
  return !destinationRef || destinationRef === trainRef
}
