
function noticias (documento) {

    var noticia = document.createElement('div');
    var botao = document.createElement('a')
    var titulo = document.createElement('h1');
    var verNoticia = documento.querySelectorAll(".item")
       verNoticia.forEach(div => {  

        titulo.innerHTML= "Notícias"

       documento.querySelectorAll("article").forEach( noticia => {
        noticia.style.width = "90%"
        noticia.setAttribute('class', 'textos')
       } )

        botao.innerHTML = "Ver todos"
        botao.setAttribute('class', 'botao')
        botao.setAttribute('href', 'noticias.html')
        botao.style.marginTop = "10px"
     
        const principal = verNoticia[0]
        principal.setAttribute('class', 'destaque')
       
     
       const indesejavel = documento.querySelectorAll(".post-cat, .post-author, .views, .comments, .date")

       for (let t = 0; t < indesejavel.length; t++) {
           indesejavel[t].remove()
       }

       for (let i = 3; i < verNoticia.length; i++) {
           verNoticia[i].style.display = "none"
       }

       for (let m = 1; m < verNoticia.length; m++) {
          verNoticia[m].setAttribute('class', 'miniatura'); 
          verNoticia[2].setAttribute('id', 'segundo')
       }


       
        noticia.appendChild(div)
    });

     var divNoticias = document.querySelector("#noticia").appendChild(noticia)
     divNoticias.parentNode.insertBefore(titulo, divNoticias)
     divNoticias.appendChild(botao)
}




function curiosidades(documento) {

    var curiosidade = document.createElement('div');
    var titulo = document.createElement('h1');
    var botao = document.createElement('a');
    var verCuriosidade = documento.querySelectorAll('.card-post')
    verCuriosidade.forEach(curios =>  {

    titulo.innerHTML= "Curiosidades"

    botao.innerHTML = "Ver todos"
    botao.setAttribute('class', 'botao')
    botao.setAttribute('href', 'curiosidades.html')
    botao.style.marginTop = "10px"

      const indesejavel = documento.querySelectorAll(".postedon, .cat-item")

       for (let t = 0; t < indesejavel.length; t++) {
           indesejavel[t].remove()
       }

        for (let i = 3; i < verCuriosidade.length; i++) {
            verCuriosidade[i].style.display = "none"
        }

        documento.querySelectorAll('.title').forEach(titulo => titulo.style.fontSize = "1.3rem")

        curiosidade.appendChild(curios)
        
    })

   const divCuriosidade = document.querySelector("#curiosidade").appendChild(curiosidade)
   divCuriosidade.parentNode.insertBefore(titulo, divCuriosidade)
   divCuriosidade.appendChild(botao)

    
} 



function quiz(documento) {

    var quiz = document.createElement('div');
    var titulo = document.createElement('h1');
    var botao = document.createElement('a')

    var verQuiz = documento.querySelectorAll('.grid-base-post')
    verQuiz.forEach(dest =>  {

        titulo.innerHTML = "Quiz"

        botao.innerHTML = "Ver todos"
        botao.setAttribute('class', 'botao')
        botao.setAttribute('href', 'quiz.html')
        botao.style.marginTop = "10px"

        

      const indesejavel = documento.querySelectorAll(".cat-labels, .post-meta-items, .meta-below")

       for (let t = 0; t < indesejavel.length; t++) {
           indesejavel[t].remove()
       }

        for (let i = 3; i < verQuiz.length; i++) {
            verQuiz[i].style.display = "none"
        }

        documento.querySelectorAll('.post-title').forEach(titulo => titulo.style.fontSize = "1.3rem")

        quiz.appendChild(dest)
       
    })

    const divQuiz = document.querySelector("#quiz").appendChild(quiz)
    divQuiz.parentNode.insertBefore(titulo, divQuiz)
    divQuiz.appendChild(botao)

}






function home () {

    fetch('https://cors-anywhere.herokuapp.com/https://mixdeseries.com.br/?s=friends')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        noticias(documento);
    })
    .catch(e => document.write(e));

    fetch('https://cors-anywhere.herokuapp.com/https://jovemnerd.com.br/?s=curiosidades+friends')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        curiosidades(documento);
    })
    .catch(e => document.write(e));


    fetch('https://cors-anywhere.herokuapp.com/https://seriadornaveia.com.br/?s=friends')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        quiz(documento);
    })
    .catch(e => document.write(e));
}

window.onload = home
