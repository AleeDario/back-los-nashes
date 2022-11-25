const User = require("../models/User");
const { invalidCredentialsResponse } = require("../config/response");

async function accountExistsSignIn(req, res, next) {
    const user = await User.findOne({mail: req.body.mail})
    if (user) {
        req.user = user
        return next()
    }
    return invalidCredentialsResponse(req,res)
}

module.exports = { accountExistsSignIn }
