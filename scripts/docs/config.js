/**
  Constants used for doc processing scripts
*/
var path = require('path')

module.exports = {
  slsPath: path.join(__dirname, '..', '..', 'node_modules/serverless'),
  newDocsPath: path.join(__dirname, '..', '..', 'content/'),
  oldDocsPath: path.join(__dirname, '..', '..', 'content/'),
  docsMenuPath: path.join(__dirname, '..', '..', 'src/layouts/Doc/'),
  downloadLink: 'https://github.com/serverless/serverless/archive/master/.zip'
}
