function addActive(element) {
    $(element).addClass('active');
    $(element).attr('id', 'active');
    $('#vacancy-section').height($('.job-title.active ~ .job-description').outerHeight());
}

function removeActive(element) {
    $(element).removeClass('active');
    $(element).removeAttr('id');
    $('#vacancy-section').css('height','auto');
}