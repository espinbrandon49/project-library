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
const readToggle = document.getElementsByClassName('readToggle')

let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read


  
}

function addBooktoLibrary() {
  const readBook = () => yesInput.checked == true ? 'yes' : 'no'
  //const readBook = () => yesInput.checked == true ? readToggle.checked = true : readToggle.checked = false

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
    let titleDiv = document.createElement('div')
    let authorDiv = document.createElement('div')
    let pagesDiv = document.createElement('div')
    let readBtn = document.createElement('button')
    let removeBtn = document.createElement('button')
    let newDiv = document.createElement('div')
    let readDiv = document.createElement('div')

    let readToggle = document.createElement('input')
    readToggle.setAttribute('type', 'checkbox')

    titleDiv.classList.add('titleDiv', 'libraryBookInfo')
    authorDiv.classList.add('authorDiv', 'libraryBookInfo')
    pagesDiv.classList.add('pagesDiv', 'libraryBookInfo')
    readBtn.classList.add('readBtn')
    removeBtn.classList.add('removeBtn')
    readToggle.classList.add('readToggle')
    newDiv.classList.add('libraryBook')
    readDiv.classList.add('readDiv', 'libraryBookInfo')

    newDiv.setAttribute('data-newdiv', `${i}`)

    titleDiv.textContent = myLibrary[i].title
    authorDiv.innerHTML = `Author <br> ${myLibrary[i].author}`
    pagesDiv.textContent = `Pgs ${myLibrary[i].pages}`
    readBtn.textContent = 'read'
    removeBtn.textContent = 'Remove Book'
    readDiv.textContent = `Read: ${myLibrary[i].read}`

    newDiv.appendChild(titleDiv)
    newDiv.appendChild(authorDiv)
    newDiv.appendChild(pagesDiv)
    newDiv.appendChild(readBtn)
    newDiv.appendChild(removeBtn)
    newDiv.appendChild(readToggle)
    newDiv.appendChild(readDiv)
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
