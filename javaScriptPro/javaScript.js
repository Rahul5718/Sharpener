const API_URL = 'https://crudcrud.com/api/399c091b447e4b4db4dc4861ca142087/candys';

function handleSubmit(event) {
    event.preventDefault();

    const candyObj = {
        name: document.getElementById('candyName').value,
        price: document.getElementById('candyPrice').value,
        description: document.getElementById('candyDescription').value,
        quantity: document.getElementById('quantity').value || 200 // Default to 200 as requested
    };
    let editId = null

    if(editId){
        axios.put(`${API_URL}/${editId}`, candyObj)
            .then((response) => {
                console.log("Updated:", response.data);
                displayData(); 
                event.target.reset(); 
                editId = null; // Reset editId  
                document.querySelector('button[type="submit"]').textContent = 'Add Candy'; // Reset button text
            })
            .catch((error) => console.error("Update Error:", error));
    }else{
    axios.post(API_URL, candyObj)
        .then((response) => {
            console.log("Success:", response.data);
            displayData(); 
            event.target.reset(); // Clear the form
        })
        .catch((error) => console.error("Post Error:", error));
    }
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
    document.getElementById('candyName').value = candy.name;
    document.getElementById('candyPrice').value = candy.price;
    document.getElementById('candyDescription').value = candy.description;
    document.getElementById('quantity').value = candy.quantity;

    editId = candy._id; // Store the ID for later use in the PUT request
    
   document.querySelector('button[type="submit"]').textContent = 'Update Candy'; // Change button text to indicate update mode

   window.scrollTo(0, 0); // Scroll to top to show the form
}

// Load data when page opens
document.addEventListener('DOMContentLoaded', displayData);

