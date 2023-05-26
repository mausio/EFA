import moment from 'moment/moment'
import 'moment/locale/de'

export const formatIsoDateStringToFormat = (
  isoDateString: string | undefined,
  options?: {
    onlyHour?: boolean
    withDate?: boolean
    withTime?: boolean
    withSeconds?: boolean
    withAll?: boolean
  },
): string => {
  if (!isoDateString) {
    return ''
  }

  moment.locale('de')

  if (!options) {
    return moment(isoDateString).format()
  }

  if (options.onlyHour) {
    const date = moment(isoDateString).hour()
    return `${date}`
  }

  if (options.withDate) {
    return moment(isoDateString).format('L')
  }

  if (options.withTime) {
    return moment(isoDateString).format('LT')
  }

  if (options.withSeconds) {
    return moment(isoDateString).format('LTS')
  }

  if (options.withAll) {
    const weekDay = moment(isoDateString).format('dd')
    const date = moment(isoDateString).format('L')
    const time = moment(isoDateString).format('LTS')
    return `${weekDay},  ${date} ${time}`
  }

  return ''
}
