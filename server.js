require('dotenv').config();

const mongoose=require('mongoose');
mongoose.connect(process.env.DATABASE,{
    useUnifiedTopology: true,
    useNewUrlParser:true

});

mongoose.connection.on('error',(err)=>{
    console.log("mongoose error"+ err.message);
});

mongoose.connection.once('open',()=>{
    console.log("mongo connected")
})

// all models
require('./models/User');
require('./models/Chatroom');
require('./models/Message');


const app= require('./app');
app.listen(8000, ()=>{
    console.log("server listening at port 8000");
})