import {Request, Response} from "express";
import * as express from 'express';
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";
const expressJwt = require('express-jwt');

const app= express();


const RSA_PUBLIC_KEY = fs.readFileSync('./public/rsa_public.pem');

const checkIfAuthenticated = expressJwt({
    secret: RSA_PUBLIC_KEY
}); 

app.use(bodyParser.json());

app.route('/api/login')
    .post(loginRoute);

app.route('/api/lessons')
.get(checkIfAuthenticated);

const RSA_PRIVATE_KEY = fs.readFileSync('./private/rsa_private.pem');

export function loginRoute(req, res) {

    const email = req.body.email,
          password = req.body.password;

    if (validateEmailAndPassword()) {
       const userId = findUserIdForEmail(email);

        const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 120,
                subject: userId
            })

            // send the JWT back to the user
            // TODO - multiple options available  
            // this is the session token we created above

            // set it in an HTTP Only + Secure Cookie
            localStorage.setItem('idToken', jwtBearerToken);                        
    }
    else {
        // send status 401 Unauthorized
        res.sendStatus(401); 
    }
}
