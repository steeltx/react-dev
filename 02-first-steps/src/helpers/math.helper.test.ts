import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {
    test('should add two positive numbers', () => {
        // arrange
        const a = 1;
        const b = 2;

        // act
        const result = add(a, b);

        // assert
        expect(result).toBe(a + b);
    });

    test('should add two negative numbers', () => {
        // arrange
        const a = -2;
        const b = -4;

        // act
        const result = add(a, b);

        // assert
        expect(result).toBe(a + b);
    });
});

describe('subtract', () => {
    test('should subtract two positive numbers', () => {
        const a = 2;
        const b = 4;

        const result = subtract(a, b);

        expect(result).toBe(a - b);
    });
    test('should subtract two negative numbers', () => {
        const a = -2;
        const b = -4;

        const result = subtract(a, b);

        expect(result).toBe(a - b);
    });
});

describe('multiply', () => {
    test('should multiply two positive numbers', () => {
        const a = 2;
        const b = 4;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });
    test('should multiply two negative numbers', () => {
        const a = -2;
        const b = -4;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });
    test('should divide two positive numbers', () => {
        const a = -2;
        const b = -4;

        const result = divide(a, b);

        expect(result).toBe(a / b);
    });
});
