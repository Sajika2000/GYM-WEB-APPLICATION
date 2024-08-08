import express, { Router } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {sendEmail} from "./utils/sendEmail.js"


dotenv.config()

const app=express()
const router = express.Router();
app.use(cors(
    {
        origin:[process.env.FRONTEND_URL ],
        methods: ["POST"],
        credentials:true
    }
))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

router.post("/send/mail",async(req,res,next) =>{
    const {name,email,message} = req.body;
    if(!name || !email || !message){
        return next(
            res.status(400).json({
                success: false,
                message:"Please provide all details",
            })
        )
    }
    try{
        await sendEmail({
            email:"sdnagodavithana@std.appsc.sab.ac.lk",
            subject:"GYM WEBSITE CONTACT",
            message,
            userEmail:email,
        });
        res.status(200).json({
            success:true,
            message:"Message sent successfully."
        })

    }catch(error){
        res.status(500).json({
            success:true,
            message:"Internal Server Error"
        })

    }

    



})

app.use(router)

const PORT=process.env.PORT || 3000





app.listen(PORT,()=>(console.log(`Server is running on ${PORT}`)))

