const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"post must have the title"]
    },
    content:{
        type:String,
        required:[true,"post must have the text content"]
    },
})

module.exports = mongoose.model("Post",postSchema)