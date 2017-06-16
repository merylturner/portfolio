'use strict';

var app = app || {};

(function (module) {
    const formSubmission = {};

    //select form submit button
    $('#form-submit').on('click', function () {
        event.preventDefault();
        $('#contact-form div').toggle();
        console.log('form submitted');
    })

    // console.log($(':input.value'));

    // formSubmission.validateForm = function () {
    //     if ($(':input')=== '') {
    //         alert('field is required!')
    //     }
    // }

    // formSubmission.validateForm();
    module.formSubmission = formSubmission;

}(app))