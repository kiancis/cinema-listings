import mongoose from "mongoose";

const trailerSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    director:{
        type: String,
        required: true,
        trim: true
    },
    review:{
        type: String,
        required: true,
        trim: true
    },
    actors:{
        type: String,
        required: true,
        trim: true
    },
    Data:{
        type: String,
        required: true,
        trim: true
    },
    cover:{
        type: String,
        public_id: String,
        required: true,
        trim: true
    },

});

export default mongoose.model("Trailer", trailerSchema);