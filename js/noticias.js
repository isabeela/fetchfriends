function noticia (documento) {
    var noticia = document.createElement('div');
    
    var verNoticia = documento.querySelectorAll(".item")
       verNoticia.forEach(div => {  

      documento.querySelectorAll("article").forEach(noticia => noticia.style.width = "90%")
      documento.querySelectorAll(".post-meta").forEach(botao => botao.textAlign = "left")
      documento.querySelectorAll('.read-more').forEach(leia => {
          leia.style.border = "1px solid #595870"
          leia.style.margin = "20px"
          leia.style.padding = "10px"
          leia.style.textAlign = "left"
        
        })
       
     
       const indesejavel = documento.querySelectorAll(".post-cat, .post-author, .views, .comments, .date")

       for (let t = 0; t < indesejavel.length; t++) {
           indesejavel[t].remove()
       }


        noticia.appendChild(div)
        
    });
    document.querySelector("#noticia").appendChild(noticia)
}



function noticias () {
    fetch('https://cors-anywhere.herokuapp.com/https://mixdeseries.com.br/?s=friends')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        noticia(documento);
    })
    .catch(e => document.write(e));
}

window.onload = noticias