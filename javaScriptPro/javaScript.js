const API_URL = 'https://crudcrud.com/api/24c9e5f08c35466ebd2dc4384c07df6d/apoint';

function handleSubmit(event) {
    event.preventDefault();

    const candyObj = {
        name: document.getElementById('candyName').value,
        price: document.getElementById('candyPrice').value,
        description: document.getElementById('candyDescription').value,
        quantity: document.getElementById('quantity').value || 200 // Default to 200 as requested
    };

    axios.post(API_URL, candyObj)
        .then((response) => {
            console.log("Success:", response.data);
            displayData(); // Refresh list after adding
            event.target.reset(); // Clear the form
        })
        .catch((error) => console.error("Post Error:", error));
}

function displayData() {
    axios.get(API_URL)
        .then((response) => {
            const candyList = document.getElementById('candyList');
            candyList.innerHTML = ''; 

            response.data.forEach((candy) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${candy.name} - $${candy.price} - ${candy.description} (Qty: ${candy.quantity}) `;

                // Create Delete Button
                const delBtn = document.createElement('button');
                delBtn.textContent = 'Delete';
                delBtn.onclick = () => deleteCandy(candy._id);

                // Create Edit Button
                const editBtn = document.createElement('button');
                editBtn.textContent = 'Edit';
                editBtn.onclick = () => editCandy(candy);

                listItem.appendChild(delBtn);
                listItem.appendChild(editBtn);
                candyList.appendChild(listItem);
            });
        })
        .catch((error) => console.error("Get Error:", error));
}

function deleteCandy(id) {
    axios.delete(`${API_URL}/${id}`)
        .then(() => displayData())
        .catch((err) => console.error(err));
}

function editCandy(candy) {
    const newName = prompt('Enter new name:', candy.name);
    const newPrice = prompt('Enter new price:', candy.price);
    const newDesc = prompt('Enter new description:', candy.description);
    
    const updatedCandy = {
        name: newName,
        price: newPrice,
        description: newDesc,
        quantity: candy.quantity
    };

    // Note: CrudCrud requires you to remove _id from the body for PUT requests
    axios.put(`${API_URL}/${candy._id}`, updatedCandy)
        .then(() => displayData())
        .catch((err) => console.error(err));
}

// Load data when page opens
document.addEventListener('DOMContentLoaded', displayData);

