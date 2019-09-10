#!/usr/bin/env node

const assert = require("assert");

const path0Exports = require(`${__dirname}/../test/path0`);
const path1Exports = require(`${__dirname}/../test/path1`);

console.log("what's assert ???", assert);

console.log("path0 exports???", path0Exports);
console.log("path1 exports???", path1Exports);
