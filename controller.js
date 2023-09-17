const userModel=require('./model');

const userController=async(req,res)=>{
   
    try {
        const {name,email,phone,date,gender}=req.body;
        const existingUser=await userModel.findOne({email})
        if(existingUser){
        return res.status(200).send({
            success:false,
            message:"You have already added data with  email"
        })
        }
        let users=await new userModel({name,email,phone,date,gender}).save();
        res.status(201).send({
            success:true,
            message:"User saved successfully",
            users:users.name
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,message:'Error in Add data',
            error
        })
    }
}
const getAllData=async(req,res)=>{
    let users;
   try {
     users=await userModel.find()
     res.status(201).send({
        success:true,message:' users found sucessfully',
        users
     })
    
   } catch (error) {
    res.status(500).send({
        success:false,message:'No users found',
        users
     })
   }
}
const getById=async(req,res)=>{
    let id=req.params.id;
    let users;
    try {
        users=await userModel.findById(id)
        if(!users){
            res.status(500).send({
                success:false,
                message:"no users found with this id",
    
            })
        }
        res.status(200).send({
            success:true,
            message:"User found with this id",
            users
        })

        
    } catch (error) {
       console.log(error) 
    }
    
}
const updateUsers=async(req,res)=>{
    let id=req.params.id;
    let users;
    try {
        const {name,email,phone,date,gender}=req.body;
        newusers=await userModel.findByIdAndUpdate(id,{name,email,phone,date,gender})
        users=await newusers.save()
        if(!users){
            res.status(500).send({
                success:false,
                message:"user is not updated",
    
            })
        }
        res.status(200).send({
            success:true,
            message:"User updated",
            users
        }) 
    } catch (error) {
        
    }
}
const deleteUsers=async(req,res)=>{
    let id=req.params.id;
    let users;
    try {
        users=await userModel.findByIdAndDelete(id)
        if(!users){
            res.status(500).send({
                success:false,
                message:"no users found with this id",
    
            })
        }
        res.status(200).send({
            success:true,
            message:"User Deleted",
            users
        })

        
    } catch (error) {
       console.log(error) 
    }
    
}

module.exports.userController=userController
module.exports.getAllData=getAllData
module.exports.getById=getById
module.exports.updateUsers=updateUsers
module.exports.deleteUsers=deleteUsers