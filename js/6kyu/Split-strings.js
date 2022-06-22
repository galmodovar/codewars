/* 
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should 
replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str){
    let newArr = []
    if (str.length % 2 === 0) {
      for (let i = 0; i < str.length; i+=2) {
     newArr.push([str[i] , str[i+1]].join(''))
    }} else {
      for (let i = 0; i < str.length; i+=2) {
        if ((i) !== str.length-1) {
          newArr.push([str[i] , str[i+1]].join(''))      
        } else {
          newArr.push([str[i], '_'].join(''))
        }
    }}
    return newArr
  }