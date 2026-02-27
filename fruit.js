// Write your code below:
const header = document.getElementById('header');
header.style.backgroundColor = 'green'
header.style.color = 'orange'
header.style.borderTopLeftRadius = "8px"
header.style.borderTopRightRadius = "8px"

header.style.borderBottom = "2px solid orange"

const maiHeading = document.getElementById('main-heading')

maiHeading.textContent = 'Fruit World'
maiHeading.style.color='orange'

const basketHeding = document.getElementById('basket-heading')
basketHeding.style.color = 'green'

const thanks = document.getElementById('thanks')

thanks.innerHTML='<p>Please visit us again</p>'