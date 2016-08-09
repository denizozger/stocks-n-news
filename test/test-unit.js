'use strict';

const 
	assert     = require('assert'),
  storyUtils = require('../app/story-utils');

describe('Unit Tests', function() {

  it('should analyse story sentiment', function() {
    assert.equal(storyUtils.foo(), 'bar');
  });
  
});