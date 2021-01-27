/*
    Question 2
    Write a javascript program that will take 2 numbers from the HTML page and display them on the
    HTML page after the addition of those 2 numbers.
*/


// Q2.

// parseInt for converts the arguments into string

function calc(){
    var n1 = parseInt(document.getElementById('num1').value); //here we are getting the value of num1
    var n2 = parseInt(document.getElementById('num2').value);  //here we are getting the value of num2              
    document.getElementById('result').value = n1+n2; //addition here
}

