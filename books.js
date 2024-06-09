const mongoose = require("mongoose");
main().then((res)=>{console.log("connection successfull")})
.catch((err)=>{
    console.log(err);
})
async function main()
{
   await mongoose.connect('mongodb://localhost:27017/amazon');
}
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[0,"price is to low for amazon selling"],
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","Non-fiction"],
    },
    genre:[String],
});
const Book = mongoose.model("Book",bookSchema);
// Book.deleteMany({},{new:true}).then((res)=>{console.log
//     (res);
// });
const book1 = new Book({
    title:'The Ancient Views',
    author:"thomas albert",
    price:-10,
    genre:['real',"original"],
}).save()
// this method helpes to catch actual error which we have described in the text form.
.then((result)=>{console.log(result)}).catch(err=>{console.log(err.errors.price.properties.message)});