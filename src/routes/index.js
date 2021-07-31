import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Welcome to kigali airport 👋!');
});

export default router;
