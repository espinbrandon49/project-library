const display = document.getElementById('display')
const titleInput = document.getElementById('titleInput')
const authorInput = document.getElementById('authorInput')
const pagesInput = document.getElementById('pagesInput')
const yesInput = document.getElementById('yesInput')
const noInput = document.getElementById('noInput')
const addBook = document.getElementById('addBook')
const clearAll = document.getElementById('removeAll')
const removeBtn = document.getElementsByClassName('')

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
  setLibrary()
  location.reload()
}

const setLibrary = function () {
  localStorage.setItem('library', JSON.stringify(myLibrary))
}

const getLibrary = function () {
  myLibrary = JSON.parse(localStorage.getItem('library'))
  for(let i = 0; i < myLibrary.length; i++) {
    let newDiv = document.createElement('div')
    newDiv.textContent = myLibrary[i].card
    newDiv.classList.add('libraryBook')

    let newBtn = document.createElement('button')
    newBtn.classList.add(`removeBtn${i+1}`)
    newBtn.addEventListener('click', () => newDiv.style = 'display: none')
    console.log(`removeBtn${i+1}`)
    newBtn.textContent='Remove Book' 
  
    newDiv.appendChild(newBtn)
    display.appendChild(newDiv)
  }
}

if (localStorage.length == 0) {
  setLibrary()
  getLibrary()
} else {
  getLibrary()
}

addBook.addEventListener('click', addBooktoLibrary)
clearAll.addEventListener('click', () => {
  localStorage.clear();
  location.reload()
})
