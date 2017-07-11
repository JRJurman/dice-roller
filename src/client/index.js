const Tram = require('tram-one')
const homePage = require('./pages/home')
const errorPage = require('./pages/error')
const rollsPage = require('./pages/rolls')

const app = new Tram({
  defaultRoute: '/'
})

app.addRoute('/', homePage)
app.addRoute('/rolls', rollsPage)
app.addRoute('/error', errorPage)

module.exports = app
