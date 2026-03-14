

const para = document.createElement('p')

const paraText = document.createTextNode('Total fruits: 4')

para.appendChild(paraText);

const divs = document.getElementsByTagName('div')

const divSec = divs[1]



const fruits = document.querySelector('.fruits')

divSec.insertBefore(para, fruits)

const divFirst = divs[0]

const mainHeadingPara = document.createElement('h3')

const headingText1 = document.createTextNode('Buy high quality organic fruits online')

mainHeadingPara.appendChild(headingText1)

para.className = 'FruitCount'
para.id = 'fruits-total'
para.setAttribute('title', 'fruitTotal')


const header = document.querySelector('#header')

header.append(mainHeadingPara)

mainHeadingPara.style.fontStyle='italic'



