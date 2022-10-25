$(function () {
    $("#wizard").steps({ 
        headerTag: "h2", 
        bodyTag: "section",
        transitionEffect: "fade", 
        enableAllSteps: true, 
        transitionEffectSpeed: 500, 
        labels: {
             finish: "Submit", 
             next: "   Next", 
             previous: "Previous" 
            } 
        }); 
    $('.wizard > .steps li a').click(function () {
             $(this).parent().addClass('checked'); 
             $(this).parent().prevAll().addClass('checked'); 
             $(this).parent().nextAll().removeClass('checked'); 
            }); 
    $('.forward').click(function () {
         $("#wizard").steps('next'); 
    })
    $('.backward').click(function () { $("#wizard").steps('previous'); })
    $('html').click(function () { $('.select .dropdown').hide(); }); $('.select').click(function (event) { event.stopPropagation(); }); $('.select .select-control').click(function () { $(this).parent().next().toggle(); })
    $('.select .dropdown li').click(function () { $(this).parent().toggle(); var text = $(this).attr('rel'); $(this).parent().prev().find('div').text(text); })

})


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


