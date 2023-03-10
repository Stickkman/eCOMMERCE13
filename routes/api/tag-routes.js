const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, },],
      });
      res.json(allTags);
    } catch (e) { console.log(e); res.status(500).json(e);}
    });


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try { 
    const singleTag = await Tag.findOne({ where: { id: req.params.id, },
    include: [{ model: Product, through: ProductTag, }, ],
    });
    if(!singleTag) { res.status(404).json({ message: 'Tag Id Not Found'}); return;}
    res.json(singleTag);
  } catch (e) { console.log(e); res.status(500).json(e);}
});

router.post('/', async (req, res) => {
  // create a new tag
    try{ const newTag = await Tag.create(req.body);
    res.json(newTag);
    } catch (e) { console.log(e); res.status(500).json(e);}
  });
    
// update a tag's name by its `id` value
  router.put('/:id', async (req, res) => {
    try {
      const updateTag = await Tag.update(req.body, {
        where: { id: req.params.id, },
      });
      if (!updateTag) {
        res.status(404).json({ message: 'Id for tag not found.' }); return;
      }
      const updateTag2 = await Tag.findOne({ where: { id: req.params.id },});
      res.json(updateTag2); } catch (e) { console.log(e);
      res.status(500).json(e); }
      });
  

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where: { id: req.params.id, },})
  .then((tag) => res.status(200).json(tag)).catch((e) => res.status(404).json(e));
});

module.exports = router;
