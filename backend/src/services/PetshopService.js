class PetshopService {
  constructor() {
    this.petshops = {
      'Meu Canino Feliz': { distance: 2, weekday: { small: 20, large: 40 }, weekend: { small: 24, large: 48 } },
      'Vai Rex': { distance: 1.7, weekday: { small: 15, large: 50 }, weekend: { small: 20, large: 55 } },
      'ChowChawgas': { distance: 0.8, weekday: { small: 30, large: 45 }, weekend: { small: 30, large: 45 } }
    };
  }

  isWeekend(dateString) {
    const date = new Date(dateString);
    const day = date.getDay();
    return day === 5 || day === 6;
  }

  calculateBestPetshop(date, smallDogs, largeDogs) {
    const weekend = this.isWeekend(date);

    let bestPetshop = null;
    let bestPrice = Infinity;
    const results = [];

    for (const [name, petshop] of Object.entries(this.petshops)) {
      const prices = weekend ? petshop.weekend : petshop.weekday;
      const totalCost = (prices.small * smallDogs) + (prices.large * largeDogs);

      results.push({ name, distance: petshop.distance, totalCost });

      if (
        totalCost < bestPrice ||
        (totalCost === bestPrice && (bestPetshop === null || petshop.distance < this.petshops[bestPetshop].distance))
      ) {
        bestPrice = totalCost;
        bestPetshop = name;
      }
    }

    return { bestPetshop, bestPrice, results };
  }
}

export default PetshopService;