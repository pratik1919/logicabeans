// $(document).ready(function() {
//     $(".navbar").sticky({ topSpacing: 0, zIndex: 999 });
// });


$(document).ready(function() {
        $("#header").sticky({ topSpacing: 0, zIndex: '9999' });
        $('#header').on('sticky-start', function() { $('.navbar-dark').removeClass('bg-dark').addClass('navbar-light bg-white').removeClass('navbar-dark'); });
        $('#header').on('sticky-end', function() { $('.navbar-light').removeClass('bg-white').addClass('navbar-dark bg-dark').removeClass('navbar-light'); });
    });