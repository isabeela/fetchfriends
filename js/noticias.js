
function noticias (documento) {

    var noticia = document.createElement('div');
    var verNoticia = documento.querySelectorAll(".card")
       verNoticia.forEach(div => {  


        documento.querySelectorAll(".card_content").forEach(titulo => {

            titulo.style.fontSize = "0.8rem"
           
        })

        for (let i = 9 ; i < verNoticia.length; i++) {
            verNoticia[i].style.display = "none"
        }

     
        const indesejavel = documento.querySelectorAll(".post-categories, .post_meta, .entry_cats, .meta")

        for (let t = 0; t < indesejavel.length; t++) {
            indesejavel[t].remove()
        }

       
        noticia.appendChild(div)
    });

     document.querySelector("#noticia").appendChild(noticia)
     
     
}





function home () {

    fetch('https://cors-anywhere.herokuapp.com/https://sitedosgeeks.com/?s=friends')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        noticias(documento);
    })
    .catch(e => document.write(e));

}

window.onload = home
