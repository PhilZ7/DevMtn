const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions');

test('Will check if returns the integer 2', () => {
    expect(returnTwo(1 + 1)).toEqual(2)
});

test('Will greet James/Jill', () => {
    expect(greeting('Jill')).toEqual('Hello, Jill.')
});

describe('math functions test', () => {
    test('Will ADD both integers and return value', () => {
    expect(add(10,2)).toEqual(12)
    });

    test('Will MULTIPLY both integers and return value', () => {
    expect(multiply(10,2)).toEqual(20)
    expect(multiply).not.toEqual(12)
    });

    test('Will DIVIDE both integers and return value', () => {
        expect(divide(10,2)).toEqual(5)
        expect(divide).not.toBeNaN()
    });

    test('Will SUBTRACT both integers and return value', () => {
        expect(subtract(10,2)).toEqual(8)
        expect(subtract).not.toEqual(20)
    });
});