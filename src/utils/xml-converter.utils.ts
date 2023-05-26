const convert = require('xml-js') //TODO: yarn add xml-js
global.Buffer = global.Buffer || require('buffer').Buffer //For external Bugfix, TODO Install "buffer"

export const xmlToJsonObject = (xmlString: string): any => {
  return JSON.parse(convert.xml2json(xmlString as string, { compact: true }))
}