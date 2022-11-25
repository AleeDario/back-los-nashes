const User = require('../models/User');
const crypto = require('crypto');
const bcryptjs = require('bcryptjs')
const accountVerificationEmail = require('./accountVerificationEmail');
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse } = require('../config/responses');
const jwr = require ('jsonwebtoken')


const controller = {

    register: async (req, res, next) => {
        let { name, lastName, photo, age, email, password } = req.body;
        let role = 'user';
        let verified = false
        let logged = false
        let code = crypto.randomBytes(10).toString('hex');
        password = bcryptjs.hashSync(password, 10);
        try{
            await User.create({ name,lastName,role,photo,age,email,password,code,verified,logged })
            await accountVerificationEmail(email, code)
            return userSignedUpResponse(req,res)
        }catch(error){
            console.log(error)
        }
    },

    verify: async (req, res, next) => {
        const { code } = req.params;

        try{
            let user = await User.findOneAndUpdate({code:code},{verified:true},{new:true})
            if(user){
                return res.redirect('http://localhost:3000/')
            }
            return userNotFoundResponse(req,res)

        }catch(error){
            next(error)
        }
    },

    ingresar: async (req, res, next) =>{
        const {password} = req.body;
        const {user} = req;
        try{
            const verifyPassword = bcryptjs.compareSync(password, user.password)
            console.log(password)
            console.log(user.password)
            if(verifyPassword){
                await User.findOneAndUpdate({email: user.email},{_id: user.id}, {online:true})
                const token = jwt.sign(
                    {
                        name: user.name,
                        photo: user.photo,
                        online: user.online
                    },
                process.env.KEY_JWT,
                {expiresIn: 60 * 6 * 24}
                )
                return res.status(200).json({
                    response: {user, token},
                    success: true,
                    message:'Hi ' + user.name + ', we are happy to see you again'
                })
            }
            return invalidCredentialsResponse(req,res)
        } catch(error){
            next(error)
        }
    },
}

module.exports = controller;