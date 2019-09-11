#!/usr/bin/env node

const assert = require("assert");
const { green, reset } = require("../util/color");

const actualPath0Exports = require(`${__dirname}/../test/path0`);
const actualPath1Exports = require(`${__dirname}/../test/path1`);
const actualPath2Exports = require(`${__dirname}/../test/path2`);
const actualPath3Exports = require(`${__dirname}/../test/path3`);

const expectedPath0Exports = {
	p0file0: require("../test/path0/p0file0"),
	p0file1: require("../test/path0/p0file1.json"),
	p0file2: require("../test/path0/p0file2.json"),
	p0file3: require("../test/path0/p0file3"),
};

const expectedPath1Exports = {
	p1file0: require("../test/path1/p1file0")
};

const expectedPath3Exports = {
	p3file0: require("../test/path3/p3file0"),
	"p3file0.json": require("../test/path3/p3file0.json"),
	p3file1: require("../test/path3/p3file1.js"),
	"p3file1.json": require("../test/path3/p3file1.json"),
};

assert.deepStrictEqual(actualPath0Exports, expectedPath0Exports, "Should export the same object including all required data structures");

assert.deepStrictEqual(actualPath1Exports, expectedPath1Exports, "Should export the same object as when explicitly required, excluding any non .{js,json} files");

assert.deepStrictEqual(actualPath2Exports, expectedPath0Exports, "Should accept a pathname which allows exporting the contents of a different directory.  ¯\_(ツ)_/¯");

assert.deepStrictEqual(actualPath3Exports, expectedPath3Exports, "Should use extension if key already exists in exported object");

console.info(`${green}OK${reset}`);
