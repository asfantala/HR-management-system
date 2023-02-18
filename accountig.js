'use strict'
import{employeeArr  }from 'app.js';

let arr1 = employeeArr.deparment.filter (employeesArr => employeesArr.department === "Administration" && employeeArr.netSalary);
let arr2 = employeeArr.deparment.filter (employeesArr => employeesArr.department === "Finance"&& employeeArr.netSalary);
let arr3 = employeeArr.deparment.filter (employeesArr => employeesArr.department === "Marketing" && employeeArr.netSalary);
let arr4 = employeeArr.deparment.filter (employeesArr => employeesArr.department === "Development"&& employeeArr.netSalary);
let numberOfTotEmployee =employeeArr.length; 

function totalSalary1(arr1) {
    if (arr1 == null) {
        arr1 = [];
    }
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i].netSalary

    }
    return sum 
}
function totalSalary2(arr2) {
    if (arr2 == null) {
        arr2 = [];
    }
    let sum = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i].netSalary

    }
    return sum 
}
function totalSalary3(arr3) {
    if (arr3== null) {
        arr3 = [];
    }
    let sum = 0;
    for (let i = 0; i < arr3.length; i++) {
        sum += arr3[i].netSalary

    }
    return sum 
}
function totalSalary4(arr4) {
    if (arr4== null) {
        arr4 = [];
    }
    let sum = 0;
    for (let i = 0; i < arr4.length; i++) {
        sum += arr4[i].netSalary

    }
    return sum 
}

let AverageSalary1 = totalSalary1/arr1.length;
let AverageSalary2 = totalSalary2/arr1.length;
let AverageSalary3 = totalSalary3/arr1.length;
let AverageSalary4 = totalSalary4/arr1.length;





function sumTotalSalaries(employeeArr) {
    if (employeeArr == null) {
        employeeArr = [];
    }
    let sumTotalSalaries = 0;
    for (let i = 0; i < employeeArr.length; i++) {
        sumTotalSalaries += employeeArr[i].salary
    }
    return sumTotalSalaries
}


function avgOfallSalaries(employeeArr){
    if (employeeArr == null) {
        employeeArr = [];
    }
    let avgOfSalaries = 0;
    for (let x = 0; x < employeeArr.length; x++) {
        avgOfSalaries += employeeArr[x]
        
    }
    return avgOfSalaries / employeeArr.length
}

function render (){
    const container = document.getElementById("accountig");

    admNumEmpl.textContent = `${arr1.length}`;
    marNumEmpl.textContent = `${arr3.length}`;
    finNumEmpl.textContent = `${arr2.length}`;
    devNumEmpl.textContent = `${arr4.length}`;

    avgSalaryOfMar.textContent = `${AverageSalary3}`;
    avgSalaryOfAdm.textContent = `${AverageSalary1}`;
    avgSalaryOfFin.textContent = `${AverageSalary2}`;
    avgSalaryOfDev.textContent = `${AverageSalary4}`;

    totSalaryOfMar.textContent = `${totalSalary3(arr3)}`;
    totSalaryOfAdm.textContent = `${totalSalary1(arr1)}`;
    totSalaryOfFin.textContent = `${totalSalary2(arr2)}`;
    totSalaryOfDev.textContent = `${totalSalary4(arr4)}`;

    totNumOfEmp.textContent = numberOfTotEmployee;
    totalOfAvg.textContent = `${avgOfallSalaries()}`;
    totOfTotSal.textContent = `${sumTotalSalaries()}`;
    

}

// let jsonArr = localStorage.getItem("allEmployees");
// if (employeeArr !== null) {
//     employeeArr = JSON.parse(jsonArr);
// }
render();

