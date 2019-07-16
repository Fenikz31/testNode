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
buildTable();

function getbooks() {

    if (windows.localStorage && localStorage.getItem("books")) {
        try {
            books = JSON.parse(localStorage.getItem("books"));
        } catch (e) {
            return [];
        }
    }
    return [];
}
    
fetch("./books.json").then(function (response) {
    response.json().then(function (booksJson) {
        saveData(booksJson);

        if (books.length !== booksJson.length) {            
            books = booksJson;
            buildTable();
        } else {
            for ( let book of books) {
                const bookJson = booksJson.filter(function (b){
                    return b.title === book.title && b.author === book.author;
                })[0];
                if (bookJson.available !== book.available || bookJson.price === book.price) {
                    books = booksJson;
                    buildTable();
                }
            }
        }
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
