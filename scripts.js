//Evitar comportamiento por defecto al hacer click

const html = document.querySelector('html')

html.addEventListener('click', function(event){
    event.preventDefault()
})


//Cambia la imagen por uno de los GIFS

let img = document.querySelectorAll('img')

for (let i = 0; i < img.length; i++){
    img[i].addEventListener('click', function(event){
        event.target.src ="assets/magic-1.gif"
    })
}
 
//Cambia bloques de "article"

let articulo = document.querySelectorAll('article')

for (let i = 0; i < articulo.length; i++){
    articulo[i].addEventListener('click', function(event){
        event.target.style.backgroundColor ="blue"
    })
}

//Cambia parrafos

let parrafos = document.querySelectorAll('section p')

for (let i = 0; i < parrafos.length; i++){
    parrafos[i].addEventListener('click', function(event){
        event.target.style.backgroundColor ="red"
        event.target.style.color = "white"
    })
}

//Cursor por encima (imagenes)

for (let i = 0; i < img.length; i++){
    img[i].addEventListener('mouseenter', function(event){
        event.target.src ="assets/abracadabra.gif"
    })
}

//Cursor por encima (parrafos)

for (let i = 0; i < parrafos.length; i++){
    parrafos[i].addEventListener('mouseenter', function(event){
        event.target.style.backgroundColor ="pink"
        event.target.style.color = "blue"
    })
}

//Cursor por encima (article)

for (let i = 0; i < articulo.length; i++){
    articulo[i].addEventListener('mouseenter', function(event){
        event.target.style.backgroundColor ="green"
    })
}