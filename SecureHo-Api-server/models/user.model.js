const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const debug = require("debug")("server:user-model");

const crypto = require("crypto");

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true

    }, 
    email: {
        type: String,
        required: true, 
        trim: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    tokens: {
        type: [String],
        default: []
    }
}, {
    timestamps: true,
});

UserSchema.methods = {
    encryptPassword: function (password) {
        if (!password) return "";

    try {
        const encryptedPassword = crypto.pbkdf2Sync(
            password,
            this.salt,
            1000, 64,
            `sha512`
        ).toString("hex");

        return encryptedPassword;
    } catch (error) {
        debug({ error });
        return "";
    }
    },
    makeSalt: function () {
        return crypto.randomBytes(16).toString("hex");
    },
    comparePassword: function (password) {
        return this.hashedPassword === this.encryptPassword(password);
    }
}

UserSchema.virtual("password")
    .set(function (password = crypto.randomBytes(16).toString()) {
        if (!password) return;

    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
    })

module.exports = mongoose.model("User", UserSchema);