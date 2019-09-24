const express = require('express');

const Users = require('./user-model.js');

const bcrypt = require('bcryptjs')

const {user_restricted, mod_restricted, admin_restricted} = require('../middleware.js')

const router = express.Router();


router.get('/admin-list', admin_restricted, (req, res) => {
  Users.find()
  .then(users => {
    res.json(users);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get users' });
  });
});


router.get('/profile/:id', (req, res) => {
  const { id } = req.params;

  Users.findById(id)
  .then(user => {
    if (user) {
      Users.getImages(id).then(images => {
          Users.getThumbnail(id).then(thumbnail => {
              res.json({...user, thumbnail, images})
          }).catch(err => {res.status(500).json({ message: 'Failed to get thumbnail.' })});
      }).catch(err => {res.status(500).json({ message: 'Failed to get images.' })});
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  })
  .catch(err => {res.status(500).json({ message: 'Failed to get users' });});
});


router.post('/register', (req, res) => {
  const userData = req.body;

  userData.password = bcrypt.hashSync(userData.password, 10)

  Users.add(userData)
  .then(user => {
    res.status(201).json(user);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new user' });
  });
});

router.post('/login', (req, res) => {
  let {username, password} = req.body

  Users.findByUsername(username)
  .then(user => {
    if(user && bcrypt.compareSync(password, user.password)){
      req.session.user = user
      res.status(200).json({message: "Welcome!"})
    } else {
      res.status(500).json({message: "Invalid Credentials."})
    }
  })
  .catch(error => {
    res.status(500).json({message: "Invalid Credentials."})
  })
});


router.put('/:id', profile_restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.findById(id)
  .then(user => {
    if (user) {
      Users.update(changes, id)
      .then(updatedUser => {
        res.json(updatedUser);
      });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update user' });
  });
});


router.delete('/:id', admin_restricted, (req, res) => {
  const { id } = req.params;
      Users.remove(id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete user' }) });
});

router.delete('/logout', (req, res) => {
  req.session.user = null;
  res.status(200).json({message: "Logged out!"})
});

function profile_restricted(req, res, next) {
  // const logged_in_user = req.session.user
  // const {id} = req.params
  //
  // console.log( req.session.user.user_id , Number.parseInt(id) )
  // if(logged_in_user){
  //   if(logged_in_user.role >= 3 || logged_in_user.user_id === Number.parseInt(id)){
  //     next();
  //   } else {
  //     res.status(400).json({message: "You do not have permission to do this."})
  //   }
  // } else{
  //   res.status(400).json({message: "Please log in."})
  // }
  next();
}

module.exports = router;
