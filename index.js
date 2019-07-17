const express = require("express");
const app = express();

const PORT = 5676;

const tabs = [
    {
        label: "Accueil", link: "/", active: true,
    },
    {
        label: "Présentation", link: "/presentation", active: false,
    },
    {
        label: "Services", link: "/services", active: false,
    },
    {
        label: "Contact", link: "/contact", active: false,
    },
];

const html = `

    <style>
    html {
      scroll-behavior: smooth;
    }
    body {
      padding: 0;
      margin: 0;
    }
    nav {
      position: fixed;
      top: 0;
      background: black;
      width: 100%;
      height: 40px;
    }
    nav ul {
      display: flex;
      justify-content: space-around;
    }
    nav li a {
      color: white;
    }
  </style>
    
    <header>
        <nav>
            <ul>
            ${tabs.map(({label, link,active}) =>`
                <li class="${active ? "active" : ""}"><a href="${link}">${label}</a>
                `).join("")};
                </ul>        
        </nav>
    </header>
    
    <main>
        <section id="home">
        <h1>Bienvenue sur le site</h1>
        <p>Eos tenetur alias quod debitis quia ut. Molestiae ut molestiae quam corporis voluptatem reprehenderit commodi voluptatem cumque. Et atque qui ex nostrum. Error nulla voluptatum. Nemo omnis dolorem.
 
Quae occaecati doloribus eveniet ipsam quam repellat dignissimos. Suscipit voluptas aperiam voluptate. Cum ut dolores quod ullam cumque repellat. Quia quas molestiae consequatur. Ullam incidunt asperiores officiis ut sit saepe aspernatur vel.
 
Cupiditate ut eaque qui saepe. Perspiciatis tempore et molestiae est fugit quia. Iusto aut veniam nesciunt eos. Inventore aliquam enim distinctio occaecati et id asperiores. Natus quaerat quia ut rerum repudiandae.</p>
        </section>
    </main>`;


app.listen(PORT);

app.get("/", (req,res) =>{
    console.log(req.url);
    
    res.send(`${html} <h1>Bienvenue sur le site!</h1>`);
});
app.get("/presentation", (req,res) =>{
    console.log(req.url);
    
    res.send(`${html} <h1>Notre histoire!</h1>`);
});
app.get("/services", (req,res) =>{
    console.log(req.url);
    
    res.send(`${html} <h1>Nos prestations!</h1>`);
});
app.get("/contact", (req,res) =>{
    console.log(req.url);
    
    res.send(`${html} <h1>Nous contacter</h1>`);
});

app.get("*", (req,res) =>{
    console.log(req.originalUrl);
    if (req.url === `/favicon.ico`) {
        console.log(`CHARGEMENT DE LA FAVICON ....`);
    }
    res.send(html);
});
