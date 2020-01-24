function getShopItems () {
  return {
    botArm: {
      title: 'Bot Army',
      description: 'Buy this bot army to +1 click per second',
      quantity: 0,
      value: 100,
      clicks_per_unity: 1,
      slut: 'botArm',
      price_per_buy: 25
    },
    bot: {
      title: 'Bot',
      description: 'Buy this bot to +10 clicks per second',
      quantity: 0,
      value: 1000,
      clicks_per_unity: 10,
      slut: 'bot',
      price_per_buy: 300
    },
    factory: {
      title: 'Factory',
      description: 'Buy this factory to +100 clicks per second',
      quantity: 0,
      value: 5000,
      clicks_per_unity: 100,
      slut: 'factory',
      price_per_buy: 1000
    },
    ia: {
      title: 'Artificial Intelligence',
      description: 'Buy this IA to +1000 clicks per second',
      quantity: 0,
      value: 100000,
      clicks_per_unity: 1000,
      slut: 'ia',
      price_per_buy: 5000
    },
    alien: {
      title: 'Alien',
      description: 'Buy this alien to +10.000 click per second',
      quantity: 0,
      value: 1500000,
      clicks_per_unity: 10000,
      slut: 'alien',
      price_per_buy: 100000
    },
    planet: {
      title: 'Planet',
      description: 'Buy this planet to +100.000 click per second',
      quantity: 0,
      value: 5000000,
      clicks_per_unity: 100000,
      slut: 'planet',
      price_per_buy: 250000
    },
    space: {
      title: 'Space',
      description: 'Buy this space to +1.000.000 click per second',
      quantity: 0,
      value: 100000000,
      clicks_per_unity: 1000000,
      slut: 'space',
      price_per_buy: 2500000
    },
    galaxy: {
      title: 'Galaxy',
      description: 'Buy this galaxy to +10.000.000 click per second',
      quantity: 0,
      value: 500000000,
      clicks_per_unity: 10000000,
      slut: 'galaxy',
      price_per_buy: 50000000
    }
  }
}

module.exports = getShopItems
