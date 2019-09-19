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
		const lastChild = getLastChild(require.main);
		pathname = dirname(lastChild.filename);
	}

	return readdirSync(pathname)
		.filter(f => (f.endsWith(".js") || f.endsWith(".json")) && f !== "index.js")
		.reduce((prev, curr) => {
			var exportsKey = curr;
			const extExpr = /\.\w+$/;
			const exportsKeyAlreadyPresent = prev.hasOwnProperty(curr.replace(extExpr, ""));
			if (!exportsKeyAlreadyPresent) {
				exportsKey = curr.replace(/\.\w+$/, "");
			}

			return {
				...prev,
				[exportsKey]: require(`${pathname}/${curr}`),
			};
		}, {});
}

function getLastChild (__module) {
	if (!__module.children.length || __module.children.length === 1) {
		return __module;
	} else {
		const lastChild = __module.children[__module.children.length - 1];
		return getLastChild(lastChild);
	}
}
