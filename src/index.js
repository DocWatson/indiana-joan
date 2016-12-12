// require the tools
var postcss = require("postcss");
var cssNext = require("postcss-cssnext");
var rucksack = require("rucksack-css");
var lost = require("lost");

const plugin = postcss.plugin("indiana-joan", () => {
	const processor = postcss();

	// run each tool - perhaps make more dynamic?
	processor.use(cssNext);
	processor.use(rucksack);
	processor.use(lost);

	// return the processed CSS
	return processor;
});

module.exports = plugin;
