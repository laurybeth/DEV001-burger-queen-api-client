/* eslint-disable prefer-promise-reject-errors */
export function httpRequest () {
  function customFetch (endPoint, options) {
    const defaultHeader = {
      accept: 'application/json'
    }
    const controller = new AbortController()
    options.signal = controller.signal
    options.method = options.method || 'GET'
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader
    options.body = JSON.stringify(options.body) || false
    if (!options.body) delete options.body

    setTimeout(() => controller.abort(), 3000)

    return fetch(endPoint, options)
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject({
            error: true,
            status: response.status || '00',
            message: response.statusText || 'Ups! Something happened'
          })
      )
      .cath((error) => error)
  }

  function get (url, options = {}) {
    return customFetch(url, options)
  }
  function post (url, options = {}) {
    options.method = 'POST'
    return customFetch(url, options)
  }
  function put (url, options = {}) {
    options.method = 'PUT'
    return customFetch(url, options)
  }
  function del (url, options = {}) {
    options.method = 'DELETE'
    return customFetch(url, options)
  }
  return { get, post, put, del }
}
