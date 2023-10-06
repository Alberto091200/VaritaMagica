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
 

//Cambia parrafos

let parrafos = document.querySelectorAll('section p')

for (let i = 0; i < parrafos.length; i++){
    parrafos[i].addEventListener('click', function(event){
        event.target.style.backgroundColor ="grey"
        event.target.style.color = "white"
    })
}



