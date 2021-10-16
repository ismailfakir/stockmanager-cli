import * as mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
    {
        name: String
    },
    { timestamps: true }
);

const RoleModel = mongoose.model('Role', RoleSchema);

export { RoleModel }
