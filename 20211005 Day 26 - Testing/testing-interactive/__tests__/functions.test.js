const { add, subtract, divide, multiply, strConcatenator } = require('../functions');

test('hello world', () => {
    expect(1).toBe(1);
});

describe('math tests', () => {
    test('add should add two numbers', () => {
        expect(add(4,10)).toBe(14);
    });
    
    test('subtract should subtract two numbers', () => {
        expect(subtract(4,10)).toBe(-6)
    });
    
    test('divide should divide two numbers', () => {
        expect(divide(400,10)).toBe(40)
    });
    
    test('multiply should multiply two numbers', () => {
        expect(multiply(5,5)).toBe(25)
    });
})

//Same as above
test('add should add two numbers', () => {
    expect(add(4,10)).toBe(14);
});

test('subtract should subtract two numbers', () => {
    expect(subtract(4,10)).toBe(-6)
});

test('divide should divide two numbers', () => {
    expect(divide(400,10)).toBe(40)
});

test('multiply should multiply two numbers', () => {
    expect(multiply(5,5)).toBe(25)
});

test('strConcatenator should not return a number', () => {
    expect(strConcatenator('I am ', '5')).not.toBeNaN()
});

test('expect strConcatenator should return a concatenated string', () => {
    expect(strConcatenator('I am ', 'happy')).toEqual('I am happy')
});

test('reference types are special', () => {
    //expect([1,2,3,]).toBe([1,2,3])
    expect([1,2,3,]).toEqual([1,2,3,])
});

test('users array should contain correct people', () => {
    const myArr = ['Joe', 'Becca', 'Sam'];

    expect(myArr).toContain('Becca')
    expect(myArr).not.toContain('Jeddy')
});

let backAccount = {
    balance: 1000,
    depositMoney(amount) {
        this.balance += amount;
        return this.balance;
    },
    withdrawMoney(amount) {
        this.balance -= amount;
        return this.balance;
    },
};

describe('bank account methods', () => {
    beforeEach(() => {
        backAccount.balance = 1000;
    })

    test('initial balance is 1000', () => {
      expect(backAccount.balance).toEqual(1000)  
    })

    test('depositing money works', () => {
        backAccount.depositMoney(10000);
        expect(backAccount.balance).toBe(11000)  
    })

    test('withdrawing money works', () => {
        backAccount.withdrawMoney(500)
        expect(backAccount.balance).toBe(500)  
    })

    afterAll (() => {
        backAccount.balance = 0;
    })
});