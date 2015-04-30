var express = require('express');
var router = express.Router();
var User = require('../mods/database/models/user.js');
var AccountController = new require('../mods/database/controllers/account.js')(User);

function authenticate(name, pass, fn) {
  User.findOne({
      email: name
    },
    function (err, user) {
      if (user) {
        if (err) {
          return fn(new Error('cannot find user'));
        }
        // TODO implement Hash
        if (pass !== user.passwordHash) {
          return fn(new Error('invalid password'));
        }
        // all good!
        fn(null, user);
      } else {
        return fn(new Error('cannot find user'));
      }
    });

}



function requiredAuthentication(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}



router.get("/signup", function (req, res) {
  if (req.session.user) {
    res.redirect("/");
  } else {
    res.render("signup");
  }
});

router.post("/signup", function (req, res) {
  console.log(req.body);
  User
    .find({
      email: req.body.email
    })
    .exec(function (err, results) {
      if (err) {
        // Error occured
        return res.status(500).json(err);
      }
      if (results.length > 0) {
        return res.status(401).json('User already registered');
      }
      // create a new user
      var newUser = new User();
      newUser.email = req.body.email;
      newUser.firstName = req.body.firstName;
      newUser.lastName = req.body.lastName;
      newUser.passwordHash = req.body.password;

      // save
      newUser.save(function (err) {
        if (err) {
          res.redirect('/');
        } else {
          req.session.regenerate(function () {
            req.session.user = user;
            req.session.success = 'Authenticated as ' + user.email + 'click to <a href="/logout">logout</a>. ' + ' You may now access <a href="/restricted">/restricted</a>.';
            res.redirect('/profile');
          });
        }
      });
    });
});


router.post("/login", function (req, res) {
  console.log('at login');
  authenticate(req.body.email, req.body.password, function (err, user) {
    console.log('in auth');
    if (err) {
      return res.redirect('/');
    }
    if (user) {
      req.session.regenerate(function () {
        req.session.user = user;
        req.session.success = 'Authenticated as ' + user.email + 'click to <a href="/logout">logout</a>. ' + ' You may now access <a href="/restricted">/restricted</a>.';
        res.redirect('/profile');
      });
    } else {
      req.session.error = 'Authentication failed, please check your ' + ' username and password.';
      res.redirect('/login');
    }
  });
});

router.get('/logout', function (req, res) {
  req.session.destroy(function () {
    res.redirect('/');
  });
});

router.get('/profile', requiredAuthentication, function (req, res) {
  res.send('Profile page of ' + req.session.user.firstName + '<br>' +
    ' click to <a href="/logout">logout</a>');
});

module.exports = router;
