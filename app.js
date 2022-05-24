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
  for (let i = 0; i < myLibrary.length; i++) {
    let newDiv = document.createElement('div')
    newDiv.textContent = myLibrary[i].card
    newDiv.classList.add('libraryBook')
    newDiv.setAttribute('data-newdiv', `${i}`)

    let readBtn = document.createElement('button')
    readBtn.classList.add('readBtn')
    readBtn.textContent = 'read'

    let removeBtn = document.createElement('button')
    removeBtn.classList.add('removeBtn')
    removeBtn.textContent = 'Remove Book'

    newDiv.appendChild(readBtn)
    newDiv.appendChild(removeBtn)
    display.appendChild(newDiv)
  }
}

if (localStorage.length == 0) {
  setLibrary()
  getLibrary()
} else {
  getLibrary()
}

const readBook = function () {
  for (let i = 0; i< readBtn.length; i++) {
    readBtn[i].addEventListener('click',  () => {
      let bookInfo = myLibrary[i]
      bookInfo.read = 'yes'
      bookInfo.card = bookInfo.title + bookInfo.author + bookInfo.pages + bookInfo.read
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

addBook.addEventListener('click', addBooktoLibrary)
clearAll.addEventListener('click', () => {
  localStorage.clear();
  location.reload()
})

console.log(myLibrary)
//*BUG what if they do have a local storage already?
