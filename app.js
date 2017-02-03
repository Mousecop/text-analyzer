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

function avgSentenceLength(str) {
  var sentenceArr = str.split(/[!?.]/);
  var sentenceLenArray = sentenceArr.map(function(sentence) {
    return sentence.length;
  });
  var sentenceArrSum = sentenceLenArray.reduce(function(a,b) {
    return a+b;
  }, 0);
  return (sentenceArrSum/sentenceArr.length).toFixed(2);
};

function eventHandlers(){
  $(".js-text").submit(function(event){
    var userText = $('#user-text').val();
    event.preventDefault();
    $('dl.hidden').removeClass('hidden');
    var wordArr = getWords(userText);
    var wc = wordCount(wordArr);
    var uwc = uniqueWordCount(wordArr);
    var awl = avgWordLength(wordArr);
    var asl = avgSentenceLength(userText);
    $('.wc').text(wc);
    $('.uwc').text(uwc);
    $('.awl').text(awl);
    $('.asl').text(asl);
  });
};

$(eventHandlers);
