
//Questão 1
const palavra1 = "arara";
const palavra2 = "desenvolvimento";

function verifyPalindrome(word) {
    const cleanedWord = word.toLowerCase().replace(/\s/g, '');
    return cleanedWord === cleanedWord.split('').reverse().join('');
  }
  
  console.log("Questão 1");
  console.log(verifyPalindrome(palavra1)); 
  console.log(verifyPalindrome(palavra2)); 
  console.log("Fim da questão 1!");


  //Questão 2
  const arr1 = [2, 3, 6, 7, 10, 1];
  const arr2 = [9, 1, 3, 5, 7];
  const arr3 = [-9, -1, -3, -5, -7];
  function getHighestIndex(arr) {
    if (!arr || arr.length === 0) {
      return -1;
    }
  
    let highestIndex = 0;
    let highestValue = arr[0];
  
    for (let index = 1; index < arr.length; index++) {
      if (arr[index] > highestValue) {
        highestValue = arr[index];
        highestIndex = index;
      }
    }
  
    return highestIndex;
  }
  
  console.log("Questão 2");
  console.log("Índice do maior número no arr1:", getHighestIndex(arr1)); 
  console.log("Índice do maior número no arr2:", getHighestIndex(arr2)); 
  console.log("Índice do maior número no arr3:", getHighestIndex(arr3)); 
  console.log("Fim da questão 2!");

  //Questão 3
  const arra1 = [2, 3, 6, 7, 10, 1];
  const arra2 = [2, 4, 6, 7, 10, 0, -3];

  function getSmallestIndex(arra) {
  if (!arra || arra.length === 0) {
    return -1;
  }

  let smallestIndex = 0;
  let smallestValue = arra[0];

  for (let index = 1; index < arra.length; index++) {
    if (arra[index] < smallestValue) {
      smallestValue = arra[index];
      smallestIndex = index;
    }
  }
  return smallestIndex;
}
console.log("Questão 3");
console.log("Índice do menor número no arr1:", getSmallestIndex(arra1)); 
console.log("Índice do menor número no arr2:", getSmallestIndex(arra2));
console.log("Fim da questão 3!");

//Questão 4
const words1 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
const words2 = ['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix'];

function getLongestWord(words) {
    if (!words || words.length === 0) {
      return null;
    }
  
    let longestWord = words[0];
  
    for (let index = 1; index < words.length; index++) {
      if (words[index].length > longestWord.length) {
        longestWord = words[index];
      }
    }
  
    return longestWord;
  }
  console.log("Questão 4");
  console.log("Palavra mais longa em words1:", getLongestWord(words1));
  console.log("Palavra mais longa em words2:", getLongestWord(words2)); 
  console.log("Fim da questão 4!");
  
 //Questão 5
 const numbers1 = [9, 1, 2, 3, 9, 5, 7];
 const numbers2 = [0, 4, 4, 4, 9, 2, 1];
 const numbers3 = [0, 0, 0];

 function countHighestNumberMaxOccurrences(numbers) {
    if (!numbers || numbers.length === 0) {
      return 0;
    }
  
    let highestNumber = numbers[0];
    let occurrences = 1;
  
    for (let index = 1; index < numbers.length; index++) {
      if (numbers[index] > highestNumber) {
        highestNumber = numbers[index];
        occurrences = 1;
      } else if (numbers[index] === highestNumber) {
        occurrences++;
      }
    }
  
    return occurrences;
  }
  
  console.log("Questão 5");
  console.log("Quantidade de vezes que o maior número se repete em numbers1:", countHighestNumberMaxOccurrences(numbers1)); 
  console.log("Quantidade de vezes que o maior número se repete em numbers2:", countHighestNumberMaxOccurrences(numbers2)); 
  console.log("Quantidade de vezes que o maior número se repete em numbers3:", countHighestNumberMaxOccurrences(numbers3));  
  console.log("Fim da questão 5!");