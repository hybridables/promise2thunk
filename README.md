# promise2thunk [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Convert (transform) promise to thunk, just like was in co@3

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i promise2thunk --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var promise2thunk = require('promise2thunk')
var parseJson = require('then-parse-json')

var promise = parseJson('{"foo":"bar"}')
var thunk = promise2thunk(promise)

thunk(function (err, res) {
  console.log(err) //=> null
  console.log(res) //=> { foo: 'bar' }
})
```


## Related
- [always-promise](https://github.com/tunnckocore/always-promise): Create Bluebird Promise from given async or synchronous function. It automatically convert sync functions to async, then to promise.
- [always-callback](https://github.com/tunnckocore/always-callback#readme): Create callback api for given sync function. Guarantee that given function (sync or async, no matter) will always have callback api and will handle errors correctly.
- [make-callback](https://github.com/tunnckocore/make-callback): Make synchronous function to support callback api
- [handle-callback](https://github.com/hybridables/handle-callback): Initial step for creating hybrid APIs, used by `hybridify`. Handle callback in promise - give promise and callback return promise.
- [handle-arguments](https://github.com/hybridables/handle-arguments): Handles given Arguments object - return separatly last argument (commonly callback) and other arguments as Array. Useful in node-style callback flow.
- [manage-arguments](https://github.com/tunnckocore/manage-arguments): Prevents arguments leakage - managing arguments. From Optimization killers by Petka Antonov.
- [is-async-function](https://github.com/tunnckocore/is-async-function): Check that given function is async (callback) function or not. Trying to guess that based on check if `callback` or `cb` exists in function arguments.
- [is-es6-generators](https://github.com/tunnckocore/is-es6-generators): Check whether a value is a `Generator` or `GeneratorFunction`. The `co` way, more strict checking. Always return boolean true or false, never null or undefined.


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/promise2thunk/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/promise2thunk
[npmjs-img]: https://img.shields.io/npm/v/promise2thunk.svg?label=promise2thunk

[license-url]: https://github.com/tunnckoCore/promise2thunk/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/promise2thunk
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/promise2thunk.svg

[travis-url]: https://travis-ci.org/tunnckoCore/promise2thunk
[travis-img]: https://img.shields.io/travis/tunnckoCore/promise2thunk.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/promise2thunk
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/promise2thunk.svg

[david-url]: https://david-dm.org/tunnckoCore/promise2thunk
[david-img]: https://img.shields.io/david/tunnckoCore/promise2thunk.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
