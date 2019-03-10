$(document).ready(readyNow);

let employees = [];

function addPerson(){
    console.log('in addPerson');
    let newPerson= {
        firstName: $( '#firstNameIn' ).val(),
        lastName: $('#lastNameIn').val(),
        idName: $('#idNameIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
        
    } // end newPerson
    employees.push(newPerson)
    console.log( 'employee :', employees );
    displayFirst();
    displaylast();
    displayId();
    displayJob();
    displaySal();
} // end addItem

function displayFirst(){
    console.log(' in displayFirst ');
    el = $( '#firstOut');
    el.empty();
    // loop through the employees array
    for (let first of employees){
    // for each person create a new <td> in employeeOut
        el.append(`<td>${ first.firstName }</td>`);

    } // end for
    
} // end displayFirst

function displaylast() {
    console.log(' in displaylast ');
    el = $('#lastOut');
    el.empty();
    // loop through the employees array
    for (let last of employees) {
        // for each person create a new <td> in employeeOut
        el.append(`<td>${last.lastName}</td>`);

    } // end for

} // end displaylast

function displayId() {
    console.log(' in displayId ');
    el = $('#IdOut');
    el.empty();
    // loop through the employees array
    for (let id of employees) {
        // for each person create a new <td> in employeeOut
        el.append(`<td>${id.idName}</td>`);

    } // end for

} // end displayId

function displayJob() {
    console.log(' in displayJob ');
    el = $('#jobOut');
    el.empty();
    // loop through the employees array
    for (let job of employees) {
        // for each person create a new <td> in employeeOut
        el.append(`<td>${job.jobTitle}</td>`);

    } // end for

} // end displayJob

function displaySal() {
    console.log(' in displaySal ');
    el = $('#salOut');
    el.empty();
    // loop through the employees array
    for (let sal of employees) {
        // for each person create a new <td> in employeeOut
        el.append(`<td>${sal.annualSalary}</td>`);

    } // end for

} // end displaySal

// on click adds a new person to the table
function readyNow(){
    $( '#addInfo' ).on( 'click', addPerson);
} // end readNow

