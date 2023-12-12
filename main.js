const express  = require("express")
const app = express()
const multer = require("multer")
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
app.set('view engine','ejs')

const Storage = multer.diskStorage({
  destination : (req,file,cb) =>{
    cb(null,'../multerupload')
  },
  filename : (req,file,cb) =>{
    cb(null,file.originalname)
  }
  
})

const upload = multer({
  storage : Storage
})

app.get("/",(req,res)=>{
  
  res.render('../views/home')
  
})

app.post("/",upload.single("image"),(req,res)=>{
  
  res.json({message : "New File added"})
  console.log(req.file)
  
})



app.listen(4000,()=>{
  console.log("Port 4000 running")
})
