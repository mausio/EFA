// noinspection HttpUrlsUsage

export const createStopEventRequest = (stopPointRef: string | undefined) => {
  if (!stopPointRef) return ''

  const numberOfResults = 200 //min: 1; max: 150
  const includePreviousStops = false
  const currentTime = new Date().toISOString()
  const apiKey = process.env.REACT_APP_TRIAS_API_KEY

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
