const findLongestWord = function(string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (let index = 0; index < words.length; index += 1) {
    if (longestWord.length < words[index].length) {
      //  fixed
      longestWord = words[index];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
