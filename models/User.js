const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    _id:Schema.ObjectId,
    username: {
        type: String,
        trim: true,
        required: 'Username Required.'
    },
    password: {
        type: String,
        trim: true,
        required: 'Username is Required',
        validate: [({ length }) => {
            return length > 7;
        }, 'Password must be 8 characters or more.']
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    favoriteBookIds: [ Schema.Types.ObjectId ],
    userCreated: {
        type: Date,
        default: Date.now
    }


})

UserSchema.methods.validatePassword = (password) => {
    if(password.trim() === this.password){
        return true;
    }
    return false;
}


const User = mongoose.model('User', UserSchema);

module.exports = User;