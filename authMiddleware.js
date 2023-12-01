const Auth = require('./auth');
const User = require('./models/user');
const Role = require('./models/role');

const authMiddleware = (source, typePermissions) => async (req, res, next) => {
    const authService = new Auth();
    let authorizationHeader = req.get('Authorization');

    if (!authorizationHeader) {
      return res.status(401).send('Unauthorized');
    }
    let userPayload = authService.check(req.get('Authorization').split(' ')[1]);
    const user = await User.findById(userPayload.data);
    const role = await Role.findOne({_name:user._role});
    if(role.permissions.find((elm) => elm.resource === source).permissions.includes(typePermissions)){
        next();
    } else {
        res.status(401).json({
            message: res.__('auth.login.unauthorized'),
            obj:null
        });
    }
}

/*const authMiddleware = (source, typePermissions) => async (req, res, next) => {
    if(source && typePermissions){
        next();
    }
}*/


module.exports = authMiddleware;
