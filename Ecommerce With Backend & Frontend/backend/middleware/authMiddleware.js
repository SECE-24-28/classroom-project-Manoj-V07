const jsonwebtoken = require('jsonwebtoken')

const auth = (req,res,next) => {
    const token = req.headers.authorization;
    if(!token) {
        return res.status(401).json({ message : "Unauthourized User"})
    }

    try {
        const bearerToken = token.split(" ")[1]
        console.log("Bearer Token:" , bearerToken)
        const decoded = jsonwebtoken.verify( bearerToken , process.env.SECRET_KEY)
        req.userData = {id : decoded.id , email : decoded.email}
        console.log("Decoded Token:" , decoded)
        next()
    } catch(err) {
        return res.status(401).json({ message : "Unauthourized User" , error : err.message})
    }
}

module.exports = auth