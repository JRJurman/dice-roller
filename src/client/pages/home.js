const Tram = require('tram-one')
const html = Tram.html({
  'roll-form': require('../elements/roll-form'),
  'page-wrapper': require('../elements/page')
})

module.exports = (state) => {
  return html`
    <page-wrapper>
      <roll-form
        dice=''
        sides=''>
      </roll-form>
    </page-wrapper>
  `
}
