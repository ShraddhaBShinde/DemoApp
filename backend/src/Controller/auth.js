const User = require('../Models/user')
const jwt=require('jsonwebtoken')




exports.signup=(req,res)=>{
    User.findOne({ email: req.body.email }).exec((error, user) => {
        if (user) return res.status(404).json({
            message: 'User Already Registered'
        });
        const { firstName, lastName, email, contactNumber, password, profilePicture,gender,terms } = req.body

        const _user = new User({ firstName, lastName, email, gender,terms,username: Math.random().toString(), contactNumber, password, profilePicture })
    
    _user.save((error, data) => {
        if (error) {
            return res.status(400).json({ message: "Something went wrong" })
        }
        if (data) {
            return res.status(201).json({ message: "User created SuccessFully ...!" });
        }
    })
})
}

exports.signin=(req,res)=>{
    User.findOne({email:req.body.email}).exec((error,user)=>{
        if(error) return res.status(400).json({error});

        if(user){
            
            if(user.authenticate(req.body.password)){
                
                const token=jwt.sign({_id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1d'})
                const {_id,firstName,lastName,role,email,fullName,gender}=user;
           res.status(200).json({
            token:token,
            user:{_id,firstName,lastName,role,email,fullName,gender}
           })
            }else{
                return res.status(400).json({message:"Error in login details"});
            }
        }
    })
}

