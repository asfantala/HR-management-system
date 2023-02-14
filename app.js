'use strict'
function Employee (id, name, department, level, image, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = salary;
this.netSalary=0;  }




Employee.prototype.idNumber =function (){
    
        this.id = uniqueId;
        return this.id;
      
    }

function uniqueId (){
    return Math.floor(Math.random() * 9000) + 1000;

}

console.log(uniqueId());

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
    return this.netSalary;
};

Employee.prototype.render = function() {

const container = document.getElementById('employeesSection');
console.log(container);


const divEl =document.createElement('div');
container.appendChild(divEl);

const imgEl =document.createElement('img');
divEl.appendChild(imgEl);
imgEl.setAttribute('src',this.image);
imgEl.width="100";
imgEl.height="150";

const employeeName =document.createElement('h4');
divEl.appendChild(employeeName);
employeeName.textContent="Name:"+this.name;

const idEl =document.createElement('h4');
divEl.appendChild(idEl);
idEl.textContent="ID:"+this.id;

const departmentEl =document.createElement('p');
divEl.appendChild(departmentEl);
departmentEl.textContent="Department:";

const levelEl =document.createElement('p');
divEl.appendChild(levelEl);
levelEl.textContent="level:"+this.level;

const salaryEl =document.createElement('p');
divEl.appendChild(salaryEl);
salaryEl.textContent= this.netSalary;
 

const hrEl = document.createElement('hr');
divEl.appendChild(hrEl);
}
let employeeForm = document.getElementById("Employee ID");
employeeForm.addEventListener('submit', addEmployee);

function addEmployee (event){
    event.preventDefault();
    console.log(event);
// let id =event.target.id.value;
let name =event.target.fullname.value;
let department=event.target.department.value;
let level =event.target.level.value;
let image =event.target.ImageUrl.value;
// let salary =event.target.salary.value;




let newEmployee = new Employee(name, department, level, image);
newEmployee.render();
newEmployee.idNumber();
newEmployee.calculateSalary();

   
}
// Employee.prototype.render = function() {
// console.log(`${this.name}`);
 
//     const employeeContainer = document.createElement('div');
//     employeeContainer.classList.add('employee');
//     employeeContainer.innerHTML="tala";
// const container = document.getElementById("employee-info");
// document.writeln(`${this.name}`);
// document.writeln(`${this.netSalary}`)
// };


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

// const m =new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', '');
// m.calculateSalary();
// m.render();

// const n=new Employee(1001, 'Lana Ali', 'Finance', 'Senior', '');
// n.calculateSalary();
// n.render();

// const o=new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', '');
// o.calculateSalary();
// o.render();

// const l=new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', '');
// l.calculateSalary();
// l.render();

// const f=new Employee(1004, 'Omar Zaid', 'Development', 'Senior', '');
// f.calculateSalary();
// f.render();

// const r=new Employee(1005, 'Rana Saleh', 'Development', 'Junior', '');
// r.calculateSalary();
// r.render();
// const h=new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', '');
// h.calculateSalary();
// h.render();

