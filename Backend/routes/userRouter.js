const express = require("express")
const zod = require("zod")
const { User, Account } = require("../db/schema")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../utils/constants")
const { adminMiddleware } = require("../middleware/adminMiddleware")
const router = express.Router()






const signupSchema = zod.object({
    username : zod.string(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
})

router.post("/signup", async (req, res) => {

    const body = req.body;
    const validationResult = signupSchema.safeParse(body);
    
    if (!validationResult.success) {
        return res.status(400).json({
            message: "Incorrect inputs"
        });
    }
   
    const existingUser = await User.findOne({
        username: body.username,
    });
    if (existingUser) {
        return res.json({
            message: "Email already taken"
        });
    }

    const dbUser = await User.create(body);
    const userId = dbUser._id

    await Account.create({
        userId,
        balance : 1 + Math.random()*1000
    })

    const token = jwt.sign({ userId }, JWT_SECRET);
    res.json({
        message: "User created successfully",
        token: token
    });
});







const signinSchema = zod.object({
    username : zod.string(),
    password : zod.string()
})

router.post("/signin" ,async(req,res)=>{
    const body = req.body
    const validationResult = signinSchema.safeParse(body)

    if(!validationResult.success){
        return res.json({
            message : "incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username : body.username
    })

    if(existingUser){
        const token = jwt.sign({usrId : existingUser._id},JWT_SECRET)
        res.json({
            message : "user signed in successfully",
            token : token
        })
    }else{
        return res.json({
            message : "user doesnt exist. Please signUp"
        })
    }
})






const updateuserSchema = zod.object({

    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional()

})

router.put("/updateuser", adminMiddleware, async (req, res) => {
    
    const validationResult = updateuserSchema.safeParse(req.body);
    if (!validationResult.success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }
    console.log(req.userId)
    await User.updateOne({_id : req.userId},req.body)

    res.json({
        message:"Updatd Succesfully"
    })
    
})




router.get("/bulk",async(req,res)=>{

    const filter = req.query.filter || ""

    const filteredUsers = await User.find({
        $or : [{
            firstName : {
                "$regex" : filter 
            }
        },
        {
            lastName : {
                "$regex" : filter
            }
        }]
    })

    res.json({
        users : filteredUsers.map(item => ({
            username : item.username,
            firstName : item.firstName,
            lastName : item.lastName,
            _id : item._id
    
        }))
    })

})




module.exports = router