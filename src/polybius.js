// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let output = "";
    const polybiusSquare = {
      "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
      "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
      "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
      "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
      "v": "15", "w": "25", "x": "35", "y": "45", "z": "55",
    };

    if (!encode) {
      const emptyArr = [];
      const decodingArr = input.split(" ");
      if (decodingArr.join("").length % 2 == 1) return false;
      for (let i = 0; i < decodingArr.length; i++){
        let smlString = "";
        for (let number = 0; number < decodingArr[i].length/2; number++){
          let numCode = decodingArr[i].substr(2*number, 2);
          if (numCode === "42") {
            smlString += "(i/j)";
            numCode = null;
          }
          for (code in polybiusSquare){
            if (numCode === polybiusSquare[code]) {
              smlString += code;
            }
          }
        }
        emptyArr.push(smlString);
      }
      output = emptyArr.join(" ");
      return output;
    }
    //encoding
    for(let letter = 0; letter < input.length; letter++){
      if (input[letter] === " ") output += input[letter];
      for (entry in polybiusSquare){
        if (input[letter].toLowerCase() === entry) output += polybiusSquare[entry];
      }
    }
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
