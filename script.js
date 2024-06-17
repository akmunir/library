const bookTitleInput = document.getElementById("book_title");
const bookAuthorInput = document.getElementById("book_author");
const bookPagesInput = document.getElementById("book_pages");
const form = document.querySelector("form");
const dialog = document.querySelector(".form-dialog");
let bookList = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let info =  title + " by " + author + " , " + pages + " pages,";
        info += read ? " read " : "not read yet";
        return info;
    }
}

function addBookToLibrary(book) {
    bookList.push(book);
}

function displayBooks() {
}

addEventListener("submit", function(event) {
    event.preventDefault();
    const bookTitle = bookTitleInput.value;
    const bookAuthor = bookAuthorInput.value;
    const bookPages = bookPagesInput.value;
    let book = new Book(bookTitle, bookAuthor, bookPages);
    dialog.close();
    console.log(book.info());
    addBookToLibrary(book);
    displayBooks();

});

addEventListener("click", function(event) {
    if (event.target.classList.contains("new-book"))
        dialog.showModal();
});







