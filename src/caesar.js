// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let output = "";
    
    if (!encode) shift = -shift;

    for (let letter = 0; letter < input.length; letter++){
      const startlength = output.length;
      //if (input[letter] === " ") output += input[letter];
      for (let alphaletter = 0; alphaletter < alphabet.length; alphaletter++){
        if (input[letter].toLowerCase()===alphabet[alphaletter]){
          if(alphaletter + shift > alphabet.length - 1){
            output += alphabet[alphaletter + shift - alphabet.length];
          } else if (alphaletter + shift < 0) {
            output += alphabet[alphabet.length + alphaletter + shift];
          }
          else output += alphabet[alphaletter + shift];
        }
        //else output += input[letter];
      }
      if (output.length === startlength) output += input[letter];
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;