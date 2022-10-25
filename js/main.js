//Personal info
var surname = document.getElementById("Surname").value;
var given_name = document.getElementById("Given_Name").value;
var middle_name = document.getElementById("Middle_Name").value;
var stud_num = document.getElementById("Std_Num").value;
var year_level = document.getElementById("Current_yr").value;
var program = document.getElementById("program").value;

//contact info
var email = document.getElementById("email").value;
var pemail = document.getElementById("pemail").value;
var number = document.getElementById("number").value;
var address = document.getElementById("address").value;
var paddress = document.getElementById("paddress").value;

//socmed
var fb = document.getElementById("fb").value;
var insta = document.getElementById("insta").value;
var twitter = document.getElementById("twitter").value;

//emergencies
var ename = document.getElementById("FullName").value;
var relationship = document.getElementById("relationship").value;
var enumber = document.getElementById("enumber").value;
var eaddress = document.getElementById("eaddress").value;
var samehome = document.getElementById("samehome").value;

//membership type
var membership_type = document.getElementById("Membership_type").value;
var proof = document.getElementById("proof").value;


$(function () {
    $("#wizard").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        enableContentCache: true,
        transitionEffectSpeed: 500,

        onFinishing: function (event, currentIndex) {

            const container = document.getElementById("program");
            //window.alert(useSoc(document.getElementById('fb')));
            var validRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
            var testnum = useRegex(document.getElementById('number'));
            var testenum = useRegex(document.getElementById('enumber'));
            var test = ValidateEmail(document.getElementById('email'));
            var test2 = ValidateEmail(document.getElementById('pemail'));
            //window.alert(test);
            //personal info
            if(document.getElementById("Surname").value == "" ) {
                window.alert("Please provide your surname.");
                return false;
            }else if(document.getElementById("Given_Name").value == "" ) {
                window.alert("Please provide your given name.");
                return false;
            }else if(document.getElementById("Std_Num").value.length!=11 ) {
                window.alert("Please enter a valid student number.");
                console.log(document.getElementById("Std_Num").value.length);
                return false;
            }else if (document.getElementById("yr1").checked == false && 
            document.getElementById("yr2").checked == false &&
            document.getElementById("yr3").checked == false && 
            document.getElementById("yr4").checked == false) {
                window.alert("Please choose your year level.");
                return false;
            }else if (container.textContent=="Program") {
                window.alert("Please choose a program.");
                console.log($('#program').find('li').eq(0).value);
                return false;
            } 
            // Contact Info
            else if (test==false) {
                window.alert("Please check if your UE email is correct.");
                return false;
            }
            else if (test2==false) {
                window.alert("Please check if your personal email is correct.");
                return false;
            }else if (testnum==false) {
                window.alert("Please check if your phone number is correct.");
                return false;
            }else  if(document.getElementById("address").value == "" ) {
                window.alert("Please provide your address.");
                return false;
            } 
            //SOCMED
            else if (document.getElementById("fb").value != "") {
                if (useSoc(document.getElementById("fb")) == false) {
                    window.alert("Please check your Facebook username.");
                    return false;
                }
            }
            else if (document.getElementById("insta").value != "") {
                if (useSoc(document.getElementById("insta")) == false) {
                    window.alert("Please check your Instagram username.");
                    return false;
                }
            }
            else if (document.getElementById("twitter").value != "") {
                if (useSoc(document.getElementById("twitter")) == false) {
                    window.alert("Please check your Twitter username.");
                    return false;
                }
            }
            //EMERGENCY
            else if (document.getElementById("FullName").value == "") {
                window.alert("Please check your emergency contact.");
                return false;
            }
            else if (document.getElementById("relationship").value == "") {
                window.alert("Please check your emergency relationship status.");
                return false;
            } else if (testenum == false) {
                window.alert("Please check if your emergency contact's phone number is correct.");
                return false;
            }
            //membership
            else if (document.getElementById("n").checked == false &&
                document.getElementById("r").checked == false &&
                document.getElementById("h").checked == false) {
                window.alert("Please check your membership type.");
                return false;
            }else if (document.getElementById("proof").value =="") {
                window.alert("Please attach proof of payment.");
                return false;
            } 
            else if (document.getElementById("accept").checked == false) {
                window.alert("Please check terms and conditions.");
                return false;
            }




            else {
                return true;
            }
        },
        onFinished: function (event, currentIndex) {
            window.alert("Succesfully registered!");
        },
        labels: {
            finish: "Submit",
            next: "Next",
            previous: "Previous"
        },
    });

    $('.wizard > .steps li a').click(function () {
        $(this).parent().addClass('checked');
        $(this).parent().prevAll().addClass('checked');
        $(this).parent().nextAll().removeClass('checked');
    });
    $('.Next').click(function () {
        $("#wizard").steps('next');
    })
    $('.Previous').click(function () {
        $("#wizard").steps('previous');
    })
    $('.Submit').click(function () {
        $("#wizard").steps('finish');
    })
    $('html').click(function () {
        $('.select .dropdown').hide();
    });
    $('.select').click(function (event) {
        event.stopPropagation();
    });
    $('.select .select-control').click(function () {
        $(this).parent().next().toggle();
    })
    $('.select .dropdown li').click(function () {
        $(this).parent().toggle(); var text = $(this).attr('rel'); $(this).parent().prev().find('div').text(text);
    })
    $('.Submit').click(function () {
        window.alert("test");
        return false;
    });

})

function validate() {
    //Personal info
    if (document.myForm.surname.value == "") {
        window.alert("Please provide your name!");
        document.myForm.surname.focus();
        return false;
    }/*
    if( document.myForm.EMail.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
    if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
       document.myForm.Zip.value.length != 5 ) {
       
       alert( "Please provide a zip in the format #####." );
       document.myForm.Zip.focus() ;
       return false;
    }
    if( document.myForm.Country.value == "-1" ) {
       alert( "Please provide your country!" );
       return false;
    }
    return( true );*/
}

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}

function useRegex(input) {
    var mailformat = /^09[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/i;
    if (input.value.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}
function useSoc(input) {
    var same = /^@/;
    if (input.value.match(same)) {
        window.alert("If you are getting this error, nadetect yung @ sa start but JS decided that it wont proceed with the onFinished method for some reason. So please just leave the user names blank after checking sir :D");
        window.alert("proof: matchcase = " + check(input));
        return;
    }
    else {
        return false;
    }
}
function check(input) {
    var mailformat = /^@/i;
    if (input.value.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}