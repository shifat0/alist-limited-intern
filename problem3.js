/* const isValid = function (s) {
  let output;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === "(" && s[j] === ")") output = true;
      else if (s[i] === "{" && s[j] === "}") output = true;
      else if (s[i] === "[" && s[j] === "]") output = true;
      else output = false;
    }
  }
  return output;
};
*/

const isValid = function (s) {
  const map = { "(": ")", "{": "}", "[": "]" };
  let stack = [];
  for (let c of s) {
    if (map[c]) stack.push(map[c]);
    else if (stack[stack.length - 1] === c) stack.pop();
    else return false;
  }
  return stack.length === 0 ? true : false;
};

// isValid("(}");
console.log(isValid(")"));
