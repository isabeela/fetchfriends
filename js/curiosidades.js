function curiosidades(documento) {

    var curiosidade = document.createElement('div');
    var verCuriosidade = documento.querySelectorAll('.card-post')
    verCuriosidade.forEach(dest =>  {

      const indesejavel = documento.querySelectorAll(".postedon, .cat-item")

       for (let t = 0; t < indesejavel.length; t++) {
           indesejavel[t].remove()
       }


        for (let i = 6; i < verCuriosidade.length; i++) {
            verCuriosidade[i].style.display = "none"
        }

        documento.querySelectorAll('.title').forEach(titulo => titulo.style.fontSize = "1.3rem")
       

        curiosidade.appendChild(dest)
    })

    document.querySelector("#curiosidade").appendChild(curiosidade)
} 



function curiosidade() {
    fetch('https://cors-anywhere.herokuapp.com/https://jovemnerd.com.br/?s=curiosidades+friends')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        curiosidades(documento);
    })
    .catch(e => document.write(e));
}


window.onload = curiosidade