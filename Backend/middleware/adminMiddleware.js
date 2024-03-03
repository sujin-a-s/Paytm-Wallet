const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../utils/constants")

function adminMiddleware (req,res,next){


    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer")){
        res.json({
            message : "Access Denied"
        })
    }
    
    const tokenArray = authHeader.split(" ")
    const token = tokenArray[1]
    const decoded = jwt.verify(token ,JWT_SECRET )

    console.log("decoded:",decoded)
    if(!decoded.userId){
        return res.json({
            message : "access denied"
        })
    }else{
        req.userId  = decoded.userId
        next()
    }
}

module.exports = {
    adminMiddleware
}