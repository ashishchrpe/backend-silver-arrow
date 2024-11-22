const express = require("express");
const router = express.Router();
const User = require("../model/user");
const passport = require("passport");
const userControllers= require("../controllers/user");
const {saveRedirectUrl}= require("../middleware/middleware");
const wrapAsync= require("../wrapAsync");

router.route("/signup")
.post(wrapAsync(userControllers.signup))
.get(userControllers.renderSignupForm);

router.route("/login")
.post(saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
       res.json("userLogin");
        }
  
);


router.get("/logout",userControllers.logout);

module.exports = router;