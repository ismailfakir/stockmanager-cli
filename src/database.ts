import Mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { DB_URL } from './config';
import { UserModel } from './user';
import { RoleModel } from './role';

Mongoose.Promise = global.Promise;

let database: Mongoose.Connection;
export const connect = async () => {
  // add your own uri below
  const uri = DB_URL;
  if (database) {
    return;
  }
  Mongoose.connect(uri);
  database = Mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};
export const disconnect = async () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
  console.log("disconnected from database");
};

export const createadmin = async (options: any) => {

  connect();

  RoleModel.findOne({ name: 'admin' }, function (err: any, obj: any) {

    if (err) {
      console.log('Role admin not found');
      return;
    }

    console.log('Found role admin', obj);

    const user = new UserModel({
      username: options.username,
      password: bcrypt.hashSync(options.password, 8),
      email: options.email,
      roles: [obj.id]
    });

    user.save().then((docs: any) => {
      console.log('admin saved', docs);
      disconnect();
    }, (e: any) => {
      console.log('unable to save');
    });

  });

};
