  const jwt = require('jsonwebtoken')
 

  

exports.requiresignin = (req, res, next) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
    }else{
    return res.status(400).json({message:"Sign in First"})
    }
    next();

}


exports.userMiddleware = (req, res, next) => {
  if(req.user.role!=='user'){
    return res.status(400).json({message:"Access denied"})
  }
  next();
}


exports.AdminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') return res.status(402).json({ "message": "Access denied" });
    next();

}