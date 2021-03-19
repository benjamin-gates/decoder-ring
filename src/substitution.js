// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    for (let letter = 0; letter < alphabet.length; letter++){
      const nextAlpha = alphabet.substr(letter + 1);
      for (let nextLetter = 0; nextLetter < nextAlpha.length; nextLetter++){
        if (alphabet[letter] === nextAlpha[nextLetter]) return false;
      }
    }
    const correctAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let output = "";
    for (let inLetter = 0; inLetter < input.length; inLetter++) {
      const letterCheck = input[inLetter].toLowerCase();
      if (letterCheck === " "){
        output += " ";
      }
      for (let letter = 0; letter < alphabet.length; letter++){
        if (encode && letterCheck === correctAlphabet[letter]) output += alphabet[letter];
        else if (!encode && letterCheck === alphabet[letter]) output += correctAlphabet[letter];
      }
  }
  return output;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
