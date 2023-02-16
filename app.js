'use strict'
function Employee (id, name, department, level, image, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = salary;
this.netSalary=0;  }


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
console.log(`${this.name}`);
 
    const employeeContainer = document.createElement('div');
    employeeContainer.classList.add('employee');
    // employeeContainer.innerHTML = `
    //     <img src="${this.image}" alt="Employee Image">
    //     <h2>${this.name}</h2>
    //     <p>Salary: $${this.netSalary}</p>
    // `;
    employeeContainer.innerHTML="tala";
const container = document.getElementById("employee-info");
document.writeln(`${this.name}`);
document.writeln(`${this.netSalary}`)
};


// const employees = [
//     new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', ''),
//     new Employee(1001, 'Lana Ali', 'Finance', 'Senior', ''),
//     new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', ''),
//     new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', ''),
//     new Employee(1004, 'Omar Zaid', 'Development', 'Senior', ''),
//     new Employee(1005, 'Rana Saleh', 'Development', 'Junior', ''),
//     new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', ''),
// ];

// employees.forEach(employee => {
//   employee.calculateSalary();
//     employee.render();
// });
// console.log(employees);

const m =new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', '');
m.calculateSalary();
m.render();

const n=new Employee(1001, 'Lana Ali', 'Finance', 'Senior', '');
n.calculateSalary();
n.render();

const o=new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', '');
o.calculateSalary();
o.render();

const l=new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', '');
l.calculateSalary();
l.render();

const f=new Employee(1004, 'Omar Zaid', 'Development', 'Senior', '');
f.calculateSalary();
f.render();

const r=new Employee(1005, 'Rana Saleh', 'Development', 'Junior', '');
r.calculateSalary();
r.render();
const h=new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', '');
h.calculateSalary();
h.render();

