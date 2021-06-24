const Manager = require('../lib/Manager');

// example test values
const employee = new Manager('Mike', 3014, 'mike@email.com', '123')


// Below tests are rather easy to understand
test('Returns the github username when a name is added', () => {
    expect(employee.officeNumber).toBe('123');
});

test('Returns the role when asked to get the role', () => {
    expect(employee.getRole()).toBe('Manager');
});