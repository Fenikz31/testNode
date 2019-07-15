const bodyTableTag = document.querySelector("tbody");
const tableTag = document.querySelector("table");

function createBookRow({title, author, price, available}) {

    return `
    <tr class="table-${available ? "success" : "danger"}">
    <td>${title}</td>
    <td>${author}</td>
    <td>${price} €</td>
    </tr>
    `    ;
}

function render(parentTag, content) {
    parentTag.innerHTML += content;
}

let books = [];

if (localStorage.getItem("books")) {
    books = JSON.parse(localStorage.getItem("books"));
    buildTable();
}

fetch("./books.json").then(function (data) {
    data.json().then(function (booksJson) {
        books = booksJson;

        buildTable();
        saveData(booksJson);
    });
});

// ################# AJAX Example ################# //
// function getAjax() {
    
//     if (window.XMLHttpRequest) {
//         return  new XMLHttpRequest();    
//     } else {
//         return new ActiveXObject("Microsoft.XMLHTTP");
//     }
// }

// function sendRequest(url) {
//     let xhr = getAjax();
//     xhr.responseType = "json";

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status ===200) {
            
//             console.log(xhr.readyState);
//             console.log(xhr.response);
            

//         }
//     };
    
//     xhr.open("GET", url);
//     xhr.send();    
// }
// sendRequest("./books.json");
//################################################# //
function buildTable() {
    
    if (books.length >0) {
        tableTag.style.display = "table";
    
        for (let book of books) {
            const row = createBookRow(book);
            render(bodyTableTag, row);
        }
    }
}

function saveData(data) {
    if (window.localStorage) {
        
        localStorage.setItem("books", JSON.stringify(data))
    }
}
