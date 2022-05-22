const display = document.getElementById('display')
const titleInput = document.getElementById('titleInput')
const authorInput = document.getElementById('authorInput')
const pagesInput = document.getElementById('pagesInput')
const yesInput = document.getElementById('yesInput')
const noInput = document.getElementById('noInput')

const addBook = document.getElementById('addBook')
addBook.addEventListener('click', addBooktoLibrary)

const clearAll = document.getElementById('removeAll')
clearAll.addEventListener('click', () => localStorage.clear())

let myLibrary = [

]

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.card = `${title} ${author} ${pages} ${read}`
}

function addBooktoLibrary() {
  let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, yesInput.value)
  myLibrary.push(newBook)

  let storedLibrary = localStorage.setItem('storedLibrary', JSON.stringify(myLibrary))
  let book = JSON.parse(localStorage.getItem('storedLibrary'))

  for (let i = 0; i < book.length; i++) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('addBookClassName')
    newDiv.textContent = book[i].card
    display.appendChild(newDiv)
  }

  //console.log(newBook)
  console.log(myLibrary)
}



//let parseLibrary = JSON.parse(stringLibrary)
//console.log(parseLibrary.d)


/*
function stringyy() {
  let array = []
  for (let i = 0; i < myLibrary.length; i++) {
    array.push(JSON.parse(JSON.stringify(myLibrary[i])))
  }
  console.log(array)
  return array
}*/

