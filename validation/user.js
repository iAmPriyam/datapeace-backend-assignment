const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = validateUserInput = data => {
  let errors = {};
  if (!Validator.isURL(data.web)) {
    errors.web = "Not a valid url";
  }
  if (!Validator.isEmail(data.email)) {
    errors.web = "Not a valid url";
  }

  return {
    errors,
    isValid: Object.keys(errors) === 0
  };
};
