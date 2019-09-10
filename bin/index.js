#!/usr/bin/env node

const { readdirSync } = require("fs");
const { dirname } = require("path");

const defaultPath = dirname(module.parent.filename);

/**
 *
 * @example
   module.exports = {
     "authorization": require("./authorization")
   }
 *
 */

module.exports = exportDir;

function exportDir (pathname = defaultPath) {
	return readdirSync(pathname)
		.filter(f => (f.endsWith(".js") || f.endsWith(".json")) && f !== "index.js")
		.reduce((prev, curr) => {
			return {
				...prev,
				[curr.replace(/\.\w+$/, "")]: require(`${pathname}/${curr}`),
			};
		}, {});
}
