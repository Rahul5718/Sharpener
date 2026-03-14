// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault()

    const username = event.target.username.value
    const email = event.target.email.value
    const phone = event.target.phone.value

    const userObj = {
        username: username,
        email: email,
        phone:phone
    }

    localStorage.setItem(userObj.email, JSON.stringify(userObj))

    displayUser()

    // event.target.reset()
}
function displayUser() {
    const userList = document.getElementById('listOfUsers')

    const keys = Object.keys(localStorage)

    keys.forEach(key => {
        const userdetails = localStorage.getItem(key)


        const user = JSON.parse(userdetails)

        const li = document.createElement('li')
        li.textContent = `Username:${user.username},Email:${user.email},Phone:${user.phone}`

        userList.appendChild(li)

    })
}
module.exports = handleFormSubmit

