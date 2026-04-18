const app = require("./app");
const PORT = process.env.PORT;
const connectdb = require("./db/connectdb");
const uri = process.env.MONGODB_URI;

connectdb().then(()=>{
    app.listen(PORT ,(PORT)=>{
    console.log("server is on");
})
}).catch((error)=>{
    console.log("error duing loading app")
})