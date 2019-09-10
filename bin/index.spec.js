#!/usr/bin/env node

const assert = require("assert");
const { green, reset } = require("../util/color");

const actualPath0Exports = require(`${__dirname}/../test/path0`);
const actualPath1Exports = require(`${__dirname}/../test/path1`);
const actualPath2Exports = require(`${__dirname}/../test/path2`);

const expectedPath0Exports = {
	p0file0: require("../test/path0/p0file0"),
	p0file1: require("../test/path0/p0file1.json"),
	p0file2: require("../test/path0/p0file2.json"),
	p0file3: require("../test/path0/p0file3"),
};

const expectedPath1Exports = {
	p1file0: require("../test/path1/p1file0")
};

assert.deepStrictEqual(actualPath0Exports, expectedPath0Exports, "Should export the same object including all required data structures");

assert.deepStrictEqual(actualPath1Exports, expectedPath1Exports, "Should export the same object as when explicitly required, excluding any non .{js,json} files");

assert.deepStrictEqual(actualPath2Exports, expectedPath0Exports, "Should accept a pathname which allows exporting the contents of a different directory.  ¯\_(ツ)_/¯");

console.info(`${green}OK${reset}`);
