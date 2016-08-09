'use strict';

const 
	assert     = require('assert'),
  storyUtils = require('../app/story-utils');

describe('Unit Tests', function() {

  it('should analyse story sentiment', function() {
		const positiveStory = 'grow gains happy healthy ʘ‿ʘ'
  	assert.equal(storyUtils.getSentimentOfStory({body: positiveStory}), 4);

  	const negativeStory = 'concerns decline disappointing (╯°□°）╯︵ ┻━┻'
    assert.equal(storyUtils.getSentimentOfStory({body: negativeStory}), -3);

  	const neutralStory = 'positive but disappointing, gains but decline ಠ_ಠ'
    assert.equal(storyUtils.getSentimentOfStory({body: neutralStory}), 0);
  });
  
});