const mongoose2 = require('mongoose');
const signup = new mongoose2.Schema(
  {
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    email_id:{
      type: String,
      require: true
    },
    password:{
      type: String,
      require: true
    },
    confirm_password:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
    }
  }
);

module.exports =mongoose2.model('signupdetails',signup)