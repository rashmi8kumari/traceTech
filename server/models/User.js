const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true},
    password: { type: String, unique: true},
    passwordHash: String,
    role: { type: String, enum: ["admin", "investigator", "viewer"], default: "viewer" }
});

module.exports = mongoose.model("User", userSchema);
