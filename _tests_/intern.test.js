const Intern = require('../lib/Intern');

// example test values
const employee = new Intern('Mike', 3014, 'mike@email.com', 'OSU')


// Below tests are rather easy to understand
test('Returns the github username when a name is added', () => {
    expect(employee.school).toBe('OSU');
});

test('Returns the role when asked to get the role', () => {
    expect(employee.getRole()).toBe('Intern');
});
