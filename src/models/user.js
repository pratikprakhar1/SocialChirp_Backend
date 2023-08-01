import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema({
      email: {
        type: String,
        required: true,
        unique: true
      },
      password:{
         type: String,
         required: true
      },
      name:{
        type: String,
        required: true
      }
},{timestamps: true});
/**
 * This is a pre-save hook that runs before saving a user document into the MongoDB collection.
 *  It is used to encrypt the user's password using bcrypt before storing it in the database.
 *  The bcrypt.hashSync() function is used to hash the password with a randomly generated salt.
 */
userSchema.pre('save', function (next) {
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
});

userSchema.methods.comparePassword = function compare(password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.genJWT = function generate() {
    return jwt.sign({id: this._id, email: this.email}, 'twitter_secret', {
        expiresIn: '1h'
    });
}

const User = mongoose.model('User', userSchema);

export default User;