const images = document.getElementById('img')
const img = document.querySelectorAll('#img img')

let idx = 0

function carrossel(){
    idx++

    if(idx > img.length -1){
        idx = 0
    }

    images.style.transform = `translate(${-idx * 100}%)`
}

setInterval(carrossel, 2000)