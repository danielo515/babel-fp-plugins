'use strict';

const concat = _it => {
  return a => _it + a;
};

const parseIntD = (_arg) => {
  return parseInt(_arg, 10);
}; // const sumString = parseInt(_,16) | add (1)
// const tenPlusString =
//   it
//   |> parseInt(_, 10)
//   |> concat (10) 
//   |> String


const tenPlusString2 = (_it2, _arg2) => {
  return String(parseInt(_arg2, 10)(concat(10)(_it2)));
}; // sumString('11') | console.log
// In a file called index.js


console.log(() => add(1, 2)); // -> 3