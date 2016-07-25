var chai = require('chai')

var assert = chai.assert
var expect = chai.expect

var latestTag = require('./')

describe('latestTag', function () {
  var stableTag = 'v1.0.0'
  it('should return the given tag: ' + stableTag, function () {
    return latestTag('mhkeller', 'stable-tag').then(tag => {
      expect(tag).to.equal(stableTag)
    })
  })
  it('should return the proper error for no tags', function () {
    var username = 'mhkeller'
    var repo = 'no-tags'
    var error = new Error('No tags found for ' + username + '/' + repo)
    return latestTag(username, repo).catch(err => {
      expect(err.name).to.equal(error.name)
      expect(err.message).to.equal(error.message)
    })
  })
})
