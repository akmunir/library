const bookTitleInput = document.getElementById("book_title");
const bookAuthorInput = document.getElementById("book_author");
const bookPagesInput = document.getElementById("book_pages");
const form = document.querySelector("form");
const dialog = document.querySelector(".form-dialog");
const cardContainer = document.querySelector(".card-container");
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
    const card = document.createElement("div");
    cardContainer.appendChild(card);
    card.classList.add("card-display");
    for (let i = 0; i < bookList.length; i++) {
        const title = document.createElement("div");
        title.id = "#book_title";
        title.innerText = bookList[i].title;
        card.appendChild(title);
        const author = document.createElement("div");
        author.id = "#book_author";
        author.innerText = bookList[i].author;
        card.appendChild(author);
        const pages = document.createElement("div");
        pages.id = "#book_pages";
        pages.innerText = bookList[i].pages;
        card.appendChild(pages);
    }
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
    bookTitleInput.value = " ";
    bookAuthorInput.value = " ";
    bookPagesInput.value = " ";

});

addEventListener("click", function(event) {
    if (event.target.classList.contains("new-book"))
        dialog.showModal();
});







