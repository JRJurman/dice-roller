const Tram = require('tram-one')
const header = require('./header')
const footer = require('./footer')

const html = Tram.html({
  header, footer
})

const styles = require('../styles')
const pageStyle = `
  html {
    height: 100%;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Comfortaa', sans-serif;
    background: ${styles.colors.pN};
    min-height: 100%;
    margin: 0;
    font-size: 1.25em;
    position: relative;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${styles.colors.sD};
  }
  input::-moz-placeholder { /* Firefox 19+ */
    color: ${styles.colors.sD};
  }
  input:-ms-input-placeholder { /* IE 10+ */
    color: ${styles.colors.sD};
  }
  input:-moz-placeholder { /* Firefox 18- */
    color: ${styles.colors.sD};
  }
`

const headerStyle = `
  background: ${styles.colors.pD};
  padding: ${styles.spacing.p1};
  margin-bottom: 0;
`

const contentStyle = `
  padding: ${styles.spacing.p1}
`

const footerStyle = `
  background: ${styles.colors.pD};
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0px;
  font-size: 0.75em;
`

module.exports = (attrs, children) => {
  return html`
    <html>
      <head>
        <meta name = "viewport" content = "initial-scale=1.0, maximum-scale=1, width=device-width" />
        <meta property="og:title" content="Dice Roller" />
        <meta property="og:url" content="http://dice-roller.com" />
        <meta property="og:image" content="http://dice-roller.com/preview.png" />
        <title>Dice Roller</title>
        <link rel="icon" type="image/png" href="/tram-car.png" />
        <link rel="stylesheet" href="http://d2v52k3cl9vedd.cloudfront.net/vhs/0.1.0/vhs.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa">
        <style>
          ${pageStyle}
        </style>
      </head>
      <body>
        <header style=${headerStyle}></header>
        <div style=${contentStyle}>
          ${children}
        </div>
        <footer style=${footerStyle}></footer>
      </body>
    </html>
  `
}
