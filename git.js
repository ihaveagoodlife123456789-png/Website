let word = document.querySelector('h1')
let randomNum = () => {
 return Math.floor(Math.random() * 256)
}

const randomColor = () => {
     word.style.color = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
}

word.addEventListener('click', randomColor)