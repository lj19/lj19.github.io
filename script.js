$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('.pdfEmbed').css('height', $(window).height()*0.95+'px');
    $('.pdfEmbed').css('width', $(window).width()*0.75+'px');

});