//Why does the myLibrary in local storage disappear if I refresh and addBookToLibrary()

//Any hints on how to overcome this would be much appreciated

const display = document.getElementById('display')
const titleInput = document.getElementById('titleInput')
const authorInput = document.getElementById('authorInput')
const pagesInput = document.getElementById('pagesInput')
const yesInput = document.getElementById('yesInput')
const noInput = document.getElementById('noInput')
const addBook = document.getElementById('addBook')
const submit = document.getElementById('submit')
const clearAll = document.getElementById('removeAll')

let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.card = `${title} ${author} ${pages} ${read}`
}

function addBooktoLibrary() {
  const readBook = () => yesInput.checked == true ? 'yes' : 'no'
  let title = titleInput.value
  let author = authorInput.value
  let pages = pagesInput.value
  let read = readBook()
  let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
  console.log(newBook)
  console.log(myLibrary)

  setLibrary()
}

const setLibrary = function () {
  localStorage.setItem('library', JSON.stringify(myLibrary))
}

const getLibrary = function () {
  myLibrary = JSON.parse(localStorage.getItem('library'))
}

addBook.addEventListener('click', addBooktoLibrary)
//submit.addEventListener('click', setLibrary)
clearAll.addEventListener('click', () => localStorage.clear())
