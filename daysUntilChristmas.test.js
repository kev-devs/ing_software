const daysUntilChristmas = require('./daysUntilChristmas');

test('Days until Christmas', () => {
  expect(daysUntilChristmas()).toBe(285); 
});