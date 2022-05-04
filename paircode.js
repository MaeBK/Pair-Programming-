// Question 1 --- Easy 
// Juan was Driver, Mae was Navigator

 const arr = [2, 4, 7, 11, 15, 16];
 const odds = [];
 const evens = []; 

 arr.forEach (number => {if (number % 2 !== 0){
     odds.push (number);
 }else {evens.push(number)};
 });

 console.log(odds);
 console.log(evens);





// Questions 2 -- Easy 
// Mae was Driver, Juan is Navigator 



var numArray= [1,2,3,4,5,6,7,8,9,10];
numArray = numArray.filter((number) => {
    for(var i = 2; i <= Math.sqrt(number); i++) {
        if(number % i==0)
        return false;
    }
    return true;
});
console.log(numArray);
var numArray= [10, 18, 19, 29, 33, 35, 47, 66, 83];
numArray = numArray.filter((number) => {
    for(var i = 2; i <= Math.sqrt(number); i++) {
        if(number % i==0)
        return false;
    }
    return true;
});
console.log(numArray);







// Question 3 ----- Medium 

function isVowel(x){
    if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U" ) {
        console.log("This is a vowel!");
    }else{
        console.log("This is not a vowel...");
        }
    // return console.log();
    }
    console.log(isVowel("B"));





// Question 4 ----- Medium 
// const a = "So dark the con of man";
// const b = "Madonna of the Rocks";

function checkStringAnagrams (a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if (len1 !== len2) {
        console.log('Invalid');
        return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if (str1 === str2) {
    console.log('True');
} else {
    console.log('False');
    }
}
checkStringAnagrams("sodarktheconofman", "madonnaoftherocks");

 function checkStringAnagrams (a, b) {
     let len1 = a.length; // remove and filter spaces
     let len2 = b.length;
      if (len1 !== len2) {
          console.log('Invalid');
          return
      }
     let str1 = a.split('').sort().join('');
     let str2 = b.split('').sort().join('');
     if (str1 === str2) {
     console.log('True');
 } else {
     console.log('False');
     }
 }
checkStringAnagrams("thingaregood", "dogseastants");
// string replace, split spaces, 

// Question 5 ---- Medium 

// gcd, use the forumla to find greatest common divisor between 2 numbers


function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  console.log(gcd_two_numbers(336, 360));
  console.log(gcd_two_numbers(78, 126));

  // Question 6 ---  Medium  
  // Driver - Juan , Navigator - Mae 

  let car = {
      make:  'Nissan',
      Model:  'Skyline',
      year:  1998, 
      milage:  2000,
      color:  'white',
  
      driveToWork ()  {
          return (`${this.milage} + 33 mi = new milage: ${this.milage + 33}`);
      },
     driveAroundTheWorld () {
         return (`${this.milage + 33} + 24000 mi = New Milage: ${this.milage + 33 + 24000}`);
     },
     runErrands () {
         return (`${this.milage + 24000} + 30 mi = New Milage ${this.milage + 26033 + 30}`);
     }
  }
  console.log(car.driveToWork());
  console.log(car.driveAroundTheWorld());
  console.log(car.runErrands());

  // Question 7 ---- Hard
  // Driver - Juan ,  Nav - Mae


function checkBrackets(str) {
    const map = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
    const closing = Object.values(map);
    const stack = [];
    for (let char of str) {
      if (map[char]) {
        stack.push(char);
      } else if (closing.includes(char) && char !== map[stack.pop()]) {
        return false;
      }
    }
    return !stack.length;
  }
  let str = '[Hello!}'
  console.log(checkBrackets(str));
