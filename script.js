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
    this.location = 0;
    this.info = function() {
        let info =  title + " by " + author + " , " + pages + " pages,";
        info += read ? " read " : "not read yet";
        return info;
    }
}

function addBookToLibrary(book) {
    bookList.push(book);
    book.location = bookList.length - 1;
}

function displayBooks() {
    const card = document.createElement("div");
    cardContainer.appendChild(card);
    card.classList.add("card-display");
    for (let i = 0; i < bookList.length; i++) {

        const title = document.createElement("div");
        title.classList.add("title");
        title.innerText = bookList[i].title;
        card.appendChild(title);

        const author = document.createElement("div");
        author.classList.add("author");
        author.innerText = bookList[i].author;
        card.appendChild(author);
        
        const pages = document.createElement("div");
        pages.classList.add("pages");
        pages.innerText = bookList[i].pages + " pages";
        card.appendChild(pages);

        const read = document.createElement("button");
        read.classList.add("read");
        read.innerText = "Not Read";
        card.appendChild(read);

        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.id = i;
        remove.innerText = "Remove Book";
        card.appendChild(remove);

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
    let target = event.target;
    if (target.classList.contains("new-book"))
        dialog.showModal();
    if (target.classList.contains("read")) {
        if (target.innerText === "Read") {
            target.innerText = "Not Read";
        } 
        else 
        target.innerText = "Read";
    }
    if (target.classList.contains("remove")) {
        bookList.splice(target.id, 1);
        const parent = target.parentElement;
        parent.remove();
    }

});







