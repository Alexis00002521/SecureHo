const User = require('../models/user.model');
const debug = require("debug")("app:auth-controller");

const { createToken, verifyToken } = require("../utils/jwl.tools");

const controller = {};

controller.register = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ $or: [{ username: username }, { email: email }] });

        if (existingUser){
            return res.status(409).json({ error: "User already exists" });
        }
            
        const newUser = new User(
            {
                username: username,
                email: email,
                password: password,
            }
        )


    await newUser.save();
        
    return res.status(201).json({ message: "newUser!" })
    } catch (error) {
    debug({ error });
    return res.status(500).json({ error: "Could not register user" })
    }
}

controller.login = async (req, res) => {
    try {
        const { identifier, password } = req.body;

        const user = await User.findOne({ $or: [{ username: identifier }, { email: identifier }] });
    
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
    
        if (!user.comparePassword(password)) {
            return res.status(401).json({ error: "your credentials are not memo" });
        }
    
        const token = createToken(user._id);
        user.tokens = [token, ...user.tokens.filter(_token => verifyToken(_token)).splice(0, 4)];
    
        await user.save();
        
        return res.status(200).json({ token: token });
    } catch (error) {
        debug(error);
        return res.status(500).json({ error: "Error inesperado" })
    }
}


controller.whoami = async (req, res) => {
    try {
        const { _id, username, email, roles } = req.user;
    return res.status(200).json({ _id, username, email, roles });
        } catch (error) {
        debug(error);
    return res.status(500).json({ error: "Error inesperado" })
    }
}

module.exports = controller;