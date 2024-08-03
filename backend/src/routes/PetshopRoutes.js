import express from 'express';
import PetshopController from '../controllers/PetshopController.js';

const router = express.Router();

router.post('/calculate', PetshopController.calculate.bind(PetshopController));

export default router;
