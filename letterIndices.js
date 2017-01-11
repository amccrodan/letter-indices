function letterIndices(inputString) {
  stringObj = {};

  for (var i = 0; i < inputString.length; i++) {
    var char = inputString.charAt(i);

    if (char === " ") {
      continue;
    }

    if (stringObj[char]) {
      stringObj[char].push(i);
    } else {
      stringObj[char] = [i];
    }
  }

  return stringObj;
}

console.log(letterIndices("This is a test"));