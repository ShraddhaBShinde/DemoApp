const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },slug:{
          type:String,
          unique:true,
          required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
     type:String,
     required:true,
     trim:true
    }, 
    offerPrice:{
        type:Number,
    },
    productPicture:[
        {img:{type:String}}
    ],
    quantity:{
        type:Number,
        required:true
    },
    reviews:[
        {
            userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
            review:String
        }
    ],category:{
         type:mongoose.Schema.Types.ObjectId,ref:'Category',
         required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,ref:'User'
    },
    updatedAt:{
       Date
    }

},{timestamps:true});


module.exports=new mongoose.model('Product',productSchema);