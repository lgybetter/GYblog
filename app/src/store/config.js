export default {
  bbcloudUrl: 'http://test.bbcloud.com',
  options: {
    headers: {
      'Content-Type': 'application/json'
    }
  },
  tokenOptions: (token) => {
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  },
  baseUrl: '/api',
  authUrl: '/api/auth'
}
