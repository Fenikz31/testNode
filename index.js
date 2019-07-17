// Stocké sur un serveur distant
const user = {
    name: "Marcus",
    email: "marcus@mail.com",
    role: "ADMIN",
    age: 55,
};
// ------------- //

function getUser(username) {
    // Connexion serveur distant
    return new Promise(function (resolve, reject) {
        setTimeout(() => {

            if (user.name.toLowerCase() === username.trim().toLowerCase()) {
                resolve(user);
            } else {
                reject("Il y'a eu un problème lors de la connexion à la BDD!");
            }
        }, 3000);
    });
}

const u2 = getUser("Marcus");
const u1 = getUser("Michael");

getUser('michael')
  .then(data => console.log(data))
  .catch(e => console.error(e));

getUser('Marcus')
  .then(data => console.log(data))
  .catch(e => console.error(e));

u1.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.error(error);
});

u2.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.error(error);
});

// const sayHello = name => console.log(`Salut ${name}!`);

// sayHello();