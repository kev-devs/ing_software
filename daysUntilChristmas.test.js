const daysUntilChristmas = require('./daysUntilChristmas');

test('Days until Christmas', () => {
  // Considering the current date is March 15, 2024
  expect(daysUntilChristmas()).toBe(285); // Adjust accordingly for the current year
});