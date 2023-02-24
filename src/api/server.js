import pkg from 'json-server'

const server = pkg.create()
const router = pkg.router('./db.json')
const middlewares = pkg.defaults()

server.use(middlewares)
server.use(pkg.bodyParser)
server.use((req, res, next) => {
  // const token = localStorage.getItem('accessToken')
  console.log('****req****: ', req)
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // console.log('****res****: ', res)
  if (req) { // isAuthorized(req) add your authorization logic here
    console.log('****res****: ', res)
    next() // continue to JSON Server router
  } else {
    res.sendStatus(401)
  }
})
server.use(router)
server.listen(8080, () => {
  console.log('JSON Server is running')
})
