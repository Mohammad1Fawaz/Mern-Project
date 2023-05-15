const mongoose = require('mongoose');

if(process.env.NODE_ENV !=="PRODUCTION"){
    require("dotenv").config({
        path:"./config/.env",
    });
}


const connectDatabase = () =>{
    mongoose.connect("mongodb+srv://mohammadfawaz261:4XMPEHlvZmE84bsv@cluster0.ucfxxma.mongodb.net/RentingHouses?retryWrites=true&w=majority").then(()=>{
        console.log('MongoDb connected successfull ...');
        
})
}
       

module.exports = connectDatabase;
