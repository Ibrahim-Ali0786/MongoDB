const mongoose = require("mongoose");
main().then((res)=>{console.log("connection successfull")})
.catch((err)=>{
    console.log(err);
})
async function main()
{
   await mongoose.connect('mongodb://localhost:27017/test');
}
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
const User = mongoose.model("User",userSchema);
// User.insertMany([{name:"amaar",email:"amr@yahoo.in",age:50},{name:"sarah",email:"srh@gmail.com",age:20},{name:'hatim',email:"hatim@gmail.com",age:30}]).then(data=>{console.log(data)});
// User.updateMany({age:{$gte:30}},{age:42}).then((result)=>{console.log
//     (result);
// })
// .catch((error)=>{console.log
//     (error);
// });
// User.findOne({_id:'666450a28cfe611769614db6'}).then((data)=>{console.log(data)});
// User.findById('666450a28cfe611769614db6').then((data)=>{console.log(data)});

// new = true means it give the updated value rather then the original value.
// new = false means it gives the original and update it later on.
// It is on false by default.
// User.findOneAndUpdate({name:'HasanAli'},{age:23},{new:true}).then((data)=>{console.log(data)});
// User.findByIdAndUpdate({_id:'666450a28cfe611769614db6'},{age:23},{new:true}).then((result)=>{console.log(result)})
// .catch((err)=>{console.log(err)});

// User.deleteOne({name:"hatim"}).then((result)=>{console.log(result)})
// .catch((err)=>{console.log(err)});

// User.deleteMany({}).then((result)=>{console.log(result)});

// User.findOneAndDelete({age:20},{new:true}).then((result)=>{console.log(result)});
User.findByIdAndDelete({_id:'66645b6c5ca006dfab240c38'},{new:true}).then((result)=>{console.log(result)});
