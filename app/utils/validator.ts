import Validator, {Rules, ValidationErrors} from "validatorjs";
import config from "../config";

Validator.register('telephone', function (value: string, requirement: string, attribute: string) {
  return config.twilio.phoneNumberRegEx.test(value);
}, 'The :attribute is not valid.');

const validateData = (data: object, rules: Rules): ValidationErrors | null => {
  const validation = new Validator(data, rules);

  if (validation.passes()) {
    return null;
  }

  return validation.errors.all();
}

module.exports = {
  validateData,
};
