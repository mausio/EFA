
export type StopEventRequestType = {
  Location: LocationType,
  Params: ParamsType,
}

export type LocationType = {
  LocationRef: LocationRefType,
  DepArrTime?: Date,
}

export type LocationRefType = {
  StopPointRef: number
}

export type ParamsType = {
  NumberOfResults: number,
  StopEventType: string,
  IncludePreviousCalls: boolean,
  IncludeOnwardsCalls: boolean,
  IncludeRealtimeData: boolean,
}
