const Post = require("../models/postModel.js")


exports.getAllPosts = async (req,res,next)=>{
    try {
        const posts  = await Post.find();
        res.send({
            status:"success",
            results: posts.length,
            data:{
                posts
            }            
        })
    } catch (error) {
        res.status(500).send({
            status:"fail",
        })
    }
}

exports.getOnePost = async (req,res,next)=>{
    try {
        const posts  = await Post.find(req.params.id);
        res.send({
            status:"success",
            results: posts.length,
            data:{
                posts
            }            
        })
    } catch (error) {
        res.status(500).send({
            status:"fail",
        })
    }
}


exports.createPost = async (req,res,next)=>{
    try {
        const posts  = await Post.create(req.body)
        res.send({
            status:"success",
            data:{
                posts
            }            
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            status:"fail",
        })
    }
}


exports.updatePost = async (req,res,next)=>{
    try {
        const posts  = await Post.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators: true
        })
        res.send({
            status:"success",
            data:{
                posts
            }            
        })
    } catch (error) {
        res.status(500).send({
            status:"fail",
        })
    }
}


exports.deletePost = async (req,res,next)=>{
    try {
        const posts  = await Post.findByIdAndDelete(req.params.id)
        res.send({
            status:"success",          
        })
    } catch (error) {
        res.status(500).send({
            status:"fail",
        })
    }
}