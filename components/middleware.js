function user_restricted(req, res, next) {
  const user = req.session.user
  if(user && user.role >= 1) {
    next();
  } else {
    res.status(400).json({message: "Please log in."})
  }
}

function mod_restricted(req, res, next) {
  const user = req.session.user
  if(user && user.role >= 2) {
    next();
  } else {
    res.status(400).json({message: "Please log in."})
  }
}

function admin_restricted(req, res, next) {
  const user = req.session.user
  if(user && user.role >= 3) {
    next();
  } else {
    res.status(400).json({message: "Please log in."})
  }
}

module.exports = {user_restricted, mod_restricted, admin_restricted}
