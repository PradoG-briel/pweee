'mode strict'

const links = {
    "nome": "Gabriel Prado",
    "img": "/img/avatar.jpg",
    "links": [
        {
            "titulo": "site pessoal",
            "url": "https://www.google.com/search?q=troll+face&source=lnms&tbm=isch&biw=647&bih=624#imgrc=QOhLq0d4eUg0cM"
        },
        {
            "titulo": "youtube",
            "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            "titulo": "linkedin",
            "url": "https://www.linkedin.com/in/gabriel-prado-039444184/"
        },
        {
            "titulo": "github",
            "url": "https://github.com/PradoG-briel/"
        }
    ]
}

const avatar = document.getElementById('avatar');
avatar.src = links.img;

const titulo = document.getElementById('titulo');
titulo.textContent = links.nome;

const site = document.getElementsByTagName('a')[0];
site.textContent = links.links[0].titulo;
site.href = links.links[0].url;

const youtube = document.getElementsByTagName('a')[1];
youtube.textContent = links.links[1].titulo;
youtube.href = links.links[1].url;

const linkedin = document.getElementsByTagName('a')[2];
linkedin.textContent = links.links[2].titulo;
linkedin.href = links.links[2].url;

const twitter = document.getElementsByTagName('a')[3];
twitter.textContent = links.links[3].titulo;
twitter.href = links.links[3].url;
