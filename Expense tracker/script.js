// Load data when the page loads
document.addEventListener('DOMContentLoaded', loadData)

// Form submission handler
document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault() // Prevent form submission

    const amount = document.getElementById('amount').value
    const category = document.getElementById('category').value
    const description = document.getElementById('description').value

    // Store the expense in local storage
    const expenses = JSON.parse(localStorage.getItem('expenses')) || []
    expenses.push({ amount, category, description })
    localStorage.setItem('expenses', JSON.stringify(expenses))
    
    // Reload the data to display the new expense
    loadData()
     
    // Clear the form fields
    document.getElementById('amount').value = ''
    document.getElementById('category').value = ''
    document.getElementById('description').value = ''
})

// Function to load and display data
function loadData() {
    const displayContainer = document.getElementById('expense-list')
    const storedData = localStorage.getItem('expenses')
    
    // Clear existing content
    displayContainer.innerHTML = ''
    
    if (!storedData) {
        displayContainer.innerHTML = '<li class="list-group-item">No expenses found.</li>'
        return;
    }
    
    const expenses = JSON.parse(storedData);
    
    if (expenses.length === 0) {
        displayContainer.innerHTML = '<li class="list-group-item">No expenses found.</li>'
        return;
    }
    
    expenses.forEach((item, index) => {
        // Create list item
        const li = document.createElement('li')
        li.className = 'list-group-item d-flex justify-content-between align-items-center'
        li.textContent = `${item.amount} - ${item.description} - ${item.category}`
        
        // Create button container
        const buttonContainer = document.createElement('div')
        
        // Create Delete button for each item
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.className = 'btn btn-danger btn-sm me-2'
        deleteBtn.addEventListener('click', function() {
            deleteExpense(index)
        })
        
        // Create Edit button for each item
        const editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.className = 'btn btn-primary btn-sm'
        editBtn.addEventListener('click', function() {
            editExpense(index)
        })
        
        // Append buttons to container and then to li
        buttonContainer.appendChild(deleteBtn)
        buttonContainer.appendChild(editBtn)
        li.appendChild(buttonContainer)
        
        // Append li to the list
        displayContainer.appendChild(li)
    })   
}

// Function to delete an expense
function deleteExpense(index) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || []
    expenses.splice(index, 1) // Remove item at specific index
    localStorage.setItem('expenses', JSON.stringify(expenses))
    loadData() // Reload the list
}

// Function to edit an expense
function editExpense(index) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || []
    const item = expenses[index]
    
    const newAmount = prompt('Enter new amount:', item.amount)
    const newCategory = prompt('Enter new category:', item.category)
    const newDescription = prompt('Enter new description:', item.description)
    
    // Update the expense at the specific index
    if (newAmount && newDescription && newCategory) {
        expenses[index] = { 
            amount: newAmount, 
            category: newCategory, 
            description: newDescription 
        }
        localStorage.setItem('expenses', JSON.stringify(expenses))
        loadData() // Reload the list
    }
}

