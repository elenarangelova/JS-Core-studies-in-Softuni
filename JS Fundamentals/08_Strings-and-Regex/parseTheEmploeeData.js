/**
 * Write a JS function that validates employee data, and stores it if it is valid. The employee data consists of 3 elements –
 * employee name, employee salary and employee position.
 The input comes as an array of strings. Each element represents input employee data. You should capture only the valid from them.
 The input will have the following format:
 {employeeName} - {employeeSalary} - {employeePosition}
 The Employee name will be a string, which can contain only English alphabet letters and must start with a capital.
 The Employee salary should be a VALID number. The employee position can contain English alphabet letters, digits, dashes,
 and can consist of several words. Any input that does NOT follow the specified above rules, is to be treated as invalid, and
 is to be ignored.
 The output should be printed on the console. For every valid employee data found, you should print each of its elements.
 Check the examples.

 */
function parseEmployee(input) {
    let stuff = [];
    for (let line of input) {
        let arr = line.match(/^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([A-Za-z0-9 -]+)$/);
        let employee = {};
        if (arr != null) {
            employee.name = arr[1];
            employee.salary = arr[2];
            employee.position = arr[3];
            stuff.push(employee);
        }
        continue;
    }
    stuff.forEach(function (e) {
        console.log(`Name: ${e.name}`);
        console.log(`Position: ${e.position}`);
        console.log(`Salary: ${e.salary}`);
    })
}

parseEmployee([
    'Jonathan - 2000 – Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader'
])