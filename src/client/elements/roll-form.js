const Tram = require('tram-one')
const styles = require('../styles')
const html = Tram.html()

const inputStyle = `
  border: none;
  border-bottom: solid 2px ${styles.colors.sD};
  outline: 0;
  background: none;
  font-size: 1em;
  padding: 0.25em;
  margin-left: 0.25em;
  text-align: center;
`

const buttonStyle = `
  background: ${styles.colors.sN};
  border: 2px solid ${styles.colors.sD};
  border-radius: 1rem;
  font-size: 1em;
  padding: 0.25em 0.75em;
  cursor: pointer;
  outline: 0;
  margin: 0.75rem;
`

module.exports = (attrs, children) => {
  const onRoll = `
    // this is aweful, but required since we don't have Tram-One on the client
    // https://github.com/JRJurman/tram-one/issues/21
    const sides = event.currentTarget.previousElementSibling
    const dice = sides.previousElementSibling
    window.location.href = \`/\${dice.value}d\${sides.value}\`
  `
  return html`
    <div style=${attrs.style}>
      <input
        size=14
        value=${attrs.dice}
        style=${inputStyle}
        placeholder="Number of Dice"
        type="text"
      />

      <input
        size=14
        value=${attrs.sides}
        style=${inputStyle}
        placeholder="Sides on Dice"
        type="text"
      />

      <button onclick=${onRoll} style=${buttonStyle}>
        Roll
      </button>
    </div>
  `
}
