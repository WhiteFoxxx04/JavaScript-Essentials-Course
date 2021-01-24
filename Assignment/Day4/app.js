/*
    Question 1
            Write a JavaScript program to display the reading status (i.e. display book name, author name,
            and reading status) of the following books.

    Question 2
        Write a javascript program that generates an alert "Not legal age to drive" if the driver age is
        below 18 years old, if driver age is greater than or equal to 18, it generates an alert "Drive safe".
*/

//Q1
//The below code will the give you the output
const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

for(let i = 0; i < library.length; i++){
    const book = `${library[i].title} by ${library[i].author}`;
    if(library[i].readingStatus){
        console.log(`Already read ${book}`);
    }
    else{
        console.log(`You still need to read the ${book}`);
    }
}

//Q2
//the below output  will give the alert for legal age to drive 
const age = 18;
if (age < 18) {
    console.log(alert('Not a legal age to drive'));     
}
else{
    console.log(alert('Drive safe'));
}


