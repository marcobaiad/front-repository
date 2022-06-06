export const getAccounts = async (userId, page) => {
  const params = new URLSearchParams({ userId })
  const request = await window.fetch(
    `${process.env.REACT_APP_URL_BACKEND}/cuentas?${params}&page=${page || 1}`
  )
  const data = await request.json()
  return { ...data }
}
