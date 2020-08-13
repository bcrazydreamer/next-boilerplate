"use strict";
const _ = require('lodash');

/**
 * @param rq - request
 * @param rs - response
 * @param ro - nextjs route
 * @param qu - url query param
 */
module.exports.render = function (rq, rs, ro, qu) {
  var p = _.isPlainObject(rq.params) ? rq.params : {};
  var q = _.isPlainObject(qu) ? qu : {};
  var qo = { ...p, ...q };
  if (_.isString(ro) && (ro[0] !== "/")) ro = "/" + ro;
  return rs.next.render(rq, rs, ro, { ...rq.query, ...qo });
};