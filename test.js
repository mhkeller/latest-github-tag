var assert = require('chai').assert

var latestTag = require('./')

describe('latestTag', function () {
  var stableTag = 'v1.0.0'
  it('should return the given tag: ' + stableTag, function () {
    latestTag('mhkeller', 'stable-tag').then(function (tag) {
      assert.equal(stableTag, tag)
    })
    .catch(function (err) {
      console.error(err)
    })
  })
  it('should return the proper error for no tags', function () {
    latestTag('mhkeller', 'stable-tag').then(function (tag) {
      console.log(tag)
    })
    .catch(function (err) {
      assert.equal(err, new Error('No tags found for ' + user + '/' + repo))
    })
  })
})
