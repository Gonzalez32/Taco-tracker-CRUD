const Taco = require('../models/taco')



module.exports = {
    new: newTaco,
    create,
    index,
    delete: deleteTaco,
    show,
    update
}


function newTaco(req, res) {
    res.render('tacos/new')
}

function create(req, res) {
    if(req.body.tasty === "on") {
        req.body.tasty = true
    } else {
        req.body.tasty = false
    }

    Taco.create(req.body)
    .then((taco) => {
        console.log(taco);
        res.redirect('/tacos')
    })
}

function index(req, res) {
    Taco.find({}, (err, tacos) => {
        res.render('tacos/index', {
            tacos: tacos,
        })
        
    })
}

function deleteTaco(req, res) {
    Taco.findByIdAndDelete(req.params.id, (err) => {
        res.redirect('/tacos')
    })
}

function show(req, res) {
    Taco.findById(req.params.id, (err, taco) => {
        res.render('tacos/show', {taco: taco})
    })
}

function update(req, res) {
    req.body.tasty = req.body.tasty === 'on' ? true : false
    Taco.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, taco) => {
        res.redirect('/tacos')
    })
}