const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title : {
        type:String,
        required:true
    },
    complate : {
        type:Boolean,
        default:false
    },
    imgUrl : {
        type:String,
    }
})

const todoModel = mongoose.model('todos',todoSchema);

module.exports = todoModel;