$(document).ready(readyNow);

function addPerson(){
    console.log('in addPerson');
    let newPerson= {
        firstName: $( '#firstNameIn' ).val(),
        lastName: $('#lastNameIn').val(),
        idName: $('#idNameIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }
    console.log( 'in newPerson', newPerson );
 
    
} // end addItem



function readyNow(){
    $( '#addInfo' ).on( 'click', addPerson)
} // end readNow

