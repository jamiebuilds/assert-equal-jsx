var assert = require('assert');
var assertEqualJSX = require('./');
var React = require('react');

describe('assertEqualJSX', function() {
  it('should pass when jsx is equal', function() {
    assertEqualJSX(
      React.createElement('div'),
      React.createElement('div')
    );
  });

  it('should fail when jsx isnt equal', function() {
    assert.throws(function() {
      assertEqualJSX(
        React.createElement('div'),
        React.createElement('span')
      );
    });
  });
});
