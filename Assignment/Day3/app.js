/*
    Question 1
    What is the value of clothes[0] and why?
    const clothes = ['jacket', 't-shirt'];
    clothes.length = 0;
    console.log(clothes[0]);

    Question 2
    Write a Javascript program to find the sum of all elements of a given array?
*/

//Q1
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);

//Answer is undefined because we are getting the length which is equal to 0 after that we are printing first index of the clothes
//If we commenting clothes.length = 0 and print the same thing will get the first index which is jacket

//Q2
//Sum of all elements of an array

const arr = [1,2,3,4,5];
const sum = arr.reduce(function (a,b){
    return a + b;
},0);
console.log(sum);
//Output is 15 

