const Tram = require('tram-one')
const html = Tram.html()

const styles = require('../styles')
const rollStyle = `
  line-height: 3em;
  min-width: 3em;
  padding: 0 0.25em;
  border: 2px solid ${styles.colors.sD};
  border-radius: 1rem;
  text-align: center;
`

module.exports = (attrs, children) => {
  return html`
    <div style='${attrs.style};${rollStyle}'>
      ${attrs.value}
    </div>
  `
}
