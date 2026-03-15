const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios
    .get("https://crudcrud.com/api/24c9e5f08c35466edb2dc4384c07df6d/totd")
    .the((res) => console.log(res))
  .catch((err)=>console.log(err))
}

function postTodo() {
  // Write your code here
  axios
    .post("https://crudcrud.com/api/24c9e5f08c35466edb2dc4384c07df6d/todo",{

      title: "Meet Doctor",
      completed:false
    })
    .then((res) => console.log(res))
    .catch((err)=>console.log(err))
  
}

function putTodo() {
  // Write your code here
  axios
  .put("https://crudcrud.com/api/24c9e5f08c35466edb2dc407df6d/todo/")
}

function deleteTodo() {
  // Write your code here
}
