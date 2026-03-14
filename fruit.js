// // Write your code below:
// const header = document.getElementById('header');
// header.style.backgroundColor = 'green'
// header.style.color = 'orange'
// header.style.borderTopLeftRadius = "8px"
// header.style.borderTopRightRadius = "8px"

// header.style.borderBottom = "2px solid orange"

// const maiHeading = document.getElementById('main-heading')

// maiHeading.textContent = 'Fruit World'
// maiHeading.style.color='orange'

// const basketHeding = document.getElementById('basket-heading')
// basketHeding.style.color = 'green'

// const thanks = document.getElementById('thanks')

// thanks.innerHTML='<p>Please visit us again</p>'
// Write the code as shown in the video below:


const header = document.querySelector('#header')
header.style.textAlign = 'right'
header.style.paddingRight = '15px'

header.style.borderTopLeftRadius = '8px'
header.style.borderTopRightRadius = '8px'

const fruits = document.querySelector('.fruits')

fruits.style.margin = '30px'
fruits.style.padding = '30px'
fruits.style.backgroundColor = 'grey'
fruits.style.width = '50%'
fruits.style.borderRadius = '5px'
fruits.style.listStyleType = 'none'

const basketHeading = document.querySelector('h2')
basketHeading.style.marginLeft = '30px'

const fruit = document.querySelectorAll('.fruit')

for (let i = 0; i < fruit.length; i++) {
    fruit[i].style.backgroundColor = 'white'
    fruit[i].style.padding = '10px'
    fruit[i].style.margin = '10px'
    fruit[i].style.borderRadius = '5px'
    
}

const oddSelector = document.querySelectorAll('.fruit:nth-child(odd)')

for (let i = 0; i < oddSelector.length; i++){
    oddSelector[i].style.backgroundColor='lightgray'
}




// Write answer to the questions asked below:


basketHeading.style.color = 'brown'

const evenSelector = document.querySelectorAll('.fruit:nth-child(even)')
for (let i = 0; i < evenSelector.length; i++) {
    evenSelector[i].style.backgroundColor = 'brown'
    evenSelector[i].style.color='white'
}

