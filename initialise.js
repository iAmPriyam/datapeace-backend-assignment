const User = require("./models/User");
const fetch = require("node-fetch");

const api = fetch(
  "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
)
  .then(async data => {
    console.log("in then block");
    const json = await data.json();
    json.forEach(element => {
      User.find({ id: element.id })
        .then(user => {
          if (Object.keys(user).length === 0) {
            const newUser = new User({
              id: Number(element.id),
              first_name: element.first_name,
              last_name: element.last_name,
              company_name: element.company_name,
              city: element.city,
              state: element.state,
              zip: Number(element.zip),
              email: element.email,
              web: element.web,
              age: Number(element.age)
            });

            newUser
              .save()
              .then(user => {
                console.log(user.id);
              })
              .catch(error => {
                console.log(error);
              });
          }
        })
        .catch(err => console.log(err));
    });
  })
  .catch(error => console.log(error));

module.exports = api;
