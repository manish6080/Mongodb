let userInfo = require('../models/userModel.js')

exports.userSave =  (req, res)=>{
    let final = new userInfo(req.body)
    final.save()
    .then(()=>{
        res.send("data saved")
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.getUser = async (req, res)=>{
    let result = await userInfo.find()
    res.json(result)
}