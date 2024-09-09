const todoModel = require('../models/todo/todo-model')
let todoStorage = [];
const defaultController = async (req , res) =>{
    let data =await todoModel.find({});
    res.render('index',{todos:data});
}
const addTodoController = async (req , res) => {
    console.log("multer file>>>",req.body.fname , req.file);
    const data = {
        title: req.body.fname,
        imgUrl: req.file.path
    }
    
    let todo = new todoModel(data);
    await todo.save();
    console.log("todo",todo);
    
    res.redirect('/');
}
const editTodoController =async (req , res)=> {
    console.log("edit controller");
    const id = req.params.id;
    let data =await todoModel.findOne({_id:id});
    console.log('SingleRec',data);
    res.render('edit',{data});
    
}
const updateTodoController =async (req , res) => {
    console.log("updatedRec",req.params.id);
    let updatedTodo = await todoModel.findByIdAndUpdate(req.params.id,req.body,{name:true})
    console.log("updated todo",updatedTodo);
    res.redirect('/');    
}
const deleteTodoController =async(req , res) => {
    console.log("delete controller");
    let DeletTodo = await todoModel.findByIdAndDelete(req.params.id);
    console.log("delet todo >>" , DeletTodo);
    
    res.redirect('/');
}
module.exports = {defaultController, addTodoController,editTodoController,updateTodoController,deleteTodoController};