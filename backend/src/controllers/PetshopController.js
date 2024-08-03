import PetshopService from '../services/PetshopService.js';

class PetshopController {
  constructor() {
    this.petshopService = new PetshopService();
  }

  calculate(req, res) {
    const { date, smallDogs, largeDogs } = req.body;
    const result = this.petshopService.calculateBestPetshop(date, smallDogs, largeDogs);
    res.json(result);
  }
}

export default new PetshopController();