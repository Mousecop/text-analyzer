//need to find word Count in textarea
// Unique word Count
// Average word length
// Average sentence length
//Remove hidden class on <dl>


function getWords(str) {
  return str.toLowerCase().split(/[,\s\n\.""()?!';]/).filter(Boolean);
}

function wordCount(wordArr) {
  return wordArr.length;
}

function uniqueWordCount(wordArr) {
  var wordObj = {};
  wordArr.forEach(function(item) {
    if (wordObj[item]) {
      wordObj[item]++;
    } else {
      wordObj[item] = 1;
    }
  });
  return Object.keys(wordObj).length;
}

function avgWordLength(wordArr) {
  var lengthArray = wordArr.map(function(word) {
    return word.length;
  });
  var arraySum = lengthArray.reduce(function(a,b) {
    return a + b;
  }, 0);
  return (arraySum/lengthArray.length).toFixed(2);
}

var textArea = 'Game of as rest "time" eyes with of this it. Add was music merry any truth since going. Happiness she ham but instantly put departure propriety. She amiable all without say spirits shy clothes morning. Frankness! in extensive to belonging improving so certainty. Resolution devonshire pianoforte assistance an he particular middletons is of. Explain ten man uncivil engaged? conduct. (Am) likewise betrayed as, declared absolute do. Taste oh spoke about no solid of hills up shade. Occasion so bachelor humoured striking by attended doubtful be it. ';

//console.log(wordCount(textArea));




$(function eventHandlers (){
  var wordArr = getWords(textArea);
  var wc = wordCount(wordArr);
  var uwc = uniqueWordCount(wordArr);
  var awl = avgWordLength(wordArr);
  $('dl.hidden').removeClass('hidden');
  $('.wc').text(wc);
  $('.uwc').text(uwc);
  $('.awl').text(awl);
});
