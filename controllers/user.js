const User = require("../model/user");

module.exports.signup=async(req,res)=>{
    try{
     let {username,email,password}= req.body;
     const newUser = new User({username,email});
     const registerUser = await User.register(newUser, password);

     req.login (registerUser ,(err)=>{
         if(err){
            console.log("error");
             return next(err);
             
         }
     })   
    }
    catch(e){
     req.flash("error",e.message);
     res.redirect("https://zerodha-project-dwj8.onrender.com/signup");
    }
     
 };
 module.exports.renderSignupForm= (req,res)=>{
    res.send("hello");
};

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("https://zerodha-project-dwj8.onrender.com/signup");
    })
}; 