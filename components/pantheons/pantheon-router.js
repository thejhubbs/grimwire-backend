const express = require('express');

const Pantheons = require('./pantheon-model.js');

const router = express.Router();


router.get('/', (req, res) => {
  Pantheons.find()
  .then(pantheons => {
    res.json(pantheons);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get pantheons' });
  });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  Pantheons.findById(id)
  .then(pantheon => {
    if (pantheon) {
      Pantheons.historyById(id).then(history => {
          Pantheons.influencedById(id).then(influenced => {
              Pantheons.getImages(id).then(images => {
                  Pantheons.getThumbnail(id).then(thumbnail => {
                    res.json({...pantheon, history, influenced, thumbnail, images})
                  }).catch(err => {res.status(500).json({ message: 'Failed to get images.' })});
              }).catch(err => {res.status(500).json({ message: 'Failed to get images.' })});
          }).catch(err => {res.status(500).json({ message: 'Failed to get influenced.' })});
      }).catch(err => {res.status(500).json({ message: 'Failed to get history' })});
    } else {
      res.status(404).json({ message: 'Could not find pantheon with given id.' })
    }
  })
  .catch(err => {res.status(500).json({ message: 'Failed to get pantheons' });});
});


router.post('/', (req, res) => {
  const pantheonData = req.body;

  Pantheons.add(pantheonData)
  .then(pantheon => {
    res.status(201).json(pantheon);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new pantheon' });
  });
});


router.post('/history', (req, res) => {
  const data = req.body;

  Pantheons.addHistory(data)
  .then(pantheon => {
    res.status(201).json(pantheon);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new history' });
  });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Pantheons.findById(id)
  .then(pantheon => {
    if (pantheon) {
      Pantheons.update(changes, id)
      .then(updatedPantheon => {
        res.json(updatedPantheon);
      });
    } else {
      res.status(404).json({ message: 'Could not find pantheon with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update pantheon' });
  });
});


//First, remove all histories, then delete the pantheon record itself.
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Pantheons.removeHistoriesById(id)
  .then(deleted => {
      Pantheons.remove(id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete pantheon' }) });
  })
  .catch(err => { res.status(500).json({ message: 'Failed to delete pantheon histories.' }) });
});

//First, remove all histories, then delete the pantheon record itself.
router.delete('/history/:history_id', (req, res) => {
  const { history_id } = req.params;

  Pantheons.removeHistory(history_id)
  .then(deleted => {
      res.send("Success.")
  })
  .catch(err => { res.status(500).json({ message: 'Failed to delete pantheon histories.' }) });
});

module.exports = router;
