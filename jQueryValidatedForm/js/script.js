$(document).ready(function () {

    console.log("JQuery is ready....");

    $("[type='button']").css({
        "background": "#feaa26"
    });
    //    $("[type='button']").toggleClass("hover");
    ////    $(".hover").css({
    ////        "background": "black"
    ////    });
    $("#testForm4 p").css({
        "text-indent": "50px",
        "text-align": "justify",
        "text-justify": "inter-word"
    });
    $("ul").css({
        "background": "#f2f2f2",
        "border": "none"
    });
    $("ul li").css({
        "border": "none"
    });
    $("li a").css({
        "color": "#999999",

    });
    $("main").css({
        "clear": "both",
        "height": "auto"
    });
    $("#tabs").css({
        "background": "white",


    });
    $("#confirm").dialog({
        title: "Submit application?",
        autoOpen: false,
        buttons: [
            {
                text: "I agree",
                icon: "ui-icon-check",
                click: function () {
                    $(this).dialog("close");
                    window.location.href = ("aa.html");
                }
			},
            {
                text: "Cancel",
                icon: "ui-icon-cancel",
                click: function () {
                    $(this).dialog("close");
                }
			}
		]
    });

    $("#guestBox").change(function () {
        if ($(this).prop('checked')) {
            $("#guestBoxControl").slideUp();
        } else {
            $("#guestBoxControl").slideDown();
        }
    });

    $("#citizenCheck").hide();
    $("#citizenFalse").click(function () {
        $("#citizenCheck").slideDown();
    });
    $("#citizenTrue").click(function () {
        $("#citizenCheck").slideUp();
    });

    $("input.date").datepicker();

    $("#addSchool").button();
    $("#removeSchool").button().hide();
    var i_date = 0;
    var school_cnt = 1;
    var fieldset_parent = $(".schoolFieldSet:eq(0)").clone(true);
    $("#addSchool").click(function () {
        $('input.date').datepicker("destroy");
        $(".schoolFieldSet:last").after($(fieldset_parent).clone(true));
        $("#removeSchool").show();
        school_cnt++;
        $('.date').each(function () {
            $(this).attr("id", 'date' + i_date).datepicker();
            i_date++;
        });
        var i = 1;
        $(".schoolLegend").each(function () {
            $(this).text("School " + i);
            i++;
        })
    });
    $("#removeSchool").click(function () {
        $(".schoolFieldSet:last").remove();
        school_cnt--;
        if (school_cnt == 1) {
            $("#removeSchool").hide();
        }
    });

    var x_date = 0;
    var job_cnt = 1;
    var fieldset_parent2 = $(".companyFieldSet:eq(0)").clone(true);
    $("#removeJob").button().hide();
    $("#addJob").button();
    $("#addJob").click(function () {
        $('input.date').datepicker("destroy");
        $(".companyFieldSet:last").after($(fieldset_parent2).clone(true));
        $("#removeJob").show();
        job_cnt++;
        $('.date').each(function () {
            $(this).attr("id", 'date0' + x_date).datepicker();
            x_date++;
        });
        var i = 1;
        $(".companyLegend").each(function () {
            $(this).text("Job " + i);
            i++;
        });
        $("#companyPhoneNumber").mask('(000) 000-0000', {
            placeholder: "(___) ___-____"
        });
    });
    $("#removeJob").click(function () {
        $(".companyFieldSet:last").remove();
        job_cnt--;
        if (job_cnt == 1) {
            $("#removeJob").hide();
        }
    });



    $("#testForm0").validate({
        rules: {
            tcCB: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: {
                    function () {
                        if ($("#guestBox").prop('checked')) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                },
                rangelength: [8, 16]
            },
            confirm_password: {
                equalTo: '#password'
            }
        }, //end rules
        messages: {
            confirm_password: {
                equalTo: "Enter the same password"
            },
            tcCB: {
                required: "You must accept the terms and conditions."
            },
            password: {
                required: "Please pick a password",
                rangelength: "Please enter a password 8-16 characters long"
            }
        }, //end messages
        errorPlacement: function (error, element) {
            if (element.attr("name") == "tcCB") {
                error.appendTo(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        }
    });
    $(".phone").mask('(000) 000-0000', {
        placeholder: "(___) ___-____"
    });
    $("#ssn").mask("000-00-0000", {
        placeholder: "___-__-____"
    });
    $("#zipCode").mask("0000000000");
    $("#testForm1").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            address: "required",
            city: "required",
            zipCode: "required",
            phoneNumber: "required"

        }, //end rules
        messages: {
            firstName: {
                required: "This cannot be left blank"
            },
            lastName: {
                required: "This cannot be left blank"
            }
        }, //end messages
        //        //        errorElement: 'input',
        //        //        errorLabelContainer: '#firstName'
        //        //        errorPlacement: function (error, element) {
        //        //            error.appendTo(element.parent("div").next("div"))
        //        //        }
    });
    $("#testForm2").validate({
        rules: {
            schoolName: "required",
        }
    });
    $("#testForm3").validate({
        rules: {
            companyName: "required",
            companyPhoneNumber: "required"
        }
    });
    $("#testForm4").validate({
        rules: {
            fullName: "required"
        },
        message: {
            fullName: {
                required: "Type your name here as acknowledgement"
            }
        }
    });

    $("#tabs").tabs({

        disabled: [1, 2, 3, 4],
        active: 0,
        heightStyle: "fill"

    });

    $("#tab0submit").button();
    $("#tab0submit").click(function () {

        if ($("#testForm0").valid()) {
            $("#tabs").tabs({
                disabled: [0, 2, 3, 4],
                active: 1
            });
        }

    });

    $("#tab1submit").button();
    $("#tab1submit").click(function () {

        if ($("#testForm1").valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 3, 4],
                active: 2
            });
        }

    });

    $("#tab2submit").button();
    $("#tab2submit").click(function () {

        if ($("#testForm2").valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 2, 4],
                active: 3
            });
        }

    });

    $("#tab3submit").button();
    $("#tab3submit").click(function () {

        if ($("#testForm3").valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 2, 3],
                active: 4
            });
        }

    });
    $("#tab4submit").button();
    $("#tab4submit").click(function () {

        if ($("#testForm4").valid()) {

            // bring up a jqueryui confirm dialog
            $("#confirm").dialog("open");
        }

    });
});
