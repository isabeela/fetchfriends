function rachel(documento) {
    if (document.querySelector('.res')) {
        document.querySelector('.res').remove()
    }

    var rach = document.createElement('div')

    var dadosRachel = documento.querySelectorAll('.mw-parser-output')
    dadosRachel.forEach(dado => {

        documento.querySelectorAll('p').forEach(p =>{
            p.style.color = "#000"
            p.style.textAlign = "justify"
        })

        documento.querySelector(".center").remove()
        documento.querySelector(".mw-editsection").remove()

        var personagens = document.querySelectorAll('.personagens')

      for (let i = 0; i < personagens.length; i++) {

        if (i === 0) {
            personagens[i].style.backgroundColor = "red"
        } else {
            personagens[i].style.backgroundColor = "#fff"
        }
      }



        rach.appendChild(dado)

    })

    var res = rach
    res.classList.add('res')
    
   document.querySelector("#rachel").appendChild(rach)

}



function monica(documento) {

    if (document.querySelector('.res')) {
        document.querySelector('.res').remove()
    }


    var mon = document.createElement('div')

    var dadosMonica = documento.querySelectorAll('.mw-parser-output')
    dadosMonica.forEach(dado => {
    

        documento.querySelectorAll('p').forEach(p =>{
            p.style.color = "#000"
            p.style.textAlign = "justify"

        })

        documento.querySelector(".center").remove()
        documento.querySelector(".mw-editsection").remove()

        var personagens = document.querySelectorAll('.personagens')

        for (let i = 0; i < personagens.length; i++) {
  
          if (i === 2) {
              personagens[i].style.backgroundColor = "red"
          } else {
              personagens[i].style.backgroundColor = "#fff"
          }
        }
  
  

        mon.appendChild(dado)

    })

    var res = mon
    res.classList.add('res')


   document.querySelector("#monica").appendChild(mon)
}




function phoebe(documento) {

    if (document.querySelector('.res')) {
        document.querySelector('.res').remove()
    }

    var pheebs = document.createElement('div')

    var dadosPhoebe = documento.querySelectorAll('.mw-parser-output')
    dadosPhoebe.forEach(dado => {
    

        documento.querySelectorAll('p').forEach(p =>{
            p.style.color = "#000"
            p.style.textAlign = "justify"

        })

        documento.querySelector(".center").remove()
        documento.querySelector(".mw-editsection").remove()

        var personagens = document.querySelectorAll('.personagens')



        for (let i = 0; i < personagens.length; i++) {

          if (i === 1) {
              personagens[i].style.backgroundColor = "red"
              
          } else {
              personagens[i].style.backgroundColor = "#fff"
              
          }
        }
  
  

        pheebs.appendChild(dado)

    })

    var res = pheebs
    res.classList.add('res')

   document.querySelector("#phoebe").appendChild(pheebs)

}

function ross(documento) {

    if (document.querySelector('.res')) {
        document.querySelector('.res').remove()
    }
    var ro = document.createElement('div')

    var dadosRoss = documento.querySelectorAll('.mw-parser-output')
    dadosRoss.forEach(dado => {
    
        documento.querySelectorAll('p').forEach(p =>{
            p.style.color = "#000"
            p.style.textAlign = "justify"

        })

        documento.querySelector(".center").remove()
        documento.querySelector(".mw-editsection").remove()

        var personagens = document.querySelectorAll('.personagens')

        for (let i = 0; i < personagens.length; i++) {
  
          if (i === 3) {
              personagens[i].style.backgroundColor = "red"
          } else {
              personagens[i].style.backgroundColor = "#fff"
          }
        }
  
  


        ro.appendChild(dado)

    })

    var res = ro
    res.classList.add('res')

   document.querySelector("#ross").appendChild(ro)

}




function joey(documento) {

    if (document.querySelector('.res')) {
        document.querySelector('.res').remove()
    }

    var joe = document.createElement('div')

    document.querySelector('.img-joey').style.backgroundColor = "red"

    
    var dadosJoey = documento.querySelectorAll('.mw-parser-output')
    dadosJoey.forEach(dado => {

        documento.querySelectorAll('p').forEach(p =>{
            p.style.color = "#000"
            p.style.textAlign = "justify"
        })

        documento.querySelector(".center").remove()
        documento.querySelector(".mw-editsection").remove()

      var personagens = document.querySelectorAll('.personagens')

      for (let i = 0; i < personagens.length; i++) {

        if (i === 4) {
            personagens[i].style.backgroundColor = "red"
        } else {
            personagens[i].style.backgroundColor = "#fff"
        }
      }




        joe.appendChild(dado)
    })

    var res = joe
    res.classList.add('res')
    document.querySelector("#joey").appendChild(joe)
}


function chandler(documento) {

    if (document.querySelector('.res')) {
        document.querySelector('.res').remove()
    }

    var chan = document.createElement('div')

     
    var dadosChandler = documento.querySelectorAll('.mw-parser-output')
    dadosChandler.forEach(dado => {

        documento.querySelectorAll('p').forEach(p =>{
            p.style.color = "#000"
            p.style.textAlign = "justify"

        })

        documento.querySelector(".center").remove()
        documento.querySelector(".mw-editsection").remove()

        var personagens = document.querySelectorAll('.personagens')

        for (let i = 0; i < personagens.length; i++) {
  
          if (i === 5) {
              personagens[i].style.backgroundColor = "red"
          } else {
              personagens[i].style.backgroundColor = "#fff"
          }
        }
  
  

      
        
        chan.appendChild(dado)
    })

    var res = chan
    res.classList.add('res')




    document.querySelector("#chandler").appendChild(chan)

}




function personagemRachel() {

    fetch('https://cors-anywhere.herokuapp.com/https://assista-series.fandom.com/pt-br/wiki/Rachel_Green')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        rachel(documento);
    })
    .catch(e => document.write(e));

}

function personagemPhoebe() {
    fetch('https://cors-anywhere.herokuapp.com/https://assista-series.fandom.com/pt-br/wiki/Phoebe_Buffay')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        phoebe(documento);
    })
    .catch(e => document.write(e));
}

function personagemMonica() {
    fetch('https://cors-anywhere.herokuapp.com/https://assista-series.fandom.com/pt-br/wiki/Monica_Geller')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        monica(documento);
    })
    .catch(e => document.write(e));
}


function personagemRoss() {
    fetch('https://cors-anywhere.herokuapp.com/https://assista-series.fandom.com/pt-br/wiki/Ross_Geller')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        ross(documento);
    })
    .catch(e => document.write(e));
}


function personagemJoey() {
    fetch('https://cors-anywhere.herokuapp.com/https://assista-series.fandom.com/pt-br/wiki/Joey_Tribbiani')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        joey(documento);
    })
    .catch(e => document.write(e));
}


function personagemChandler() {
    fetch('https://cors-anywhere.herokuapp.com/https://assista-series.fandom.com/pt-br/wiki/Chandler_Bing')
    .then(resp => resp.text())
    .then (pg => {
        let dom = new DOMParser();
        let documento = dom.parseFromString(pg, "text/html");
        chandler(documento);
    })
    .catch(e => document.write(e));
}


function evento() {

    document.querySelector('.img-rachel').addEventListener('click', personagemRachel)
    document.querySelector('.img-phoebe').addEventListener('click', personagemPhoebe)
    document.querySelector('.img-monica').addEventListener('click', personagemMonica)
    document.querySelector('.img-ross').addEventListener('click', personagemRoss)
    document.querySelector('.img-joey').addEventListener('click', personagemJoey)
    document.querySelector('.img-chandler').addEventListener('click', personagemChandler)


}

window.onload = evento



