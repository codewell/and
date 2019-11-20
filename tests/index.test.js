const and = require('../src');


test('No arguments', () => {
  expect(and())
    .toBe(true)
})

test('No arguments, false on empty', () => {
  expect(and(undefined, false))
    .toBe(false)
})

test('No arguments, false on empty', () => {
  expect(and(undefined, 'false'))
    .toBe(false)
})

test('No arguments, false on empty', () => {
  expect(() => {
    and(undefined, 'throw')
  }).toThrow()
})

test('No arguments', () => {
  expect(and([]))
    .toBe(true)
});

test('One argument true', () => {
  expect(and([true]))
    .toBe(true)
});

test('One argument false', () => {
  expect(and([false]))
    .toBe(false)
});

test('Two arguments true', () => {
  expect(and([true, true]))
    .toBe(true)
});

test('Two arguments false', () => {
  expect(and([false, false]))
    .toBe(false)
});

test('Two arguments true/false', () => {
  expect(and([true, false]))
    .toBe(false)
});

test('Two arguments false/true', () => {
  expect(and([false, true]))
    .toBe(false)
});

test('Two arguments true, 1', () => {
  expect(and([true, 1]))
    .toBe(false)
});

test('Two arguments true "foo"', () => {
  expect(and([true, 'foo']))
    .toBe(false)
});

// Faulty input
test('Bad input', () => {
  expect(() => {
    and(1)
  })
    .toThrow()
});

test('Bad input', () => {
  expect(() => {
    and('hello')
  })
    .toThrow()
});



