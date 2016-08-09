'use strict';

const
	positiveWords = ['positive', 'success', 'grow', 'gains', 'happy', 'healthy'],
	negativeWords = ['disappointing', 'concerns', 'decline', 'drag', 'slump', 'feared'];

exports.getSentimentOfStory =  story => {
	let wordsInStory = removePunctiationAndWhitespace(story.body).split(' ');
	return getPositiveWordCount(wordsInStory) - getNegativeWordCount(wordsInStory);
}

function getPositiveWordCount(words) {
	return getNumberOfCommonElementsOfArrays(words, positiveWords);
}

function getNegativeWordCount(words) {
	return getNumberOfCommonElementsOfArrays(words, negativeWords);
}

function getNumberOfCommonElementsOfArrays(array1, array2) {
	return array1
		.filter(el => array2.indexOf(el) !== -1)
		.length;
}

function removePunctiationAndWhitespace(s) {
	return s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
		.replace(/\s{2,}/g," ");
}