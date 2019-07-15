const bodyTableTag = document.querySelector("tbody");
const tableTag = document.querySelector("table")

function createBookRow() {
    return `
    <tr>
    <td>Il était une fois</td>
    <td>Michael DUPONT</td>
    <td>15.44 €</td>
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
        price: "15.44 $",
        available: true
    },
    {
        title: "Biographie d'un auteur",
        author: "Emilie DURAND",
        price: "6.88 $",
        available: true
    },
    {
        title: "Il était deux fois",
        author: "Stéphanie BERTRAND",
        price: "23.99 $",
        available: false
    },
];
                