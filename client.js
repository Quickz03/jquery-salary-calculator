$(document).ready(readyNow);

const employees = [];

// on click adds a new person to the table
function readyNow() {
    $('#addInfo').on('click', addEmployee);
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


