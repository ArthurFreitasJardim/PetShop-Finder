import PetshopService from '../../src/services/PetshopService.js';

describe('PetshopService', () => {
  let petshopService;

  beforeEach(() => {
    petshopService = new PetshopService();
  });

  test('should correctly identify a weekend date', () => {
    const isWeekend = petshopService.isWeekend('2024-08-03'); // Assuming this is a Saturday
    expect(isWeekend).toBe(true);
  });

  test('should correctly identify a weekday date', () => {
    const isWeekend = petshopService.isWeekend('2024-08-01'); // Assuming this is a Thursday
    expect(isWeekend).toBe(false);
  });

  test('should calculate the best petshop based on distance and pricing', () => {
    const result = petshopService.calculateBestPetshop('2024-08-03', 2, 1); // Assuming 2 small dogs and 1 large dog on a weekend

    expect(result.bestPetshop).toBe('Vai Rex');
    expect(result.bestPrice).toBe(95); // Calculated price
    expect(result.results).toHaveLength(3);
  });
});