const Tram = require('tram-one')
const html = Tram.html()

const imgStyle = `
  width: 21px;
  margin-bottom: -2px;
`

module.exports = (attrs, children) => {
  return html`
    <footer style=${attrs.style}>
      Created by
      <a href="http://jrjurman.com/">Jesse Jurman</a>
      , Built with
      <a href="http://tram-one.io/">
        <img style=${imgStyle} src="/tram-car.png" />
        Tram-One
      </a>
      , Powered By
      <a href="http://random.org/">
        random.org
      </a>
    </footer>
  `
}
