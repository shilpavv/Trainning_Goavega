const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const config = require("../config/database");
const bcrypt = require("bcryptjs");
const passport=require('passport')

module.exports = function (passport) {
    //Local Strategy
    passport.use(new LocalStrategy(async function(username, password, done) {
        try {
          const user = await User.findOne({username: username});
          if (!user) {
            return done(null, false, { message: 'Incorrect username or password.' });
          }
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return done(null, false, { message: 'Wrong password.' });
          }
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }));
    }
 
 // used to serialize the user for the session
 passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(async function (id, done) {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
