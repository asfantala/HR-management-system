'use strict'
function Employee (id, name, department, level, image, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = salary;
  }


Employee.prototype.calculateSalary = function() {
    let min, max;
    switch (this.level) {
        case 'Senior':
            min = 1500;
            max = 2000;
            break;
        case 'Mid-Senior':
            min = 1000;
            max = 1500;
            break;
        case 'Junior':
            min = 500;
            max = 1000;
            break;
        default:
            break;
    }
    this.salary = Math.floor(Math.random() * (max - min + 1) + min);
    this.netSalary = this.salary - (this.salary * 7.5 / 100);
};


Employee.prototype.render = function() {
    const employeeContainer = document.createElement('div');
    employeeContainer.classList.add('employee');
    employeeContainer.innerHTML = `
        <img src="${this.imageUrl}" alt="Employee Image">
        <h2>${this.name}</h2>
        <p>Salary: $${this.netSalary}</p>
    `;
    document.querySelector('.main').appendChild(employeeContainer);
};


const employees = [
    new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', ''),
    new Employee(1001, 'Lana Ali', 'Finance', 'Senior', ''),
    new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', ''),
    new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', ''),
    new Employee(1004, 'Omar Zaid', 'Development', 'Senior', ''),
    new Employee(1005, 'Rana Saleh', 'Development', 'Junior', ''),
    new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', ''),
];

employees.forEach(employee => {
    employee.calculateSalary();
    employee.render();
});