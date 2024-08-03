import PetshopController from '../../src/controllers/PetshopController.js';

describe('PetshopController', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        date: '2024-08-03',
        smallDogs: 2,
        largeDogs: 1
      }
    };
    res = {
      json: jest.fn()
    };
  });

  test('should return the best petshop and price', () => {
    PetshopController.calculate(req, res);

    expect(res.json).toHaveBeenCalledWith({
      bestPetshop: 'Vai Rex',
      bestPrice: 95, // Calculated price
      results: expect.any(Array)
    });
  });
});