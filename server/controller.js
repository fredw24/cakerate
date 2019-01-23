const Cake = require("./model")

module.exports = {
    allCakes: (req,res)=>{
        Cake.find({})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    createCake: (req,res)=>{
        Cake.create(req.body)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    oneCake: (req,res)=>{
        Cake.findById(req.params.id)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    rateCake: (req,res)=>{
        Cake.findByIdAndUpdate(req.params.id,{$push:{ratings:req.body}})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))  
    }
}