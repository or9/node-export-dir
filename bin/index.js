#!/usr/bin/env node

const { readdirSync } = require("fs");
const { dirname } = require("path");

/**
 *
 * @example
   module.exports = {
     "authorization": require("./authorization")
   }
 *
 */

module.exports = exportDir;

function exportDir (pathname = "") {
	if (!pathname) {
		const reqChildren = require.main.children;
		const idx = reqChildren.length - 1;
		pathname = dirname(reqChildren[idx].filename);
	}

	return readdirSync(pathname)
		.filter(f => (f.endsWith(".js") || f.endsWith(".json")) && f !== "index.js")
		.reduce((prev, curr) => {
			return {
				...prev,
				[curr.replace(/\.\w+$/, "")]: require(`${pathname}/${curr}`),
			};
		}, {});
}
