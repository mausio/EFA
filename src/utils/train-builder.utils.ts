import {getStops} from './stop-builder.utils'
import {Stop, StopEvent} from '../types/stopEvent.types'
import {xmlToJsonObject} from './xml-converter.utils'

export const convertStopEvents = (stopEventData: any) => {
  if (!stopEventData) return undefined

  const jsonObject = xmlToJsonObject(stopEventData)

  if (!jsonObject) return undefined

  const stopEventResults: any[] =
    jsonObject['trias:Trias']['trias:ServiceDelivery']['trias:DeliveryPayload'][
      'trias:StopEventResponse'
      ]['trias:StopEventResult']

  if (!stopEventResults) return undefined

  const trains: StopEvent[] = []

  stopEventResults.forEach((stopEventResult) => {
    if (!stopEventResult) return {}

    const service = stopEventResult['trias:StopEvent']['trias:Service']
    const attributes = getAttributes(service)
    const stops: Stop[] = getStops(stopEventResult)
    const ptMode = service['trias:Mode']['trias:PtMode']?._text
    const responseTimeStamp =
      jsonObject['trias:Trias']?.['trias:ServiceDelivery']?.[
        'siri:ResponseTimestamp'
        ]?._text

    const train: StopEvent = {
      ptMode: ptMode,
      railSubmode: service['trias:RailSubmode']?._text,
      responseTimestamp: responseTimeStamp,
      operatingDayRef: service['trias:OperatingDayRef']?._text,
      resultID: stopEventResult['trias:ResultId']?._text,
      journeyRef: service['trias:JourneyRef']?._text,
      lineRef: service['trias:LineRef']?._text,
      operatorRef: service['trias:OperatorRef']?._text,
      origin: service['trias:OriginText']['trias:Text']?._text,
      originRef: service['trias:OriginStopPointRef']?._text,
      destination: service['trias:DestinationText']['trias:Text']?._text,
      destinationRef: service['trias:DestinationStopPointRef']?._text,
      publishedLineName:
      service['trias:PublishedLineName']['trias:Text']?._text,
      attributeTexts: attributes ? attributes : [],
      stops: stops,
    }

    return trains.push(train)
  })

  return trains
}

const getAttributes = (service: any) => {
  if (!service) return undefined

  const attributeTexts = service['trias:Attribute']

  if (!attributeTexts) return undefined

  const attributeArray: any[] = []

  if (attributeTexts instanceof Array) {
    attributeTexts.forEach((singleText: any) => {
      attributeArray.push(singleText?.['trias:Text']?.['trias:Text']?._text)
    })
    return attributeArray
  }

  attributeArray.push(attributeTexts?.['trias:Text']?._text)
  return attributeArray
}
