const fetch = require('node-fetch')

module.exports = (n, max) => {
  const randomBody = JSON.stringify({
    jsonrpc: '2.0',
    method: 'generateIntegers',
    params: {
      apiKey: '03d8568f-221f-48c5-ac81-95b841f32a9d',
      n: n,
      min: 1,
      max: max
    },
    id: 14875
  })
  return fetch('https://api.random.org/json-rpc/1/invoke', {
    method: 'POST', body: randomBody
  }).then((res) => {
    return res.json()
  }).then((response) => {
    if (response.error) {
      const details = `n: ${n}, min: ${1}, max: ${max}`
      throw new Error(`code ${response.error.code}; ${response.error.message}; ${details}`)
    }
    return response.result.random.data
  })
}
