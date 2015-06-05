/*!
 * promise2thunk <https://github.com/tunnckoCore/promise2thunk>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isPromise = require('is-promise')

module.exports = function promise2thunk (promise) {
  if (!isPromise(promise)) {
    throw new Error('promise2thunk expect a promise')
  }

  return function (done) {
    promise.then(function (res) {
      done(null, res)
    }, done)
  }
}
