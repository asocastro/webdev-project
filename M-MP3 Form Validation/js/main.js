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
var accept = document.getElementById("accept").value;


$(function () {
    $("#wizard").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        enableContentCache: true,
        transitionEffectSpeed: 500,

        onFinishing: function (event, currentIndex) {

            for (var i = 0; i < document.myForm.Year.length; i++) {
                if (document.myForm.Year[i].checked) {
                    var rad_val = document.myForm.Year[i].value;
                }
            }

            //personal info
            /*if(document.getElementById("Surname").value == "" ) {
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
            }else*/ if (document.getElementsByName("program").selected == false) {
                window.alert("Please choose a program.");
                console.log(document.getElementById("program").value);
                return false;
            } else {
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

