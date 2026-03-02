// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault()

    const username = event.target.username.value
    const email = event.target.email.value
    const phone = event.target.phone.value
    const userObj = {
        username,
        email,phone
    }
    localStorage.setItem(userObj.email,JSON.stringify(userObj)
    )

    deleteItem(userObj)
}



function deleteItem(userObj) {

    const elm = document.createElement("li")

    elm.textContent = `${userObj.username}-${userObj.email}-${userObj.phone}`

    
    const deletebtn = document.createElement('button')

    deletebtn.textContent = "Delete"

    deletebtn.className = "delete-btn"
    

    deletebtn.onclick = () => {
        localStorage.removeItem(userObj.email)
    elm.remove()

    }

    elm.appendChild(deletebtn)
    document.getElementById("listOfUsers").appendChild(elm)
}

module.exports = handleFormSubmit
