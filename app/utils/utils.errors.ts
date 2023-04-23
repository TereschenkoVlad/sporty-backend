import {ValidationErrors} from "validatorjs";

interface HttpErrorInterface extends Error {
  status: number;
  name: string;
}

class HttpError extends Error implements HttpErrorInterface {
  status: number;
  name: string;

  constructor(status: number = 400, message: string = 'Invalid  request.') {
    super(message);
    this.status = status;
    this.name = 'HttpError';
  }
}

class ValidationError extends HttpError {
  errors: ValidationErrors;

  constructor(errors: ValidationErrors, message: string = 'Invalid  data.') {
    super(400, message);
    this.errors = errors;
    this.name = 'ValidationError';
  }
}

class NotAuthorizedError extends HttpError {
  constructor(message: string = 'Not authorized.') {
    super(401, message);
    this.name = 'NotAuthorizedError';
  }
}

module.exports = {
  HttpError,
  ValidationError,
  NotAuthorizedError,
};
