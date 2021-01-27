/*
    Question 1
    By how many ways we can access elements in the DOM and write about them in brief?
*/

//Q1
//Ans: We can access elements in DOM using 5 methods
/*
    * getElementById(): Easiest way to access an element by its DOM is by its unique ID by using method: document.getElementById();
    * getElementsByClassName(): Another way to access an element in DOM is by their class name. It is used to acess one or more elements
    * getElementsByTagName(): we can access mulitple elements on the page by their tagname by using one of the DOM Methods called as document.getElementByTagName();
    * querySelector(): its a CSS Selector like if you want to select a single element we will use querySelectorMethod, If we are selecting an id we have to use (#), if its a class we need to use (.)
    * querySelectorAll() : querySelectorAll is very similar to querySelector by we can select multiple element with this method after that we can access forEach method to apply given properties to the elements
 
    foreg:
 */


//changing properties using their ID
const demoById = document.getElementById('demoID');
demoById.style.color = 'red';

//changing color using their class name
const demoByClass = document.getElementsByClassName('demoClass');
console.log(demoByClass); 
demoByClass[0].style.color = 'purple';

//changing color using their tagnames
const demoByTag = document.getElementsByTagName('p');
console.log(demoByTag);
demoByTag[0].style.color = 'orange';

//using querySelector
const demoQuerySelector = document.querySelector('#query');
demoQuerySelector.style.backgroundColor = 'pink';

//using querySelectorAll
const demoQuerySelectorAll = document.querySelectorAll('.special');
demoQuerySelectorAll.forEach(function(item){
    item.style.backgroundColor = 'crimson';
});








