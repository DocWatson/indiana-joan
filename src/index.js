// require the tools
postcss = require("postcss")
cssNext = require("postcss-cssnext")
rucksack = require("rucksack-css")
lost = require("lost")

const plugin = postcss.plugin("indiana-joan", (options) => {
  // right now this doesn't do anything
  // TODO: add the ability to configure the various tools using these options
  options = {
    console: console,
    features: {}
  }

  const processor = postcss()

  // run each tool - perhaps make more dynamic?
  processor.use(cssNext)
  processor.use(rucksack)
  processor.use(lost)

  // return the processed CSS
  return processor
})

module.exports = plugin
