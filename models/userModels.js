const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
          name : {
                    type : String,
                    required:true,
                    trim:true,
                    minlength : 8,
                    maxlength : 16,
          },
          userName : {
                    type : String,
                    required:true,
                    trim:true,
                    minlength : 8,
                    maxlength : 16,
                    lowercase : true,
          },
          password : {
                    type : String,
                    required:true,
                    trim:true,
                    minlength : 8,
                    maxlength : 16,
          },
          email : {
                    type : String,
                    required:true,
                    trim:true,
                    minlength : 8,

          }
},{collection : "kullanicilar",timestamps:true});


const User = mongoose.model('User',userSchema);

module.exports = User;
