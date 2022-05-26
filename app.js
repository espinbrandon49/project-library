const display = document.getElementById('display')
const titleInput = document.getElementById('titleInput')
const authorInput = document.getElementById('authorInput')
const pagesInput = document.getElementById('pagesInput')
const yesInput = document.getElementById('yesInput')
const noInput = document.getElementById('noInput')
const addBook = document.getElementById('addBook')
const clearAll = document.getElementById('removeAll')
const removeBtn = document.getElementsByClassName('removeBtn')
const addNewBook = document.getElementById('addNewBook')
const addBookForm = document.getElementById('addBookForm')
const readToggle = document.getElementsByClassName('readToggle')

let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBooktoLibrary() {
  let title = titleInput.value
  let author = authorInput.value
  let pages = pagesInput.value
  let read = yesInput.checked
  
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
    let titleDiv = document.createElement('div')
    let authorDiv = document.createElement('div')
    let pagesDiv = document.createElement('div')
    let removeBtn = document.createElement('button')
    let newDiv = document.createElement('div')
    let readDiv = document.createElement('div')
    let readToggle = document.createElement('input')
    let readLabel = document.createElement('label')
    let readSpan = document.createElement('span')

    readToggle.setAttribute('type', 'checkbox')
    readToggle.checked = myLibrary[i].read

    readLabel.classList.add('readLabel')
    readToggle.classList.add('readToggle')
    readSpan.classList.add('readSpan')

    titleDiv.classList.add('titleDiv', 'libraryBookInfo')
    authorDiv.classList.add('authorDiv', 'libraryBookInfo')
    pagesDiv.classList.add('pagesDiv', 'libraryBookInfo')
    readDiv.classList.add('readDiv', 'libraryBookInfo')
    removeBtn.classList.add('removeBtn')
    newDiv.classList.add('libraryBook')

    titleDiv.textContent = myLibrary[i].title
    authorDiv.innerHTML = `<strong>Author</strong> <br> ${myLibrary[i].author}`
    pagesDiv.textContent = `Pgs ${myLibrary[i].pages}`

    newDiv.appendChild(titleDiv)
    newDiv.appendChild(authorDiv)
    newDiv.appendChild(pagesDiv)
    newDiv.appendChild(readDiv)
    readDiv.appendChild(readLabel)
    readLabel.appendChild(readToggle)
    readLabel.appendChild(readSpan)
    readDiv.appendChild(removeBtn)
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
  for (let i = 0; i < readToggle.length; i++) {
    readToggle[i].addEventListener('click', () => {
      myLibrary[i].read = myLibrary[i].read == false ? true : false
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

v
