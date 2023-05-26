export interface Stop {
  stop?: number
  stopPointRef?: string
  stopPointName?: string
  bay?: string
  arrival?: {
    timetableTime?: string
    estimatedTime?: string
  }
  departure?: {
    timetableTime?: string
    estimatedTime?: string
  }
}

export interface StopEvent {
  ptMode?: string
  railSubmode?: string
  operatingDayRef?: string
  responseTimestamp?: string
  resultID?: string
  journeyRef?: string
  lineRef?: string
  operatorRef?: string
  origin?: string
  originRef?: string
  destination?: string
  destinationRef?: string
  publishedLineName?: string
  attributeTexts?: string[]
  stops?: Stop[]
}
