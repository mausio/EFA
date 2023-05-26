export const createLocationRequest = (locationName: string) => {
  const numberOfResults = 150 //min: 1; max: 1000
  const apiKey = process.env.REACT_APP_TRIAS_API_KEY

  return `<?xml version="1.0" encoding="UTF-8"?>
<Trias version="1.1" xmlns="http://www.vdv.de/trias" xmlns:siri="http://www.siri.org.uk/siri" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.vdv.de/trias ../trias-xsd-v1.1/Trias.xsd">
    <ServiceRequest>
        <siri:RequestTimestamp>${new Date().toISOString()}</siri:RequestTimestamp>
        <siri:RequestorRef>${apiKey}</siri:RequestorRef>
        <RequestPayload>
            <LocationInformationRequest>
                <InitialInput>
                    <LocationName>${locationName}</LocationName>
                </InitialInput>
                <Restrictions>
                    <Type>stop</Type>
                    <NumberOfResults>${numberOfResults}</NumberOfResults>
                    <IncludePtModes>false</IncludePtModes>
                </Restrictions>
            </LocationInformationRequest>
        </RequestPayload>
    </ServiceRequest>
</Trias>`
}
