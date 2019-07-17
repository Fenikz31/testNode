const http = require("http");
const PORT = 5676;

// Création serveur
const server = http.createServer((req, res) => {
    res.write(`<h1>Bienvenue</h1>`)
    res.end(`<h1>Hello !</h1>`);
}); 


// Ecoute sur un port ici 5676
server.listen(PORT,() => console.log(`Listening on http://localhost:${PORT}`));