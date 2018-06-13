'use strict';
import { _, it } from 'param.macro'
const concat = a => it + a

const parseIntD = parseInt(_,10)

// const sumString = parseInt(_,16) | add (1)

// const tenPlusString =
//   it
//   |> parseInt(_, 10)
//   |> concat (10) 
//   |> String

const tenPlusString2 = 
  it
  | concat (10)
  | (parseInt(_, 10))
  | String



// sumString('11') | console.log

// In a file called index.js

console.log(~add(1, 2)) // -> 3
