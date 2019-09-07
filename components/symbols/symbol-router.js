const express = require('express');

const Symbols = require('./symbol-model.js');

const router = express.Router();


router.get('/', (req, res) => {
  Symbols.find()
  .then(symbols => {
    res.json(symbols);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get symbols' });
  });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  Symbols.findById(id)
  .then(symbol => {
    if (symbol) {
      Symbols.getImages(id).then(images => {
          Symbols.getThumbnail(id).then(thumbnail => {
              Symbols.findPantheonsBySymbolId(id).then(pantheons => {
                  Symbols.findConnectionsBySymbolId(id).then(connections => {
                      res.json({...symbol, thumbnail, images, pantheons, connections})
                  }).catch(err => {res.status(500).json({ message: 'Failed to get prereqs.' })});
              }).catch(err => {res.status(500).json({ message: 'Failed to get kinds.' })});
          }).catch(err => {res.status(500).json({ message: 'Failed to get thumbnail.' })});
      }).catch(err => {res.status(500).json({ message: 'Failed to get images.' })});
    } else {
      res.status(404).json({ message: 'Could not find symbol with given id.' })
    }
  })
  .catch(err => {res.status(500).json({ message: 'Failed to get symbols' });});
});


router.post('/', (req, res) => {
  const symbolData = req.body;

  Symbols.add(symbolData)
  .then(symbol => {
    res.status(201).json(symbol);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new symbol' });
  });
});

router.post('/connections', (req, res) => {
  const data = req.body;

  Symbols.addConnection(data)
  .then(symbol => {
    res.status(201).json(symbol);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new connection' });
  });
})

router.post('/pantheons', (req, res) => {
  const data = req.body;

  Symbols.addPantheonsConnection(data)
  .then(symbol => {
    res.status(201).json(symbol);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new connection' });
  });
})


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Symbols.findById(id)
  .then(symbol => {
    if (symbol) {
      Symbols.update(changes, id)
      .then(updatedSymbol => {
        res.json(updatedSymbol);
      });
    } else {
      res.status(404).json({ message: 'Could not find symbol with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update symbol' });
  });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
      Symbols.remove(id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete symbol' }) });
});

router.delete('/connections/:connection_id', (req, res) => {
  const { connection_id } = req.params;
      Symbols.removePantheonsConnection(connection_id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete symbol' }) });
});

router.delete('/pantheons/:symbol_pantheon_id', (req, res) => {
  const { symbol_pantheon_id } = req.params;
      Symbols.removeConnection(symbol_pantheon_id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete symbol' }) });
});


module.exports = router;
