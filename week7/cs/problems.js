const addToZero = (numbers) => {
  let checkForZero = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers.map((el) => {
      checkForZero.push(el + numbers[i]);
    });
  }
  if (checkForZero.includes(0)) {
    console.log(true);
  } else {
    console.log(false);
  }
};

addToZero([1, 2, 3, 5, -2]);

// O(n^2): not only are you mapping through each element, but youre then adding each element to each element

const uniqueChecker = (str) => {
  return new Set(str).size === str.length;
};

console.log(uniqueChecker("asdf"));

// O(n): the runtime is determined by the length of the string

const pangramChecker = (string) =>
  /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(
    string
  );

console.log(pangramChecker("The quick brown fox jumps over the lazy dog!"));

console.log(pangramChecker("adfadfa"));

// o(n):  the runtime is determined by the length of the string

const strLengthChecker = (str) => {
  let biggestWord = [0];
  let splitArr = str.map((el) => el.length);
  splitArr.forEach((el) => {
    if (el > biggestWord[0]) {
      biggestWord.splice(0, 1, el);
    }
  });
  console.log(biggestWord);
};
strLengthChecker(["hi", "hello", "abcdefghijklmnop"]);

// O(n^2): not only are you mapping through each element, but your then comparing each element in that array and replacing it on
