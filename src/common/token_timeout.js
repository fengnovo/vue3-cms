const TOKEN_TIME = 2 * 60 * 60 * 1000

export const tokenTimeStart = () => {
  localStorage.setItem('x-token-time', Date.now())
}
export const tokenIsTimeout = () => {
  const xTokenTime = localStorage.getItem('x-token-time') || 0
  console.log('xTokenTime====', xTokenTime)
  if (!xTokenTime) return true
  return Date.now() - Number(xTokenTime) > TOKEN_TIME
}
