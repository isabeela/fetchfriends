function quiz(documento) {
    var quiz = document.createElement('div');
    var verQuiz = documento.querySelectorAll('.grid-base-post')
    verQuiz.forEach(dest =>  {


      const indesejavel = documento.querySelectorAll(".cat-labels, .post-meta-items, .meta-below")

       for (let t = 0; t < indesejavel.length; t++) {
           indesejavel[t].remove()
       }


        for (let i = 9; i < verQuiz.length; i++) {
            verQuiz[i].style.display = "none"
        }


        documento.querySelectorAll('.post-title').forEach(titulo => titulo.style.fontSize = "1.3rem")

        quiz.appendChild(dest)
    })

    const divQuiz = document.querySelector("#quiz").appendChild(quiz)
}





function quizes() {
    fetch('https://cors-anywhere.herokuapp.com/https://seriadornaveia.com.br/?s=friends')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        quiz(documento);
    })
    .catch(e => document.write(e));

}

window.onload = quizes