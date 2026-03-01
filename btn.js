
//adding edit btn to each li element
const list = document.querySelectorAll('li')

list.forEach(li => {
    const editBtn = document.createElement('button')

    editBtn.textContent = 'Edit'

    editBtn.className = 'edit-btn'

    li.append(editBtn)
    
})

//adding event listener to edit btn
const form = document.querySelector('form')
const fruits = document.querySelector('.fruits')
//
form.addEventListener('submit', function (event)
{
    event.preventDefault();

    const fruitToAdd = document.getElementById('fruit-to-add')

    const newLi = document.createElement('li')

    newLi.className ='fruit'

//adding delete and edit btn to new li element
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>'+'<button class="edit-btn">Edit</button>'


    

    fruits.appendChild(newLi)

    fruitToAdd.value=''

})

fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement

        fruits.removeChild(fruitToDelete)
    }
})






