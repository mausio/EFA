import { selectFilteredStopEvents, selectStopEvents } from '../store/selectors/data.selectors'
import { useAppSelector, useAppThunkDispatch } from '../store/hooks'
import { useEffect } from 'react'
import { fetchStopEvents } from '../store/thunks/stop-event-request.thunk'
import { Bay, ContentContainer, ContentItem, Destination, Line, Origin, Time, Via } from '../styles/content.styles'
import { formatIsoDateStringToFormat } from '../utils/time-formatter.utils'

const ContentComponent = () => {
  const thunkDispatch = useAppThunkDispatch()
  const filteredStopEvents = useAppSelector(selectFilteredStopEvents)
  const stopEvents = useAppSelector(selectStopEvents)

  useEffect(() => {
    if (!stopEvents) {
      thunkDispatch(fetchStopEvents())
    }

  }, [])

  console.log(filteredStopEvents, stopEvents)

  return (
    <ContentContainer>
      {
        filteredStopEvents.filter((value, idx) => idx < 8).map((stopEvent) => {

          const ttpStart = formatIsoDateStringToFormat(
            stopEvent.stops && stopEvent.stops[0].departure?.timetableTime,
            { withTime: true },
          )
          const etaStart = formatIsoDateStringToFormat(
            stopEvent.stops && stopEvent.stops[0].departure?.estimatedTime,
            { withTime: true },
          )

          const time = etaStart ? (etaStart === ttpStart ? ttpStart : etaStart) : ttpStart
          const line = stopEvent.publishedLineName
          const origin = stopEvent.origin
          const via = stopEvent.stops?.filter((value, idx) => idx < 3 && idx > 0).map((stop) => stop.stopPointName).join(' - ')
          const destination = stopEvent.destination
          const bay = stopEvent.stops && stopEvent.stops[0].bay

          return (
            <ContentItem>
              <Time>
                {time}
              </Time>
              <Line>
                {line}
              </Line>
              <Origin>
                {origin}
              </Origin>
              <Via>
                {via}
              </Via>
              <Destination>
                {destination}
              </Destination>
              <Bay>
                {bay}
              </Bay>
            </ContentItem>
          )
        })
      }
    </ContentContainer>
  )
}

export default ContentComponent