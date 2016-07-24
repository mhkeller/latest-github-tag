Latest GitHub Tag
===

> Fetch the latest tag name from a GitHub repo (promise-based)

[![Build Status](https://secure.travis-ci.org/mhkeller/latest-github-tag.png?branch=master&style=flat-square)](http://travis-ci.org/mhkeller/latest-github-tag) [![NPM version](https://badge.fury.io/js/latest-github-tag.png?style=flat)](http://badge.fury.io/js/latest-github-tag)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```js
latestTag('mhkeller', 'stable-tag').then(function (tag) {
  console.log(tag) // Outputs v1.0.0
})
.catch(function (err) {
  console.error(err)
})
```

Resolves to an error if a package has no tags.

## Options

You can pass an options object as an optional third argument. It can take the two keys:

* `auth` — An authentication object that will be passed to the GitHub module's [`authenticate`](https://github.com/mikedeboer/node-github#authentication) method.
* `timeout` — A value, in milliseconds, to wait for this call to be made. Defaults to `5000`.

```js
latestTag('mhkeller', 'secret-repo', {
  timeout: 0,
  auth: {
    type: 'oauth', // See https://github.com/mikedeboer/node-github#authentication for other types
    token: 'your-access-token'
  }
}).then(function (tag) {
  console.log(tag) // Outputs the latest tag
})
.catch(function (err) {
  console.error(err)
})
```

## License

MIT