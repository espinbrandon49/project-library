const display = document.getElementById('display')
const titleInput = document.getElementById('titleInput')
const authorInput = document.getElementById('authorInput')
const pagesInput = document.getElementById('pagesInput')
const yesInput = document.getElementById('yesInput')
const noInput = document.getElementById('noInput')
const addBook = document.getElementById('addBook')
const clearAll = document.getElementById('removeAll')
const removeBtn = document.getElementsByClassName('removeBtn')
// BUTTON const readBtn = document.getElementsByClassName('readBtn')
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
  // BUTTON const readBook = () => yesInput.checked == true ? 'yes' : 'no'

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
     // BUTTON let readBtn = document.createElement('button')

    readToggle.setAttribute('type', 'checkbox')
    readToggle.checked = myLibrary[i].read

    readLabel.classList.add('readLabel')
    readToggle.classList.add('readToggle')
    readSpan.classList.add('readSpan')

    titleDiv.classList.add('titleDiv', 'libraryBookInfo')
    authorDiv.classList.add('authorDiv', 'libraryBookInfo')
    pagesDiv.classList.add('pagesDiv', 'libraryBookInfo')
    removeBtn.classList.add('removeBtn')
    newDiv.classList.add('libraryBook')
    readDiv.classList.add('readDiv', 'libraryBookInfo')
    // BUTTON readBtn.classList.add('readBtn')

    titleDiv.textContent = myLibrary[i].title
    authorDiv.innerHTML = `Author <br> ${myLibrary[i].author}`
    pagesDiv.textContent = `Pgs ${myLibrary[i].pages}`
    removeBtn.textContent = 'Remove Book'
    // BUTTON readDiv.textContent = `Read: ${myLibrary[i].read}`
    // BUTTON readBtn.textContent = 'read'

    newDiv.appendChild(titleDiv)
    newDiv.appendChild(authorDiv)
    newDiv.appendChild(pagesDiv)
    newDiv.appendChild(readDiv)
    readDiv.appendChild(readLabel)
    readLabel.appendChild(readToggle)
    readLabel.appendChild(readSpan)
    readDiv.appendChild(removeBtn)
    display.appendChild(newDiv)
    // BUTTON newDiv.appendChild(readBtn)
    
  }

}

if (!localStorage.library) {
  setLibrary()
  getLibrary()
} else {
  getLibrary()
}

/*
// is for button
const readBook = function () {
  for (let i = 0; i < readBtn.length; i++) {
    readBtn[i].addEventListener('click', () => {
      myLibrary[i].read = myLibrary[i].read == false ? true : false
      setLibrary()
      location.reload()
    })
  }
}
readBook()
*/

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
clearAll.addEventListener('click', () => {
  localStorage.clear();
  location.reload()
})

console.log(myLibrary)

//make a button look and act like a toggle switch instead of using an input[type = 'checkbox']
