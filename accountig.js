'use strict'
// import{employeeArr}from './app.js';
let employeeArr = JSON.parse(localStorage.getItem("allemployee"));
if (employeeArr == null){
    employeeArr=[];}
let arr1 = employeeArr.filter(employee => employeeArr.department === "administration" && employeeArr.netSalary);
let arr2 = employeeArr.filter(employee => employeeArr.department === "finance" && employeeArr.netSalary);
let arr3 = employeeArr.filter(employee => employeeArr.department === "marketing" && employeeArr.netSalary);
let arr4 = employeeArr.filter(employee => employeeArr.department === "development" && employeeArr.netSalary);
// let numberOfTotEmployee =employeeArr.length;
    





let admNumEmp = 0;
let admTotalSalary = 0;
employeeArr.forEach(function(employee) {
  if (employee.department === 'administration') {
    admNumEmp++;
    admTotalSalary += employee.netSalary;
  }
});

let admAvgSalary = admNumEmp !== 0 ? admTotalSalary / admNumEmp : 0;

document.getElementById('admNumEmpl').textContent = admNumEmp;
document.getElementById('totSalaryOfAdm').textContent = admTotalSalary;
document.getElementById('avgSalaryOfAdm').textContent = admAvgSalary;



let marNumEmp = 0;
let marTotalSalary = 0;
employeeArr.forEach(function(employee) {
  if (employee.department === 'marketing') {
    marNumEmp++;
    marTotalSalary += employee.netSalary;
  }
});
let marAvgSalary = marNumEmp !== 0 ? marTotalSalary / marNumEmp : 0;
document.getElementById('marNumEmpl').textContent = marNumEmp;
document.getElementById('totSalaryOfMar').textContent = marTotalSalary;
document.getElementById('avgSalaryOfMar').textContent = marAvgSalary;


let finNumEmp = 0;
let finTotalSalary = 0;
employeeArr.forEach(function(employee) {
  if (employee.department === 'finance') {
    finNumEmp++;
    finTotalSalary += employee.netSalary;
  }
});
let finAvgSalary = finNumEmp !== 0 ? finTotalSalary / finNumEmp : 0;
document.getElementById('finNumEmpl').textContent = finNumEmp;
document.getElementById('totSalaryOfFin').textContent = finTotalSalary;
document.getElementById('avgSalaryOfFin').textContent = finAvgSalary;

let devNumEmp = 0;
let devTotalSalary = 0;
employeeArr.forEach(function(employee) {
  if (employee.department === 'marketing') {
    devNumEmp++;
    devTotalSalary += employee.netSalary;
  }
});
let devAvgSalary = devNumEmp !== 0 ? devTotalSalary / devNumEmp : 0;
document.getElementById('devNumEmpl').textContent = devNumEmp;
document.getElementById('totSalaryOfDev').textContent = devTotalSalary;
document.getElementById('avgSalaryOfDev').textContent = devAvgSalary;
let sumTotalSalaries= finTotalSalary +devTotalSalary+marTotalSalary+admTotalSalary;
let avgOfallSalaries=employeeArr.length !==0? sumTotalSalaries/employeeArr.length :0;   

    totNumOfEmp.textContent = employeeArr.length;
    totalOfAvg.textContent = avgOfallSalaries;
    totOfTotSal.textContent = sumTotalSalaries;
    

// function totalSalary1(arr1) {
//     if (arr1 == null) {
//         arr1 = [];
//     }
//     let sum = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         sum += arr1[i].netSalary

//     }
//     return sum 
// }
// function totalSalary2(arr2) {
//     if (arr2 == null) {
//         arr2 = [];
//     }
//     let sum = 0;
//     for (let i = 0; i < arr2.length; i++) {
//         sum += arr2[i].netSalary

//     }
//     return sum 
// }
// function totalSalary3(arr3) {
//     if (arr3== null) {
//         arr3 = [];
//     }
//     let sum = 0;
//     for (let i = 0; i < arr3.length; i++) {
//         sum += arr3[i].netSalary

//     }
//     return sum 
// }
// function totalSalary4(arr4) {
//     if (arr4== null) {
//         arr4 = [];
//     }
//     let sum = 0;
//     for (let i = 0; i < arr4.length; i++) {
//         sum += arr4[i].netSalary

//     }
//     return sum 
// }

// let AverageSalary1 = totalSalary1(arr1)/arr1.length;
// let AverageSalary2 = totalSalary2(arr2)/arr2.length;
// let AverageSalary3 = totalSalary3(arr3)/arr3.length;
// let AverageSalary4 = totalSalary4(arr4)/arr4.length;





// function sumTotalSalaries(employeeArr) {
//     if (employeeArr == null) {
//         employeeArr = [];
//     }
//     let sumTotalSalaries = 0;
//     for (let i = 0; i < employeeArr.length; i++) {
//         sumTotalSalaries += employeeArr[i].salary
//     }
//     return sumTotalSalaries
// }


// function avgOfallSalaries(employeeArr){
//     if (employeeArr == null) {
//         employeeArr = [];
//     }
//     let avgOfSalaries = 0;
//     for (let x = 0; x < employeeArr.length; x++) {
//         avgOfSalaries += employeeArr[x]
        
//     }
//     return avgOfSalaries / employeeArr.length
// }

// // function render () {
// //     const container = document.getElementById("accountig");
// //     container.innerHTML ='';
// //     if (employee == null){
// //         employee=[];}
// // for (let i=0 ; i<employee.length; i++){

   

//     admNumEmpl.textContent = `${arr1.length}`;
//     marNumEmpl.textContent = `${arr3.length}`;
//     finNumEmpl.textContent = `${arr2.length}`;
//     devNumEmpl.textContent = `${arr4.length}`;

//     avgSalaryOfMar.textContent = `${AverageSalary3}`;
//     avgSalaryOfAdm.textContent = `${AverageSalary1}`;
//     avgSalaryOfFin.textContent = `${AverageSalary2}`;
//     avgSalaryOfDev.textContent = `${AverageSalary4}`;

//     totSalaryOfMar.textContent = `${totalSalary3(arr3)}`;
//     totSalaryOfAdm.textContent = `${totalSalary1(arr1)}`;
//     totSalaryOfFin.textContent = `${totalSalary2(arr2)}`;
//     totSalaryOfDev.textContent = `${totalSalary4(arr4)}`;

//     totNumOfEmp.textContent = numberOfTotEmployee;
//     totalOfAvg.textContent = `${avgOfallSalaries(employeeArr)}`;
//     totOfTotSal.textContent = `${sumTotalSalaries(employeeArr)}`;
    

// }
// }
// // let jsonArr = localStorage.getItem("allEmployees");
// // if (employeeArr !== null) {
// //     employeeArr = JSON.parse(jsonArr);
//

