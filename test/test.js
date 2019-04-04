var assert = require('assert');
describe('T', function() {
    it('Inicialment currentWord val 0', function() {
        var t = require('../src/alltecniques');
        assert.equal(t.currentWord, 0);
    });
}
);

/*
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
*/