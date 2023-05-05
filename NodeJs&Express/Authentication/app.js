const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome APIs",
  });
});

app.post("/api/posts", vertifyToken, (req, res) => {
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403)
        }else{

            res.json({
              message: "post created...",
              authData
            });
        }
    })
});
app.post("/api/login", (req, res) => {
  //User
  const user = {
    id: 1,
    username: "shilpa",
    email: "shilpa@gmail.com",
  };
  jwt.sign({ user }, "secretkey",{expiresIn:'30s'}, (err, token) => {
    res.json({
      token: token,
    });
  });
});
//FORMAT OF TOKEN
//Authorization:Bearer <access_Token>

//Verify Token
function vertifyToken(req, res, next) {
  //Get auth Header Value
  const bearerHeader = req.headers["authorization"];
  //Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //Split at the space
    const bearer = bearerHeader.split(" ");
    //Get token from array
    const bearerToken = bearer[1];
    //set the token
    req.token = bearerToken;
    //Next Middleware
    next();
  } else {
    //forbidden
    res.sendStatus(403);
  }
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
