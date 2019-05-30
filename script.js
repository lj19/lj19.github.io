$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('.pdfEmbed').css('height', $(window).height()+'px');
    $('.pdfEmbed').css('width', $(window).width()+'px');

});