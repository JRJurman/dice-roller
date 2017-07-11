const Tram = require('tram-one')
const html = Tram.html({
  'page-wrapper': require('../elements/page')
})

module.exports = () => {
  return html`
    <page-wrapper>
      <h3>Error</h3>
      Sorry for the inconvience!
    </page-wrapper>
  `
}
