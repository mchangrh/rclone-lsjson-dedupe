const input = require("./source.json")
// exceptions
const { exceptions } = require('./exceptions.json')
const exceptionSet = new Set(exceptions)

const noResArray = input
  .filter((file) => file.IsDir === false)
  .map((file) => file.Name.replace(/\(\d{3,4}p\)/, ''))

const duplicates = noResArray.filter((e, i, a) => a.indexOf(e) !== i)
// filter out exceptions
const toRemove = duplicates.filter(x => !exceptionSet.has(x))

console.log(toRemove)