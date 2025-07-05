const articles = document.querySelector("#articles")

window.addEventListener("load", async() => {
    const result = await fetch("https://odinkeane.github.io/web-developer/react-6/data.json")
    .then(res => res.json())
    console.log(result);

    for(let article of result.articles){
        articles.innerHTML += `
        <article class='card'>
            <h2>${article.article_name}</h2>
            <img src=${article.image}>
        </article>
    `
    }
});

/* const film = {
    title: "Аватар",
    genres: "фантастика",
    year: 2008
}

document.querySelector("h2").innerHTML = film.title

films.innerHTML += `
    <div>
        <h2>${film.title}</h2>
    </div>
` */

