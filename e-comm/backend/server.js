import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import AuthController from "../"
const PORT = 3000;

    
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected to MongoDb")
}).catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.send("hello world from server")
})
app.use("/api/auth",AuthController)

app.listen(PORT,()=>{
    console.log('server is listening on port 3000')
})