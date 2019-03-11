$(document).ready(readyNow);

const employees = [];

// on click adds a new person to the table
function readyNow() {
    $('#addInfo').on('click', addEmployee);
    $('#totalMonthlyCost')
} // end readNow


function empInfo(){
    console.log('in empInfo');
    let newPerson= {
        firstName: $( '#firstNameIn' ).val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
        
    } // end newPerson
    return newPerson;
} // end empInfo

function addInTable() {
    $('.tableInputs').empty();

    for (let item of employees) {
        let tr = $(`<tr class = "newRow"><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.idNumber}</td><td>${item.jobTitle}</td><td>$${item.annualSalary}</td></tr>`);
        tr.data(item);
        $('.tableInputs').append(tr);
    }//end for loop
    $('#totalMonthlyCost');
    calcMonthlyCost()
} // end addInTable

function addEmployee() {
    let employee = empInfo();

     employees.push(employee);

     $('#firstNameIn').val('');
     $('#lastNameIn').val('');
     $('#idNumberIn').val('');
     $('#jobTitleIn').val('');
     $('#annualSalaryIn').val('');
     addInTable();

}//end addEmployee

function calcMonthlyCost() {
    let totalMonthly = 0;
    for (let i = 0; i < employees.length; i++) {
        totalMonthly += Number(employees[i].annualSalary ) / 12;
    }//end for
    if (totalMonthly > 20000) {
        $('#addMonthlyTotal').css({ 'background-color': 'red' }).append('$', totalMonthly.toFixed(2));
    }//end if
    else {
        return $('#addMonthlyTotal').append('$', totalMonthly.toFixed(2));
    }
}//end calcMonthlyCost



