function Token(res, req, next) {
    console.log("creating Token..........");
  //   setInterval(() => {
      // const Token = 1234;
      req.token=true
      next();
  //   }, 3000);
  }
  module.exports=Token