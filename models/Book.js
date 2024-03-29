const mongoose= require ("mongoose");
const Schema= mongoose.Schema;

const BookSchema= new Schema({
    title:String,
    author:[String],
    description:String,
    img:{
        type:{String},
    },
    link:{
        type:String,
    }
});

const Book= mongoose.model("Book", BookSchema);
module.export= Book;