// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowel_count(str1) {
  //write your code here
  let vowelCount = 0;

  for (let i = 0; i < str1.length; i++) {
    if (
      str1[i] === "a" ||
      str1[i] === "e" ||
      str1[i] === "i" ||
      str1[i] === "o" ||
      str1[i] === "u"
    ) {
      vowelCount += 1;
    }
  }

  return vowelCount;
}
console.log(vowel_count("The quick brown fox"));
console.log(vowel_count("what i'm writing right now should be full of vowels"));

//2
// Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(l) {
  //write your code here
  let randomWord = "";
  let randomNum = 0;
  const sampleCharacter =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  console.log(randomNum);
  for (let i = 0; i < l; i++) {
    randomNum = Math.floor(Math.random() * sampleCharacter.length);
    randomWord += sampleCharacter[randomNum];
  }

  return randomWord;
}

console.log(makeid(10));

// 3
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function abc(n1, n2) {
  //write your code here
  return n1 + n2;
}

console.log(abc(2, 3));

// The following is the function that the abc function is going to be passed into
function muliplierOfFive(n3) {
  return 5 * n3;
}

console.log(muliplierOfFive(abc(2, 3)));
