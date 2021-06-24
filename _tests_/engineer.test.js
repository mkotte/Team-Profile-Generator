const Engineer = require('../lib/Engineer');

// example test values
const employee = new Engineer('Mike', 3014, 'mike@email.com', 'mkotte')


// Below tests are rather easy to understand
test('Returns the github username when a name is added', () => {
    expect(employee.github).toBe('mkotte');
});

test('Returns the role when asked to get the role', () => {
    expect(employee.getRole()).toBe('Engineer');
});

