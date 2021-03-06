/* Font detection */
let fontCache
export default function fontsInfo (customFonts) {
  if (fontCache !== undefined) {
    return fontCache
  }

  let fonts = [
    'Arial', 'Times New Roman', 'Helvetica', 'Open Sans',
    'Source Sans Pro', 'Comic Sans MS', 'Century', 'Century Gothic',
    'Monaco', 'Lato', 'Geneva', 'Futura',
    'Fantasque Sans Mono', 'Courier', 'Courier New', 'Corsiva Hebrew',
    'Comic Neue', 'Cambria', 'Calibri', 'TI-Nspire',
    'Adobe Braille', 'Adobe Hebrew', 'Apple LiGothic', 'Apple Farben-Emoji',
    'Avenir', 'Avenir Next', 'Batang', 'Bell MT', 'Birch Std',
    'Damascus', 'Microsoft Sans Serif', 'Minion Pro', 'Times',
    'Roboto', 'Oswald', 'Droid Sans', 'Droid Serif',
    'Roboto Condensed', 'Ubuntu', 'Raleway', 'Lobster',
    'Ubuntu Condensed', 'Helvetica Neue'
  ]

  if (typeof customFonts !== 'undefined') {
    fonts = customFonts
  }

  var STRING = 'wwzrllTNMLllllliiimmqßmmmmiiill❗️🔻llplö😄©_~ñ'

  // Set up default font information
  var defaults = [
    {name: 'serif'},
    {name: 'sans-serif'},
    {name: 'monospace'}
  ]

  var span = document.createElement('span')
  span.innerHTML = STRING
  span.style.fontSize = '86px'

  defaults.forEach(function (font) {
    span.style.fontFamily = font.name
    document.body.appendChild(span)
    font.width = span.offsetWidth
    font.height = span.offsetHeight
    document.body.removeChild(span)
  })
  // Search for fonts
  var foundFonts = []

  fonts.forEach(function (font) {
    var found = false

    defaults.forEach(function (defaultFont) {
      span.style.fontFamily = font + ',' + defaultFont.name
      document.body.appendChild(span)
      if (span.offsetWidth !== defaultFont.width || span.offsetHeight !== defaultFont.height) {
        found = true
      }
      document.body.removeChild(span)
    })

    if (found) {
      foundFonts.push(font)
    }
  })

  fontCache = foundFonts.sort()
  return fontCache
}
/*
function matchFonts (fonts) {
  var foundFonts = fontsInfo()
  var doNotMatch = false
  fonts.forEach(function (font) {
    if (foundFonts.indexOf(font) === -1) {
      doNotMatch = true
    }
  })
  return !doNotMatch
}
*/
