document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const amount = document.getElementById('amount').value
    const category = document.getElementById('category').value
    const description = document.getElementById('description').value

    // Create a new expense item
    const expenseItem = document.createElement('li')
    expenseItem.textContent = `${amount}: ${description} - ${category}`

     // Add the expense item to the list
     document.getElementById('expense-list').appendChild(expenseItem)
     
     // Clear the form fields
     document.getElementById('amount').value = ''
     document.getElementById('category').value = ''
     document.getElementById('description').value = ''

     //store the expense in local storage
     const expenses = JSON.parse(localStorage.getItem('expenses')) || []
     expenses.push({ amount, category, description })
     localStorage.setItem('expenses', JSON.stringify(expenses))
     console.log("data sore");
     
   
     const displayContainer = document.getElementById('expense-list')

// Call the function to load data when the page loads
function loadData() {
    const storedData = localStorage.getItem('expenses')
     if (!storedData) {
            displayContainer.innerHTML = '<li>No expenses found.</li>'
               return;
     }
     const expenses = JSON.parse(storedData);
     displayContainer.innerHTML = ''
     expenses.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = `${item.amount} - ${item.description} (${item.category})`
        li.className = 'expense-item'
        displayContainer.appendChild(li)
    });   

}
//button delete data from local storage for each list item
const btn = document.createElement('button')
btn.textContent = 'Delete'
btn.className = 'btn btn-danger btn-sm float-end'
btn.addEventListener('click', function() {
     let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
     expenses = expenses.filter(item => {
        return item.description !== expense.description; 
    });
     localStorage.setItem('expenses', JSON.stringify(expenses))

    localStorage.removeItem()


})
displayContainer.appendChild(btn)
window.addEventListener('load', loadData)

})
