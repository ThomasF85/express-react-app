import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json([
    { id: 1, name: 'Mike' },
    { id: 2, name: 'Carol' },
  ]);
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    name: 'something',
  });
});

export default router;
