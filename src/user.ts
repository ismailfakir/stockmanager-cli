import * as mongoose from "mongoose";
 
const UserSchema = new mongoose.Schema({
    username: String,
      email: String,
      password: String,
      roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ]
    },
    { timestamps: true }
);
 
const UserModel = mongoose.model('User', UserSchema);
 
export { UserModel }