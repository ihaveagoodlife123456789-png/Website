let wordOne = document.querySelector('h1')
let wordTwo = document.querySelector('h2')
let wordFour = document.querySelector('h4')
//let image = document.querySelector('#first, #second')
let image = ['#first', '#second']

let added = 0

let randomNum = () => {
 return Math.floor(Math.random() * 256)
}

const increment = () => {
     return incremented(added++)
}

const incremented = (func) => {
     if (func > 99) {
          /*wordFour.innerHTML = '100/100'
          wordTwo.style.display = 'block'*/
          image.forEach(loop => {
               document.querySelector(loop).style.display = 'block'
          })
     } else {
     wordFour.innerHTML = `${func}/100`
     }
}


const randomColor = () => {
     wordOne.style.color = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
}

wordOne.addEventListener('click', randomColor)
wordOne.addEventListener('click', increment)