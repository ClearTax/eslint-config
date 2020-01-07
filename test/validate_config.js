const tap = require("tap");
const config = require("..");

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

tap.ok(config);
tap.ok(isObject(config.parserOptions));
tap.ok(isObject(config.plugins));
tap.ok(isObject(config.extends));
tap.ok(isObject(config.rules));
