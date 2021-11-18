function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authoautrization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    à
    res.json({
      message : 'you are note allowed to ....'
    })
  }
  exports.isSuperAdmin = (req, res, next) => {
    if(req.auth.role == 0){
        return res.status(403).json({
            error: "Super Admin Ressource, Access Denied"
        })
    }else if(req.auth.role == "SuperAdmin"){
      return next()
    }


}

exports.isdoctor = (req, res, next) => {
    if(req.auth.role == 0){
        return res.status(403).json({
            error: "Doctor Ressource, Access Denied"
        })
    }else if(req.auth.role == "doctor"){
      return next()
    }
}

exports.isassSec = (req, res, next) => {
    if(req.auth.role == 0){
        return res.status(403).json({
            error: "AssSec Ressource, Access Denied"
        })
    }else if(req.auth.role == "assSec"){
      return next()
    }
}
exports.isVolontaire = (req, res, next) => {
  if(req.auth.role == 0){
      return res.status(403).json({
          error: "Volontaire Ressource, Access Denied"
      })
  }else if(req.auth.role == "Volontaire"){
    return next()
  }
}
}


module.exports = verifyToken;