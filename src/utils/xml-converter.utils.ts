const convert = require('xml-js')
global.Buffer = global.Buffer || require('buffer').Buffer

export const xmlToJsonObject = (xmlString: string): any => {
  return JSON.parse(convert.xml2json(xmlString as string, { compact: true }))
}