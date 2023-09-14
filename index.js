const bodyParser = require('body-parser');
const express = require('express')
const {  mongoose, Schema } = require('mongoose')
const app = express();

const port = 5000;
 // middle ware
  app.use(bodyParser.urlencoded({extended:false}));
  app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/Amazon",{}).then(()=>{

}).catch((e)=>{
console.log(e);
})

const productSchema = new mongoose.Schema({
  name:String,
  price:Number,
  
})
const Product = new mongoose.model("Product" ,productSchema ); 


app.get("/", (req , res)=>{
   
  res.send("hi");
  // const ss = await Product.create(req.body);
  
  // res.status(200).json({
  //   success:true,
  //   ss
  // })
 
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})