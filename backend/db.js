const mongoose = require ('mongoose');
const mongoURI= 'mongodb+srv://pusarla:pusarla123@cluster0.o4y7z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo")
    })
}

module.exports= connectToMongo