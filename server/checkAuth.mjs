import jwt from 'jsonwebtoken';


const checkAuth = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify(token, 'ayushikushwaha');
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({
            message : "Auth failed"
        })
    }
}
export default checkAuth;