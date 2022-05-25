const display = document.getElementById('display')
const titleInput = document.getElementById('titleInput')
const authorInput = document.getElementById('authorInput')
const pagesInput = document.getElementById('pagesInput')
const yesInput = document.getElementById('yesInput')
const noInput = document.getElementById('noInput')
const addBook = document.getElementById('addBook')
const clearAll = document.getElementById('removeAll')
const removeBtn = document.getElementsByClassName('removeBtn')
const readBtn = document.getElementsByClassName('readBtn')
const addNewBook = document.getElementById('addNewBook')
const addBookForm = document.getElementById('addBookForm')  

let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
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
  addBookForm.style = 'display: none'
  location.reload()
}

const setLibrary = function () {
  localStorage.setItem('library', JSON.stringify(myLibrary))
}

const getLibrary = function () {
  myLibrary = JSON.parse(localStorage.getItem('library'))

  for (let i = 0; i < myLibrary.length; i++) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('libraryBook')
    newDiv.setAttribute('data-newdiv', `${i}`)

    let titleDiv = document.createElement('div')
    let authorDiv = document.createElement('div')
    let pagesDiv = document.createElement('div')
    let readDiv = document.createElement('div')

    titleDiv.classList.add('titleDiv')
    authorDiv.classList.add('authorDiv')
    pagesDiv.classList.add('pagesDiv')
    readDiv.classList.add('readDiv')

    titleDiv.textContent = myLibrary[i].title
    authorDiv.textContent = myLibrary[i].author
    pagesDiv.textContent = myLibrary[i].pages
    readDiv.textContent = myLibrary[i].read

    let readBtn = document.createElement('button')
    readBtn.classList.add('readBtn')
    readBtn.textContent = 'read'

    let removeBtn = document.createElement('button')
    removeBtn.classList.add('removeBtn')
    removeBtn.textContent = 'Remove Book'

    newDiv.appendChild(titleDiv)
    newDiv.appendChild(authorDiv)
    newDiv.appendChild(pagesDiv)
    newDiv.appendChild(readDiv)
    newDiv.appendChild(readBtn)
    newDiv.appendChild(removeBtn)
    display.appendChild(newDiv)
  }
}

if (!localStorage.library) {
  setLibrary()
  getLibrary()
} else {
  getLibrary()
}

const readBook = function () {
  for (let i = 0; i < readBtn.length; i++) {
    readBtn[i].addEventListener('click', () => {
      myLibrary[i].read = myLibrary[i].read == 'no' ? 'yes' : 'no'
      setLibrary()
      location.reload()
    })
  }
}
readBook()

const remove = function () {
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', () => {
      myLibrary.splice(i, 1)
      setLibrary()
      location.reload()
    })
  }
}
remove()

addNewBook.addEventListener('click', () => {
  addBookForm.style = 'display: block'
})

display.addEventListener('click', () => {
  addBookForm.style = 'display: none'
  location.reload()
})

addBook.addEventListener('click', addBooktoLibrary)
clearAll.addEventListener('click', () => {
  localStorage.clear();
  location.reload()
})
