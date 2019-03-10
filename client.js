$(document).ready(readyNow);

function addItem(){
    console.log('in addItem');
    
} // end addItem



function readyNow(){
    $( '#addInfo' ).on( 'click', addItem )

} // end readNow

