const fs=require('fs')

const path = require('path')

const getproducts = ()=>{
        const filePath = path.join(__dirname,'..','data','product.json')
        const data = fs.readFileSync(filePath,'utf8')
        return JSON.parse(data)
}

const getproductbyid = (id)=>{
        const products = getproducts()
        return products.filter(product => product.id === id)
}

const addproduct = (product)=>{
        const products = getproducts()
        products.push(product)
        const filePath = path.join(__dirname,'..','data','product.json')   
          fs.writeFileSync(filePath,JSON.stringify(products,null,2))
}

module.exports={
     getproducts,
     getproductbyid,
     addproduct
}