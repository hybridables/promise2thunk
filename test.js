/*!
 * promise2thunk <https://github.com/tunnckoCore/promise2thunk>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var promise2thunk = require('./index')
var parseJson = require('then-parse-json')

test('promise2thunk:', function () {
  test('should throw Error if not a Promise given', function (done) {
    function fixture () {
      promise2thunk(12345)
    }

    test.throws(fixture, Error)
    test.throws(fixture, /promise2thunk expect a promise/)
    done()
  })
  test('should convert promise to thunk', function (done) {
    var promise = parseJson('{"foo":"bar"}')
    var thunk = promise2thunk(promise)

    thunk(function (err, res) {
      test.ifError(err)
      test.deepEqual(res, {foo: 'bar'})
      done()
    })
  })
  test('should handle errors', function (done) {
    var promise = parseJson('foo~bar~baz')
    var thunk = promise2thunk(promise)

    thunk(function (err, res) {
      test.ifError(!err)
      test.ok(!res)
      test.equal(err.message, 'Unexpected token o')
      done()
    })
  })
})
