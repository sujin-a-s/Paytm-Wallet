const express = require("express")
const { Account } = require("../db/schema")
const { adminMiddleware } = require("../middleware/adminMiddleware")
const { default: mongoose } = require("mongoose")
const router = express.Router()

router.get("/balance",adminMiddleware, async(req,res)=>{
    const account = await Account.findOne({
        userId : req.userId
    })
    res.json({
        balance : account.balance
    })
})


router.post("/transfer",adminMiddleware,async(req,res)=>{

    const session = await mongoose.startSession()
    session.startTransaction()

    const{to,amount} = req.body

    const sender = await Account.findOne({userId : req.userId})

    if(!sender || sender.balance < 0){
        await session.abortTransaction()
        return res.json({
            message : "insufficient balance"
        })
    }

    const receiver = await Account.findOne({userId : to})

    if(!receiver){
        await session.abortTransaction()
        return res.json({
            message : "invalid account"
        })
    }

    await Account.updateOne({userId : req.userId},{$inc : {balance : - amount}})

    await Account.updateOne({userId : to},{$inc : {balance : amount}})


    await session.commitTransaction()
    res.json({
        message : "transaction succesful"
    })

})

module.exports = router