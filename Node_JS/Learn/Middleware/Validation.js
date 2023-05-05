function validation(res, req, next) {
    if(req.token){
        console.log(" Token Approved");
        next();
         return;
        
    }
    console.log("No token");

}
module.exports=validation