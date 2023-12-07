require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.json());
const mongoose = require('mongoose')

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)



const PORT = 3000;
const mongoURI = 'mongodb+srv://lindanyonje:qVWbwF0q72rHoTK4@cluster0.ehmmihv.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoURI)
        .then(()=>console.log('connected to mongo db'))
        .catch((err)=>console.log(err.message));
app.listen(PORT, () =>{
    console.log('Server listening on port: '+ PORT)
});





