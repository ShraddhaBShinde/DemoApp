const Product=require('../Models/Products');
const shortid=require('shortid');
const slugify=require('slugify');



exports.createProduct=(req,res)=>{
    // res.status(200).json({file:req.files,body:req.body})
    const {name,description,price,category,quantity}=req.body
  let productPicture=[];

  if(req.files.length>0){
    productPicture= req.files.map(file=>{
        return{img:file.filename}
    })
  }


      const product=new Product({
        name,
        category,
        productPicture,
        price,
        slug:slugify(name),
        description,
        quantity,
        createdBy:req.user._id,
    })
    // console.log(req.user)
      product.save((error,product)=>{
        if(error) return res.status(400).json({error})
if(product){
    return res.status(200).json({product});
}

      })
   
 

}