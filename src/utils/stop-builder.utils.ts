import {Stop} from '../types/stopEvent.types'

interface StopEvent {
  'trias:ThisCall': any
  'trias:OnwardCall'?: any[]
}

export const getStops = (stopEventResult: any): Stop[] => {
  if (!stopEventResult) return []

  const stops: Stop[] = []
  const stopEvent: StopEvent = stopEventResult['trias:StopEvent']

  if (!stopEvent) return []

  const firstStop = convertStop(stopEvent['trias:ThisCall'])
  firstStop.stop = 1
  stops.push(firstStop)

  if (
    stopEvent['trias:OnwardCall'] &&
    stopEvent['trias:OnwardCall']?.length < 1
  ) {
    return stops
  }

  if (
    !stopEvent['trias:OnwardCall']?.length
    // onwardCalls can be just 1 -> instead of array there is an Object
  ) {
    const stop = convertStop(stopEvent?.['trias:OnwardCall'])
    stops.push(stop)
    return stops
  }

  stopEvent['trias:OnwardCall']!.forEach((singleStopEvent) => {
    const stop = convertStop(singleStopEvent)
    stops.push(stop)

    return stop
  })

  return stops
}

const convertStop = (stopEvent: any): Stop => {
  const callAtStop = stopEvent['trias:CallAtStop']

  if (!callAtStop) return {}

  return {
    stop: callAtStop?.['trias:StopSeqNumber']?._text
      ? parseInt(callAtStop?.['trias:StopSeqNumber']?._text)
      : undefined,
    stopPointRef: callAtStop?.['trias:StopPointRef']?._text
      ? callAtStop?.['trias:StopPointRef']?._text
      : undefined,
    stopPointName: callAtStop?.['trias:StopPointName']?.['trias:Text']?._text,
    bay: callAtStop?.['trias:PlannedBay']?.['trias:Text']?._text
      ? callAtStop?.['trias:PlannedBay']?.['trias:Text']?._text
      : undefined,

    arrival: {
      timetableTime:
      callAtStop['trias:ServiceArrival']?.['trias:TimetabledTime']?._text,
      estimatedTime:
      callAtStop['trias:ServiceArrival']?.['trias:EstimatedTime']?._text,
    },
    departure: {
      timetableTime:
      callAtStop['trias:ServiceDeparture']?.['trias:TimetabledTime']?._text,
      estimatedTime:
      callAtStop['trias:ServiceDeparture']?.['trias:EstimatedTime']?._text,
    },
  }
}
