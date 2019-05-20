$(document).ready(function() {
    window.app.init()
});

$(window).on('load', function() {
    console.log('load')
    window.app.load();
});

// scroll to top when page loads
window.onbeforeunload = function () {
    $('body').hide();
    window.scrollTo(0, 0);
};