import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hiiiii');
});
router.get('/register', (req, res) => {
  res.send('hiiiii');
});

export default router;
