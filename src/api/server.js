import pkg from 'json-server'

const server = pkg.create()
const router = pkg.router('./db.json')
const middlewares = pkg.defaults()

server.use(middlewares)
server.use((req, res, next) => {
  const token = localStorage.getItem('accessToken')
  if (token) { // isAuthorized(req) add your authorization logic here
    next() // continue to JSON Server router
  } else {
    res.sendStatus(401)
  }
})
server.use(router)
server.listen(8080, () => {
  console.log('JSON Server is running')
})
