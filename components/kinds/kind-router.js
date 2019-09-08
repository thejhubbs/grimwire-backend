const express = require('express');

const Kinds = require('./kind-model.js');

const {user_restricted, mod_restricted, admin_restricted} = require('../middleware.js')

const router = express.Router();



router.get('/', (req, res) => {
  Kinds.find()
  .then(kinds => {
    res.json(kinds);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get kinds' });
  });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  Kinds.findById(id)
  .then(kind => {
    if (kind) {
      Kinds.getImages(id).then(images => {
          Kinds.getThumbnail(id).then(thumbnail => {
            Kinds.findPantheonsByKindId(id).then(pantheons => {
              res.json({...kind, thumbnail, images, pantheons})
            }).catch(err => {res.status(500).json({ message: 'Failed to get pantheons.' })});
          }).catch(err => {res.status(500).json({ message: 'Failed to get images.' })});
      }).catch(err => {res.status(500).json({ message: 'Failed to get images.' })});
    } else {
      res.status(404).json({ message: 'Could not find kind with given id.' })
    }
  })
  .catch(err => {res.status(500).json({ message: 'Failed to get kinds' });});
});


router.post('/', mod_restricted, (req, res) => {
  const kindData = req.body;

  Kinds.add(kindData)
  .then(kind => {
    res.status(201).json(kind);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new kind' });
  });
});

router.post('/pantheons', mod_restricted, (req, res) => {
  const data = req.body;

  Kinds.addPantheonConnection(data)
  .then(kind => {
    res.status(201).json(kind);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new connection' });
  });
})


router.put('/:id', mod_restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Kinds.findById(id)
  .then(kind => {
    if (kind) {
      Kinds.update(changes, id)
      .then(updatedKind => {
        res.json(updatedKind);
      });
    } else {
      res.status(404).json({ message: 'Could not find kind with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update kind' });
  });
});


router.delete('/:id', mod_restricted, (req, res) => {
  const { id } = req.params;
      Kinds.remove(id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete kind' }) });
});

router.delete('/:kind_id/:pantheon_id', mod_restricted, (req, res) => {
  const { kind_id, pantheon_id } = req.params;
      Kinds.removeKindPantheonConnection(kind_id, pantheon_id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete kind' }) });
});


module.exports = router;
