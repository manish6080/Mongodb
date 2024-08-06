const mongoose = require('mongoose')

let connection = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://manish6080:manish1234@manish.csawl4t.mongodb.net/Hanumant?retryWrites=true&w=majority&appName=manish')
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection

