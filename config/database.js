const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/tacos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const db = mongoose.connection

db.on('connected', function() {
    console.log(`YOUR CONNECTED TO MONGODB AT ${db.host}:${db.port}`);
})