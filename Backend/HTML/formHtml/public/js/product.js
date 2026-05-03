
let onSubmit =(event)=>{
     

     event.preventDefault()

     
     let product = event.target.productName.value

     const object = {
          "productName":product

     }

     axios.post('http://localhost:4000'+'/product',object)
     .then((result)=>{
          console.log(`value return from the post req : ${result.data.value}`);
     })
     // console.log("submit");
     
}