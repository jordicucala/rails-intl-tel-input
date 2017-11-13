//= require intlTelInput/intlTelInput
//= require intlTelInput/utils

$(function() {
    $('[data-intl-tel-input]').each(function () {
        var element = $(this);
        var hidden = element.parent().siblings('.international_phone_number');
        element.intlTelInput(element.data('intl-tel-input') || {});

        element.closest('form').submit(function () {
            hidden.val(element.intlTelInput('getNumber').replace(/(.*\+)(.*?)(?=\+)/g));
        });
    });
});
