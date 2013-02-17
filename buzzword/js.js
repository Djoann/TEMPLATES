var $word;
var $speed;
var $wordCount;

function go() {
  $word = document.getElementById('word');
  $speed = document.getElementById('speed');
  $wordCount = document.getElementById('wordCount');
  var words = document.getElementById('text').innerHTML.split(/\s/);
  if(words.length > 0 && words[0]) {
    showWord(words, 0);
  } else {
    $word.innerHTML = '<i>No text</i>';
  }
}

function getWords(words, startIndex, endIndex) {
  var s = '';
  for (var i=startIndex; i<=endIndex; i++) {
    if (words[i] !== undefined) {
     s += words[i] + ' '; 
    }    
  }
  
  return s;
}

function showWord(words, index) {
  if(words[index] !== undefined) {
    var lastIndex = Number($wordCount.value) + index -1;
    $word.innerHTML = getWords(words, index, lastIndex);
    setTimeout(function() {
      showWord(words, lastIndex+1);
    }, 3000/($speed.value*2));
  }
}

document.addEventListener('DOMContentLoaded', function() {
  go();
});