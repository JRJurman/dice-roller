const Tram = require('tram-one')
const html = Tram.html({
  'page-wrapper': require('../elements/page'),
  'roll-form': require('../elements/roll-form'),
  'roll': require('../elements/roll')
})

const gridStyle = `
  display: flex;
  flex-wrap: wrap;
`

const rollStyle = `
  margin: 1rem;
`

module.exports = (state) => {
  const rolls = (state.rolls || []).map((roll) => {
    return html`<roll value=${roll} style=${rollStyle}></roll>`
  })
  return html`
    <page-wrapper>
      <roll-form
        dice='${state.dice}'
        sides='${state.sides}'>
      </roll-form>
      <h3>Rolls</h3>
      <div style=${gridStyle}>
        ${rolls}
      </div>
    </page-wrapper>
  `
}
