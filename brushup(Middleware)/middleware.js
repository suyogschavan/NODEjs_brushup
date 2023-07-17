const ageChecker=(req, res, next)=>{
    if(!req.query.age){
        res.send("Please Enter the AGE");
    }else if(req.query.age < 18){
        res.send("You are not eligible");
    }else{
        next();
    }
};


// push to code
module.exports = ageChecker;