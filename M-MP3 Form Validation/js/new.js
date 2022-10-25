
var UE_Email = document.getElementById('UE').value;
var valid = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function Validation_UEemail() {


    if (UE_Email.match(valid)) {

        alert('CORRECT UE EMAIL');
    } else {

        alert(ERROR);
    }

}
