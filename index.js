const bodyTableTag = document.querySelector("tbody");
const tableTag = document.querySelector("table");

function createBookRow(title, author,price) {
    return `
    <tr>
    <td>${title}</td>
    <td>${author}</td>
    <td>${price} €</td>
    </tr>
    `    ;
}

function render(parentTag, content) {
    parentTag.innerHTML += content;
}

const books = [
    {
        title: "Il était une fois",
        author: "Michael DUPONT",
        price: 15.44,
        available: true
    },
    {
        title: "Biographie d'un auteur",
        author: "Emilie DURAND",
        price: 6.88,
        available: true
    },
    {
        title: "Il était deux fois",
        author: "Stéphanie BERTRAND",
        price: 23.99,
        available: false
    },
];

if (books.length >0) {
    tableTag.style.display = "table";

    for (let book of books) {
        const row = createBookRow(book.title, book.author, book.price);
        render(bodyTableTag, row);
    }
}
                