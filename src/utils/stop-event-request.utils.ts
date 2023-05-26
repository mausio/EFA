// noinspection HttpUrlsUsage

export const createStopEventRequest = (stopPointRef: string | undefined) => {
  if (!stopPointRef) return ''

  const numberOfResults = 200 //min: 1; max: 150
  //TODO: outsource numberOfResults
  const includePreviousStops = false
  //TODO: outsource includePreviousStops
  const currentTime = new Date().toISOString()
  //TODO: outsource currentTime
  const apiKey = process.env.REACT_APP_TRIAS_API_KEY
  //TODO: outsource apiKey

  //TODO: Put stopEventRequest in a class and make it configurable

  //TODO: Is it possible to use a template literal here?

  return `<?xml version="1.0" encoding="UTF-8"?>
<Trias version="1.1" xmlns="http://www.vdv.de/trias" xmlns:siri="http://www.siri.org.uk/siri" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <ServiceRequest>
        <siri:RequestTimestamp>${currentTime}</siri:RequestTimestamp>
        <siri:RequestorRef>${apiKey}</siri:RequestorRef>
        <RequestPayload>
            <StopEventRequest>
                <Location>
                    <LocationRef>
                        <StopPointRef>${stopPointRef}</StopPointRef>
                    </LocationRef>
                    <DepArrTime>${currentTime}</DepArrTime>
                </Location>
                <Params>
                    <NumberOfResults>${numberOfResults}</NumberOfResults>
                    <StopEventType>departure</StopEventType>
                    <IncludePreviousCalls>${includePreviousStops}</IncludePreviousCalls>
                    <IncludeOnwardCalls>true</IncludeOnwardCalls>
                    <IncludeRealtimeData>true</IncludeRealtimeData>
                </Params>
            </StopEventRequest>
        </RequestPayload>
    </ServiceRequest>
</Trias>`
}
