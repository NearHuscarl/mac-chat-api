import mongodb from 'mongodb';

console.log(process.env.NODE_ENV);

let port = undefined;
let mongoUrl = undefined;

if (process.env.NODE_ENV === 'development') {
  port = 3005;
  mongoUrl = 'mongodb://localhost:27017/chat-api';
} else {
  port = process.env.PORT;
  mongoUrl = process.env.MONGODB_URI;
}

export default {
  port: port,
  mongoUrl: mongoUrl,
  bodyLimit: '100kb',
};
