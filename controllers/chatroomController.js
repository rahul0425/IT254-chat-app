const mongoose=require('mongoose')
const Chatroom= mongoose.model('Chatroom')

exports.createChatroom= async (req,res) => {
    const {name}= req.body;

    const nameRegex= /^[A-Za-z\s]+$/

    if(!nameRegex.test(name)) throw "Chatroom name can contain only aplhabets"

    const chatroomExists = await Chatroom.findOne({name})
    if(chatroomExists) throw "Chatroom with same name exists"

    const chatroom = new Chatroom({
        name,
    })

    await chatroom.save()

    res.json({
        message:"Chatroom created"
    })

}