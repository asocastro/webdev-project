(function($) {

    $( "#birth_date" ).datepicker({
        dateFormat: "mm - dd - yy",
        showOn: "both",
        buttonText : '<i class="zmdi zmdi-calendar-alt"></i>',
    });

    $('.add-info-link ').on('click', function() {
        $('.add_info').toggle( "slow" );
    });

    $('#program').parent().append('<ul class="list-item" id="newprogram" name="program"></ul>');
    $('#program option').each(function(){
        $('#newprogram').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#program').remove();
    $('#newprogram').attr('id', 'program');
    $('#program li').first().addClass('init');
    $("#program").on("click", ".init", function() {
        $(this).closest("#program").children('li:not(.init)').toggle();
    });

    $('#year_level').parent().append('<ul class="list-item" id="newyear_level" name="year_level"></ul>');
    $('#year_level option').each(function(){
        $('#newyear_level').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#year_level').remove();
    $('#newyear_level').attr('id', 'year_level');
    $('#year_level li').first().addClass('init');
    $("#year_level").on("click", ".init", function() {
        $(this).closest("#year_level").children('li:not(.init)').toggle();
    });

    var allOptions = $("#program").children('li:not(.init)');
    $("#program").on("click", "li:not(.init)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#program").children('.init').html($(this).html());
        allOptions.toggle('fast');
    });

    var FoodOptions = $("#year_level").children('li:not(.init)');
    $("#year_level").on("click", "li:not(.init)", function() {
        FoodOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#year_level").children('.init').html($(this).html());
        FoodOptions.toggle('fast');
    });

    $('#signup-form').validate({
        rules : {
            first_name : {
                required: true,
            },
            last_name : {
                required: true,
            },
            phone_number : {
                required: true
            },
            password : {
                required: true
            },
            re_password : {
                required: true,
                equalTo: "#password"
            }
        },
        onfocusout: function(element) {
            $(element).valid();
        },
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });
})(jQuery);