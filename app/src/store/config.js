export default {
  options: {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  },
  commonUrl: `${process.env.API_ROOT}/api`,
  authUrl: `${process.env.API_ROOT}/api/auth`
}
