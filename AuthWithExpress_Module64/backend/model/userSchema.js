const mongoose = require('mongoose')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
        minLength:[2,'Name must be atleast 2 char'],
        maxLength:[50,'Name must be atmost 50 char'],
        trim: true
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true, 
        unique:[true,'already registered']
    },
    password:{
        type: String,
        select:false,
        required: [true, 'Password is required']
    },
    forgotPasswordToken:{
        type: String
    },
    forgotPasswordExpiryDate:{
        type:Date
    }

},
{
    timestamps: true
})

userSchema.methods = {
    jwtToken() {
        return JWT.sign(
            {id:this._id, email: this.email},
            process.env.SECRET,
            { expiresIn: '24h'}
        ) 
    }
}
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next()
    }
    this.password = await bcrypt.hash(this.password,10)
    return next();
})

module.exports = mongoose.model("user",userSchema)