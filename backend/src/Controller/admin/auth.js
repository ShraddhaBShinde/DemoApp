const User = require('../../Models/user');
const jwt=require('jsonwebtoken')


exports.signin=(req,res)=>{
    User.findOne({email:req.body.email}).exec((error,user)=>{
        if(error) return res.status(401).json({message:"something went wrong"});
        if(user){
            if(user.authenticate(req.body.password) && user.role==='admin'){
                const token =jwt.sign({_id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1d'})
                const {_id,firstName,lastName,role,email,fullName,gender}=user;
                return res.status(200).json({token:token,user:{_id,firstName,lastName,role,email,gender,fullName}});
            }else{
                return res.status(400).json({message:"Error in login details"});
            }
        }
    })
}

exports.signup=(req,res)=>{
     User.findOne({email:req.body.email}).exec((error,user)=>{
        if(user) return res.status(404).json({message:"User already Exist"});
        
        const {firstName,lastName,password,contactNumber,email,terms,profilePicture,gender}=req.body
        const _user=new User({ firstName, lastName, email,terms, gender,role:'admin',username: Math.random().toString(), contactNumber, password, profilePicture })
       
        _user.save((error,data)=>{
            if(error) return res.status(400).json({message:"User not created"})
            if(data) return res.status(200).json({message:"Admin created successFully"});
        })

     })
}