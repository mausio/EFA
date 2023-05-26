export const shortenLocationRef = (locationRef: string | undefined) => {
  if (!locationRef) return

  const parts = locationRef.split(/[:]/)

  return `${parts[0]}:${parts[1]}:${parts[2]}`
}
