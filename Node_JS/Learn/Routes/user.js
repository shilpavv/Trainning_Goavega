const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("user List ");
});
router.get("/new", (req, res) => {
  res.render("users/new")
});
router.post("/", (req, res) => {
  res.send("create user");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log("user",req.user)
    res.send(`get user id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`update user id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user id ${req.params.id}`);
  });
const users=[{name:"shilpa"},{name:"sai"}]
  router.param("id",(req,res,next,id)=>{
    req.user=users[id]
    next()
  })

// router.get("/:id",(req,res)=>{
//     res.send(`get user id ${req.params.id}`)
// })
// router.put("/:id",(req,res)=>{
//     res.send(`update user id ${req.params.id}`)
// })
// router.delete("/:id",(req,res)=>{
//     res.send(`delete user id ${req.params.id}`)
// })
module.exports = router;
