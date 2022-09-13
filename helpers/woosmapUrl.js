export function woosmapUrl () {
  function buildQueryString(params) {
    const queryStringParts = []

    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        queryStringParts.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        )
      }
    }

    return queryStringParts.join('&')
  }
  const url = 'https://api.woosmap.com/localities/autocomplete/'
  const args = {
    key: 'woos-81a699ca-5082-3ffd-9f54-a684a4b82853',
    types: 'postal_code',
    components: 'country:gb|country:je|country:im|country:gg'
  }
  const params = buildQueryString(args)
  return `${url}?${params}`
}
