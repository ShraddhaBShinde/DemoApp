const slugify=require('slugify');
const Categories = require('../Models/Categories');



const createCategories=(categories,parentId=null)=>{
const categoryList=[];
let category;

if(parentId==null){
    category= categories.filter(cat=> cat.parentId==undefined);
}else{
    category=categories.filter(cat=>cat.parentId==parentId);
}
for(let cate of category){
    categoryList.push({
        _id:cate._id,
        name:cate.name,
        slug:cate.slug,
        children:createCategories(categories,cate._id)
    })
}
return categoryList
}



exports.addCategory=(req,res)=>{
 
    const {name}=req.body;
    const categoryObj={
        name,
        slug:slugify(name)
    }

    if(req.body.parentId){
        categoryObj.parentId=req.body.parentId;
    }
    const cat= new Categories(categoryObj);
    cat.save((error,category)=>{
        if(error) return res.status(401).json({error});
        if(category){
            return res.status(201).json({"message":"Created successFully",category})
        }
    })

}



exports.getCategories=(req,res)=>{
    Categories.find({}).exec((error,categories)=>{
        if(error) return res.status(400).json({error});
        if(categories){
             const categoryList=createCategories(categories);
            return res.status(201).json({categoryList})
        } 
    })
}