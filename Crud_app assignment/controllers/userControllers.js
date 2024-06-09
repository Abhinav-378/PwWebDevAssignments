const User = require('../models/userModel.js')

exports.home = (req,res)=>{
    res.send("Home Page")
}

exports.registerUser = async(req,res)=>{
    try{
        const{name, email, password} = req.body

        if(!name || !email || !password){
            throw new Error("Fill all the fields")
        }

        const userExists = await User.findOne({email})
        if(userExists){
            throw new Error("User already exists")
        }

        const user = await User.create({
            name,
            email,
            password
        })
        res.status(201).json({
            success: true,
            message: "User registered Successfully",
            user
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message,
            
        })
    }
}
exports.loginUser = async(req,res)=>{
    try{
        const{email, password} = req.body

        if(!email || !password){
            throw new Error("Fill all the fields")
        }

        const userExists = await User.findOne({email})
        if(!userExists){
            throw new Error("User does not exists")
        }
        if(userExists.password != password){
            throw new Error("Incorrect Password")
        }
        
        res.status(201).json({
            success: true,
            message: `User Login Successful. Welcome ${userExists.name}`,
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message,
            
        })
    }
}