import jwt from 'jsonwebtoken';
import User from './userModel.mjs';

const checkAuth = async(req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const _id = jwt.verify(token, 'ayushikushwaha');
        req.user = await User.findOne({ _id }).select('_id')
        next();
    } catch (error) {
        return res.status(401).json({
            message : "Auth failed"
        })
    }
}
export default checkAuth;