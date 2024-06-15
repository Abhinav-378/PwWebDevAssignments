const userModel = require('../model/userSchema.js') 
const emailValidator = require('email-validator')
const bcrypt = require('bcryptjs')

exports.home = (req,res)=>{
    res.status(200).json({data:'JWTauth server'})
}

exports.signup = async(req,res,next) => {
    try
    {
        const {name, email, password, confirmPassword} = req.body;
        
        if(!name || !email || !password || !confirmPassword){
            res.status(400).json({
                success: false,
                message: 'Fill all the fields'
            })
        }

        const validEmail = emailValidator.validate(email)
        if(!validEmail){
            return res.status(400).json({
                success: false,
                message:'Please enter a valid email Id'
            })
        }

        if(password !== confirmPassword){
            return res.status(400).json({
                success: false,
                message:'Password and confirm password must be same'
            })
        }

        const userInfo = userModel(req.body);
        const result = await userInfo.save()

        return res.status(200).json({
            success: true,
            data:result,
            message: 'Signup successful'
        })
    }
    catch(err){
        if(err.code === 11000){ //duplicate entry 
            return res.status(400).json({
                success: false,
                message:'Account already exists with provided email id',
                
            })
        }
        
        res.status(400).json({
            success: false,
            message: err.message,
            
        })
    }

}
exports.signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Fill all the fields'
            });
        }

        const user = await userModel.findOne({ email }).select('+password');
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        const token = user.jwtToken();
        user.password = undefined;

        const cookieOption = {
            maxAge: 24 * 60 * 60 * 1000, 
            httpOnly: true
        };
        res.cookie("token", token, cookieOption);
        return res.status(200).json({
            success: true,
            data: { name: user.name, email: user.email },
            message: 'Signin successful'
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
    }
}

exports.getUser = async(req,res,next) => {
    const userId = req.user.id;
    try
    {
        const user = await userModel.findById(userId);
        return res.status(200).json({
            success: true,
            data: user
        })
    }
    catch(err){
        
        res.status(400).json({
            success: false,
            message: err.message,
            
        })
    }

}
exports.logout = async(req,res,next) => {
    
    try
    {
        const cookieOption = {
            expires:new Date(),
            httpOnly: true
        };
        res.cookie("token",null, cookieOption)

        return res.status(200).json({
            success: true,
            message:"Logged Out"
        })
    }
    catch(err){
        
        res.status(400).json({
            success: false,
            message: err.message,
            
        })
    }

}

