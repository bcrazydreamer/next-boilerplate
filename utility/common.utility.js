"use strict";
const { to } = require('await-to-js');

/**
 * Async await wrapper for easy error handling
 */
module.exports.to = async (promise) => {
  var [e, r] = await to(promise);
  if (e) return [e];
  return [null, r];
};