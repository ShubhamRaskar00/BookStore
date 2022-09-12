const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes')
const cors = require('cors');
const app = express();
// convert to json
app.use(express.json());
// block the cors error
app.use(cors())
//set http://localhost:5000/book path
app.use('/books',router)
// Here connect to the MongoDB data base
mongoose.connect("mongodb+srv://admin:admin123@cluster0.dojyetb.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log("Mongoose Connect"); })
.then(()=>{
    app.listen(5000)
})
.catch(err => {console.log(err);});

