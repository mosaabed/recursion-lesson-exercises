/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(num) {
  if (num == 1){
    return 1
  }
  return num * findFactorial(num-1)
  //Your code here

}

//Exercise 2
const reverseString = function(str , n , tempstr) {
  if(n==0){
    return tempstr
  }
  return reverseString(str ,n-1 , tempstr+str[n-1] )
  //Your code here

}

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(lst1 , lst2) {
  if(lst1.length == 0){
    return
  }
  lst2.push(lst1.splice(0,1)[0])
  return swap(lst1 , lst2)
  //Your code here

}


// console.log(findFactorial(5))
// console.log(reverseString('reverseString' , 'reverseString'.length ,''))
// swap(arr1, arr2)
// console.log(arr1) //[]
// console.log(arr2) //[1, 2, 3]

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }