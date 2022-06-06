export const postTrasnference = async (newTrasnference) => {
  const request = await window.fetch(
    `${process.env.REACT_APP_URL_BACKEND}/transferencia?`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTrasnference),
    }
  )
  const data = await request.json()
  return { ...data }
}
