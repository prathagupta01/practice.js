const display = document.getElementById("display");
const addbook = document.getElementById("addbookbutton")
const dialog = document.querySelector("dialog");
const form = document.getElementById("form");
const select = document.getElementById("haveread")
const submit = document.getElementById("submit")
const liberary = [
    {
        id : "3534nrftruytfng@Q%^^ttfhg",
        name: "random book",
        author: "random person",
        page:"15",
        read : "yea"
    }
];

function Book(name, author,page, read){
    console.log("inside the consturctor function")
    this.id =  crypto.randomUUID()
    this.name = name;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addbooktoliberary(name, author,page, read){
    console.log("inside the addbooktoliberary function");
    const book = new Book(name,author,page,read)
    console.log("made the book using t he constructor")
    liberary.push(book);
    console.log("added in the array")
    createBookCard(book);
}


addbook.addEventListener('click', (e) =>{
    dialog.showModal();
})

form.addEventListener('submit', (event) =>{
    event.preventDefault();
        console.log("inside the add eventlistener functiion");
        const title = event.target.name.value ;
        const author = event.target.author.value;
        const page = event.target.page.value 
        const read = select.value;
      addbooktoliberary(title,author,page,read);
        console.log("addbooktolibeary function executed")
        event.target.reset();
       dialog.close();
});
  
function createBookCard(book) {

  const div = document.createElement('div');
  div.dataset.id  = book.id 
  div.classList.add("madediv");

  const h3 = document.createElement("h3");
  h3.textContent = "Your Book";
  h3.style.textAlign = 'center';

  const nameP = document.createElement('p');
  nameP.textContent = `Title: ${book.name}`;

  const authorP = document.createElement('p');
  authorP.textContent = `Author: ${book.author}`;

  const pageP = document.createElement('p');
  pageP.textContent = `Pages: ${book.page}`;

  const readP = document.createElement('p');
  readP.textContent = `Read: ${book.read}`;

  const button = document.createElement("button");
  button.id = "cancelbutton"
    button.textContent = "Remove Book";

    button.addEventListener('click', (e) =>{
        for(let a = 0 ; a < liberary.length ; a++){
           if(book.id === liberary[a].id){ liberary.splice(a,1)
           div.remove();
        }
    }
    })
    const buttn = document.createElement("button");
    buttn.id = "statuss"
    buttn.textContent = "Change Status"
 
buttn.addEventListener("click", (e) =>{
    console.log(book.read)
    if(book.read === "Yea"){
        readP.textContent = "Read : No";
        book.read = "No"
    }

    else{
         readP.textContent = " Read : Yea";
         book.read = "Yea"
    }
})
  
  div.append(h3, nameP, authorP, pageP, readP , button,buttn);
  display.append(div); // Only appends the ONE new book!
  
    
}


liberary.forEach((book) => createBookCard(book));
// const statuus = document.getElementById("statuss")
// const readprop = document.getElementById("have-read")














// const madediv = document.getElementById("madediv")
//   const cancelbutton = document.getElementById("cancel-button")
// cancelbutton.addEventListener('click',(e) =>{
//     const element = madediv.target.id;
//     console.log(element)
//     
// })

// function displaybook(){
//     console.log(liberary)
//     for (let i = 0; i < liberary.length; i++) {
//   const div = document.createElement('div');
//   
//   const h3 = document.createElement("h3");
//   h3.textContent = "Your Book";
//   h3.style.textAlign = 'center';
//   const authorP = document.createElement('p');
//   authorP.textContent = `Author: ${liberary[i].author}`;
//   const nameP = document.createElement('p');
//   nameP.textContent = `Title: ${liberary[i].name}`;
//   const pageP = document.createElement('p');
//   pageP.textContent = `Pages: ${liberary[i].page}`;
//   const readP = document.createElement('p');
//   readP.textContent = `Read: ${liberary[i].read}`;


//   div.append(h3, nameP, authorP, pageP, readP);
//   display.append(div);
// }
// }


// import readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
// import { createElement } from 'react';
 

// console.log("enter the book you want to add");
// const a = [];
// async function takeinput(params) {
//     const rl = readline.createInterface({ input, output });

    
//     const name = await rl.question('What is your name? ');
//     const author = await rl.question('who is the author of the book?');
//     const page = await rl.question('how many pages are there in the book?');
//     const read = await rl.question('are you done reading the book? (YES/NO)');

//     a.push(name, author, page,read);
// }

// async function main() {
//     await takeinput(); // Wait for user input to complete
//     addbooktoliberary(...a); // Spread the populated array
    // console.log("\nCurrent Library State:", liberary);
    
//   const display = document.getElementById("display");  
// for(let i = 0 ; i < liberary[i].length; i++){
//     const div = document.createElement('div');
//     const h3 = document.createElement("h3");
//     h3.textContent = "Your Book"
//     h3.style.textAlign = 'center';
//     const p = document.createElement('p')
//     p.textContent = liberary[i].author;
//     p.textContent = liberary[i].name;
//     p.textContent = liberary[i].page;
//     p.textContent = liberary[i].read;

//     div.append(h3,p)
//     display.append(div)
//     // body.append("div");
    
// }
// }

// main();
