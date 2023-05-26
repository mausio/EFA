import React, { useEffect, useState } from 'react'
import { Header, HeaderItem } from '../styles/header.styles'
import { formatIsoDateStringToFormat } from '../utils/time-formatter.utils'
import { useAppSelector } from '../store/hooks'
import { selectDestinationLocation, selectOriginLocation } from '../store/selectors/config.selector'

const HeaderComponent = () => {
  const [time, setTime] = useState<Date>(new Date())
  const destination = useAppSelector(selectDestinationLocation)
  const origin = useAppSelector(selectOriginLocation)

  const noneSelected = 'none selected'

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })


  return (
    <Header>
      <HeaderItem>{origin?.locationName ? origin?.label : noneSelected}</HeaderItem>
      <HeaderItem>{destination?.locationName ? destination?.label : noneSelected}</HeaderItem>
      <HeaderItem>{formatIsoDateStringToFormat(time.toISOString(), { withSeconds: true })}</HeaderItem>
    </Header>
  )
}

export default HeaderComponent