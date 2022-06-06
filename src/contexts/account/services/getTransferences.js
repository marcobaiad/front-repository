export const getTransferences = async (fromAccountId) => {
  const params = new URLSearchParams({ fromAccountId })
  const request = await window.fetch(
    `${process.env.REACT_APP_URL_BACKEND}/transferencias?${params}`
  )
  const data = await request.json()
  return { ...data }
}
