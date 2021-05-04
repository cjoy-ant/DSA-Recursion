// 1. Counting Sheep

const countSheep = function(numSheep) {
  if (numSheep === 0) {
    return "All sheep jumped over the fence"
  } else {
    console.log(numSheep + ": Another sheep jumped over the fence")
    return countSheep(numSheep - 1)
  }
}

let numSheep = 3;
console.log(countSheep(numSheep))

// 2. Power Calculator

const powerCalculator = (base, exponent) => {
  if (exponent < 0) {
    return "exponent should be >= 0"
  }
  if (exponent === 0) {
    return 1
  }
  return base * powerCalculator(base, exponent - 1)
}

let base = 10;
let exponent = 2;
console.log(powerCalculator(base, exponent))

// 3. Reverse String

const reverseString = (string) => {
  if (string === "") {
    return ""
  }
  return reverseString(string.substr(1)) + string.charAt(0)
}

let string = "Hello world!"
console.log(reverseString(string))

// 4. nth Triangular Number

const triangularNum = (num) => {
  if (num === 0) {
    return 0
  } 
  return num + triangularNum(num-1)
}

let num = 4
console.log(triangularNum(num))

// 5. String Splitter

const stringSplitter = (string, slash) => {
  if (string.indexOf(slash) === -1) {
    return [string.slice(0, string.length)]
  } 
  return [string.slice(0, string.indexOf(slash)), ...stringSplitter(string.slice(string.indexOf(slash) + 1), slash)]
}

let string = "02/20/2020"
console.log(stringSplitter(string, '/')) // ["02", "20", "2020"]

// 6. Fibonacci

const Fibonacci = (num) => {
  if (num <= 0) {
    return "num should be > 0"
  }
  if (num === 1) {
    return 1
  } if (num === 2) {
    return 1
  }
  return Fibonacci(num-1) + Fibonacci(num-2)
}

let num = 8
console.log(Fibonacci(num))

// 7. Factorial

const factorial = (num) => {
  if (num === 0) {
    return 0
  } if (num === 1) {
    return 1
  }
    return num * factorial(num-1)
}

let num = 5
console.log(factorial(num))

// 8. Find a way out of the maze

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// 9. Find ALL the ways out of the maze

// 10. Anagrams

const anagrams = (string) => {
  if (string === "") {
    return "string cannot be empty"
  } 
  if (string.length === 1) {
    return [string]
  }
  let anagramsArray = []
  let stringArray = string.split("")
  for (let i=0; i < stringArray.length; i++) {
    let results = anagrams(spliceString(stringArray, i).join(''))
    for (let j=0; j < results.length; j++) {
      anagramsArray.push(stringArray[i] + results[j])
    }
  }
  return anagramsArray
}

const spliceString = (string, index) => {
  let result = [...string]
  result.splice(index, 1)
  return result
}

let string = "tea"
console.log(anagrams(string))

// 11. Organization Chart

const input = {
  Zuckerberg: 
  {
    Schroepfer:
    {
      Bosworth:
      {
        Steve,
        Kyle,
        Andra
      },
      Zhao:
      {
        Richi,
        Sofia,
        Jen
      }
    },
    Schrage:
    {
      VanDyck:
      {
        Sabri,
        Miche,
        Josh
      },
      Swain:
      {
        Blanc,
        Tom,
        Joe
      }
    },
    Sandberg:
    {
      Goler:
      {
        Eddie,
        Julie,
        Annie
      },
      Hernandez:
      {
        Rowi,
        Inga,
        Morga
      },
      Moissinac:
      {
        Amy,
        Chuck,
        Vinni
      },
      Kelley:
      {
        Eric,
        Ana,
        Wes
      }
    }
  }
}

// 12. Binary representation

const binary = (num) => {
  if (num === 0) {
    return 0
  }
  let divByTwo = Math.floor(num/2)
  let remainder = num % 2
  if (divByTwo === 0) {
    return remainder
  }
  return binary(divByTwo) + remainder.toString()
}

let num = 12
console.log(binary(num))