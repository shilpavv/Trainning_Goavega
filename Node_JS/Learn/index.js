// ------------------------------------------------------------------------//
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//   // res.write("Nodejs crash course");
//   //STATUS code 200
//   if (req.url === "/") {
//     fs.readFile(
//       path.join(__dirname, "views", "index.html"),
//       "utf8",
//       (err, data) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       }
//     );
//   }
//   if (req.url === "/about") {
//     fs.readFile(
//       path.join(__dirname, "views", "about.html"),
//       "utf8",
//       (err, data) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       }
//     );
//   }
//   if (req.url === "/api/users") {
//     const users = [
//       {
//       name: "john",
//       age: 44,
//       }
//     ];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(users));
//   }
// });

// const PORT = process.env.PORT || 3002;
// server.listen(PORT, () => console.log(`server is on ${PORT}`));

// //Ist way
// // http.createServer((req,res)=>{
// //     res.write("Nodejs crash course");
// //     res.end()
// // }).listen(3002,()=>console.log("running"))

//--------------------------------------------------------------------------------------//
//we can destruct the value
// const {logger,myname} =require('./utils')
// console.log(logger());
// console.log(myname);

//-------------EXPRESS---------------------------------------------------------------------------//
// const express = require("express");
// const app = express();
// const path = require("path");
// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"views","index.html"))
// })
// app.get("/contact",(req,res)=>{
//     res.send("<h1>Contack</h1>")
// })
// app.get("*",(req,res)=>{
//     res.status(404)
//     res.send("<h1>404</h1>")
// })
//------------ CUSTOM MIDDLEWARE---------------------------------------//
// app.get("/profile",Token,(req,res,next)=>{
//     console.log("userlogged")
//     res.send("<h1>Sucesss</h1>")
//     next()
// },(res,req)=>{
//     console.log("last middleware")
// })

// function Token (res,req,next){
//     console.log("creating Token");
//     next();
// }
//-----------------------------//
// const Token=require('./Middleware/Token');
// const validation = require("./Middleware/Validation");
// const middleware=[Token,validation]
// //Application Middleware
// app.use(DateGenerator)

// app.get("/profile", middleware, (req, res) => {
//   console.log("userlogged");
//   res.send("<h1>Sucesss</h1>");
// });

// app.get("/", (req, res) => {
//     console.log("Default url");
//     res.send("<h1>Home</h1>");
//   });
// function DateGenerator(res,req,next){
//     console.log(new Date());
//     next();
// }

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`the server is running in  ${PORT}`);
// });

//---------------ROUTERS----------------------------------------//
const express = require("express");
const app = express();
const path = require("path");
// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"views","index.html"))
// })
const useRouter =require("./Routes/user");
app.use('/users',useRouter)

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`the server is running in  ${PORT}`);
});
