const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  return html`
    <h1 style=${attrs.style}>
      <a href="/">
        Dice Roller
      </a>
    </h1>
  `
}
