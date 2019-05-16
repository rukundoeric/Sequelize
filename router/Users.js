import express from 'express';
const router = express.Router();
import User from '../controllers/User';
router.post('/add',User.addUser);
router.get('/get',User.getAllUses);
module.exports = router;