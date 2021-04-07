const mongoose = require("mongoose")
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const tankSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    type: {
        type: String,
        required: true,
        trim: true
    },

    origin: {
        type: String,
        required: true,
        trim: true
    },


    inService: {
        type: String,
        required: true,
        trim: true
    },

   
    mass: {
        type: Number,
        required: true,
        trim: true
    },
    

    crew: {
        type: Number,
        required: true,
        trim: true
    },
    
    slug:{
        type: String, 
        slug: "name",
        unique: true 
    },
})

module.exports = mongoose.model("Tank", tankSchema)