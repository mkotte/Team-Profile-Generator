const Employee = require('../lib/Employee');

// example test values
const employee = new Employee('Mike', 3014, 'mike@email.com')

//checking that a new instance returns an object
test('Can create an Employee object', () => {
    // typeof is checking the type of our example, outputting type in a string
    expect(typeof(employee)).toBe("object");
});

// Below tests are rather easy to understand
test('Returns the name when a name is added', () => {
    expect(employee.name).toBe("Mike");
});
  
test('Returns the id when an id is added', () => {
    expect(employee.id).toBe(3014);
});
  
test('Returns the email when an email is added', () => {
    expect(employee.email).toBe('mike@email.com');
});

test('Returns the role when asked to get the role', () => {
    expect(employee.getRole()).toBe('Employee');
});

