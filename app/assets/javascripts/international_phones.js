//= require intlTelInput/intlTelInput
//= require intlTelInput/utils

$(function () {
    $('[data-intl-tel-input]').each(function () {
        var element = $(this);
        var hidden = element.parent().find('.international_phone_number');
        element.intlTelInput(element.data('intl-tel-input') || {});

        element.closest('form').submit(function () {
            var match = element.intlTelInput('getNumber').match(/(\+\d+)(?=)/g);
            hidden.val(match[match.length - 1]);
        });
    });
});