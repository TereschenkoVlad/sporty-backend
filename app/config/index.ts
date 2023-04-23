import dotenv from 'dotenv';

dotenv.config();

export default {
  app: {
    port: process.env.PORT || '8080',
    hostUrl: process.env.APP_URL || 'http://localhost',
    apiVersion: '/api/v1/',
  },
  mongo: {
    host: process.env.MONGO_HOST || 'mongodb://username:pass@mongodb:27017/'
  },
  twilio: {
    phoneNumberRegEx:
      /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/,
  },
}
