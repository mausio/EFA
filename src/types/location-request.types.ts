
export type LocationInformationRequestType = {
  InitialInput: InitialInputType
  Restrictions: RestrictionsType
}

export type InitialInputType = {
  LocationName: string
}

export type RestrictionsType = {
  Type: string
  NumberOfResults: number
  IncludePtModes: boolean
}

export interface Location {
  locationName?: string
  stopPointName?: string
  stopPointRef?: string
  probability?: number
}

export interface Autocompletion {
  label: string
  stopPointRef?: string
  locationName?: string
  stopPointName?: string
}
