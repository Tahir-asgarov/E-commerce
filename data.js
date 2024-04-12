// API - Application Programming Interface

//Sinxron , Asinxron 


//multi thread - paralel isleyen funksiyalar

//JSON JavaScript  Object Notation -"backend ve frontend arasi rabite"

const MehsullarinYerleseceyiYer = document.querySelector("#mehsullar")

window.addEventListener("DOMContentLoaded", getMelumatlariGetir)


async function getMelumatlariGetir() {
    const unvan = "https://fakestoreapi.com/products"

    try {
        const cavab = await fetch(unvan) //sayta request gonderir(istek)
        console.log(cavab)

        const mehsullar = await cavab.json()
        console.table(mehsullar)


    


        for (let i = 0; i < mehsullar.length; i++) {

            MehsullarinYerleseceyiYer.innerHTML += `
       
        <div class="col-12 col-md-6 col-lg-4">
        <div class="card d-flex my-2 p-4" >
            <img src="${mehsullar[i].image}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-evenly">
              <h5 class="card-title">${mehsullar[i].title.slice(0,30)}</h5>
              <p class="card-text">${mehsullar[i].description.slice(0,30)}... </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div> `

        }


    }

    catch (err) {
        console.log("serverde bas veren xeta: ", err.message)
    }


    finally {
        console.log("serverde xeta yarandi")
    }




}



const overlayMenuDivi = document.querySelector(".overlay-menu")

const navbarButtonu = document.querySelector(".navbar-toggler-icon")

const closeMenyu = document.querySelector(".bi-x-circle")

navbarButtonu.addEventListener("click", navbarMenyunuAc)
closeMenyu.addEventListener("click", navbarMenyuBagla )


function navbarMenyunuAc(){
    overlayMenuDivi.classList.add("aktiv")
}


function navbarMenyuBagla(){
    overlayMenuDivi.classList.remove("aktiv")

}
