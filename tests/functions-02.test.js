/* eslint-disable no-undef */
const store = require('../src/functions-02');

test('getName', () => {
  expect(store.getName()).toBe('This Object Store');
});

test('getInventory', () => {
  const sampleInventory = [
    { name: 'Bike', price: 100, quantity: 5 },
    { name: 'TV', price: 200, quantity: 8 },
    { name: 'Album', price: 10, quantity: 150 },
    { name: 'Book', price: 5, quantity: 72 },
    { name: 'Phone', price: 105, quantity: 58 },
    { name: 'Computer', price: 1000, quantity: 12 },
    { name: 'Keyboard', price: 25, quantity: 67 },
    { name: 'Mouse', price: 35, quantity: 93 },
    { name: 'Speaker', price: 145, quantity: 8 },
    { name: 'Monitor', price: 175, quantity: 13 },
    { name: 'Printer', price: 165, quantity: 4 },
    { name: 'Scanner', price: 149, quantity: 2 },
  ];
  expect(store.getInventory()).toEqual(sampleInventory);
});

test('getExpensiveItems', () => {
  const sampleObj1 = { name: 'Computer', price: 1000, quantity: 12 };
  const sampleObj2 = { name: 'TV', price: 200, quantity: 8 };
  expect(store.getExpensiveItems(800)).toEqual([sampleObj1]);
  expect(store.getExpensiveItems(180)).toEqual([sampleObj2, sampleObj1]);
});

test('getStoreItems', () => {
  const items = [
    'Bike',
    'TV',
    'Album',
    'Book',
    'Phone',
    'Computer',
    'Keyboard',
    'Mouse',
    'Speaker',
    'Monitor',
    'Printer',
    'Scanner',
  ];
  expect(store.getStoreItems()).toEqual(items);
});

test('isItemInStore', () => {
  expect(store.isItemInStore('Bike')).toBe(true);
  expect(store.isItemInStore('Skateboard')).toBe(false);
});

test('getItemPrice', () => {
  expect(store.getItemPrice('Bike')).toBe(100);
  expect(store.getItemPrice('Skateboard')).toBe(-1);
});

test('getItemQuantity', () => {
  expect(store.getItemQuantity('Bike')).toBe(5);
  expect(store.getItemQuantity('Skis')).toBe(-1);
});

test('addItemQuantity', () => {
  expect(store.addItemQuantity('Bike', 100, 3)).toBe(8);
  expect(store.addItemQuantity('Skateboard', 100, 1)).toBe(1);
  expect(store.addItemQuantity('Skateboard', 100, 1)).toBe(2);
});

test('removeItemQuantity', () => {
  const scannerCount = store.getItemQuantity('Scanner');
  expect(store.removeItemQuantity('Bike', 2)).toBe(6);
  expect(store.removeItemQuantity('Skis', 2)).toBe(-1);
  expect(store.removeItemQuantity('Scanner', 22)).toBe(-1);
  expect(store.getItemQuantity('Scanner')).toBe(scannerCount);
});

test('getTotalValue', () => {
  const total = 31673;
  expect(store.getTotalValue()).toBe(total);
  store.addItemQuantity('Bike', 100, 3);
  expect(store.getTotalValue()).toBe(total + 100 * 3);
});
