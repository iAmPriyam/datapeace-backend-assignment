const express = require("express");
const router = express.Router();
//Loading User model
const User = require("../../models/User");

//@route    GET     api/users/test
//@desc     Tests   User routes
//@access   Public
router.get("/test", (req, res) => {
  res.status(200).json({ msg: "user route working!" });
});

//@route    POST    api/users/
//@desc     Adds    New User
//@access   Public
router.post("", (req, res) => {
  //   console.log(req.body);
  User.findOne({ id: parseInt(req.body.id) })
    .then(user => {
      if (user) {
        return res.status(400).json({ id: "User already exists" });
      } else {
        const newUser = new User({
          id: Number(req.body.id),
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          company_name: req.body.company_name,
          city: req.body.city,
          state: req.body.state,
          zip: Number(req.body.zip),
          email: req.body.email,
          web: req.body.web,
          age: Number(req.body.age)
        });

        newUser
          .save()
          .then(user => {
            res.status(201).json(user);
          })
          .catch(error => {
            console.log(error);
            res.status(400).json(error);
          });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

//@route    Get          api/users/
//@desc     retrieves    user data
//@access   Public
router.get("/:id?", (req, res) => {
  // Check for id as parameter in the url
  let id = parseInt(req.params.id);
  console.log();
  if (Object.keys(req.query).length !== 0) {
    //Could not achieve pagination of the result
    const page = Number(req.query.page);
    const limit = Number(req.query.limit) || 5;
    const name = req.query.name;
    const sort = req.query.sort;
    User.find({
      $or: [
        { first_name: { $regex: name, $options: "i" } },
        { last_name: { $regex: name, $options: "i" } }
      ]
    })
      .sort(sort)
      .limit(limit)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(error => {
        console.log(error);
        res.status(400).json(error);
      });
  }
  // If id is present as a parameter in the url then returns the particular entry.
  else if (id) {
    User.find({ id })
      .then(user => {
        res.status(200).json({ user });
      })
      .catch(error => {
        console.log(error);
        res.status(400).json(err);
      });
  } else {
    User.find({})
      .limit(5)
      .then(user => {
        res.status(200).json({ user });
      })
      .catch(error => {
        console.log(error);
        res.status(400).json(err);
      });
  }
});

//@route    PUT          api/users/
//@desc     updates      user data
//@access   Public
router.put("/:id", (req, res) => {
  User.findOneAndUpdate({ id: Number(req.params.id) }, req.body)
    .then(() => {
      User.find({ id: req.params.id })
        .then(user => {
          res.status(200).json(user);
        })
        .catch(error => {
          res.status(400).json(error);
        });
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

module.exports = router;
