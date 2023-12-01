const jwt = require('jsonwebtoken');
const config = require('config');

class Auth {
    constructor(){
        if(typeof Auth.instance === 'object'){
            return Auth.instance;
        }
        Auth.instance = this;
        return this;
    }
    JwtKey = config.get("secret.key");

    check(token) {
        return jwt.verify(token, this.JwtKey);
    }
}

module.exports = Auth;
