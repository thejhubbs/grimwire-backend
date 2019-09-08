const express = require('express');

const Categories = require('./category-model.js');

const {user_restricted, mod_restricted, admin_restricted} = require('../middleware.js')

const router = express.Router();


router.get('/', (req, res) => {
  Categories.find()
  .then(categories => {
    res.json(categories);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get categories' });
  });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  Categories.findById(id)
  .then(category => {
    if (category) {
      Categories.getImages(id).then(images => {
          Categories.getThumbnail(id).then(thumbnail => {
              Categories.findKindsByCategoryId(id).then(kinds => {
                  Categories.findPrereqsByCategoryId(id).then(prereqs => {
                      res.json({...category, thumbnail, images, kinds, prereqs})
                  }).catch(err => {res.status(500).json({ message: 'Failed to get prereqs.' })});
              }).catch(err => {res.status(500).json({ message: 'Failed to get kinds.' })});
          }).catch(err => {res.status(500).json({ message: 'Failed to get thumbnail.' })});
      }).catch(err => {res.status(500).json({ message: 'Failed to get images.' })});
    } else {
      res.status(404).json({ message: 'Could not find category with given id.' })
    }
  })
  .catch(err => {res.status(500).json({ message: 'Failed to get categories' });});
});


router.post('/', mod_restricted, (req, res) => {
  const categoryData = req.body;

  Categories.add(categoryData)
  .then(category => {
    res.status(201).json(category);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new category' });
  });
});

router.post('/prereqs', mod_restricted, (req, res) => {
  const data = req.body;

  Categories.addPrereq(data)
  .then(category => {
    res.status(201).json(category);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new connection' });
  });
})

router.post('/kinds', mod_restricted, (req, res) => {
  const data = req.body;

  Categories.addKindsConnection(data)
  .then(category => {
    res.status(201).json(category);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new connection' });
  });
})


router.put('/:id', mod_restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Categories.findById(id)
  .then(category => {
    if (category) {
      Categories.update(changes, id)
      .then(updatedCategory => {
        res.json(updatedCategory);
      });
    } else {
      res.status(404).json({ message: 'Could not find category with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update category' });
  });
});


router.delete('/:id', mod_restricted, (req, res) => {
  const { id } = req.params;
      Categories.remove(id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete category' }) });
});

router.delete('/kinds/:category_id/:kind_id', mod_restricted, (req, res) => {
  const { category_id, kind_id } = req.params;
      Categories.removeKindsConnection(category_id, kind_id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete category' }) });
});

router.delete('/prereqs/:category_id/:prereq_id', mod_restricted, (req, res) => {
  const { category_id, prereq_id } = req.params;
      Categories.removePrereq(category_id, prereq_id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete category' }) });
});


module.exports = router;
