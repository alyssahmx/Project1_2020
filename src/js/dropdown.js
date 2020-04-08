$(document).ready(function() {
    $(".wrap").mouseenter(function() {
        $(this).children("ul").show();
    });
    $(".wrap").mouseleave(function() {
        $(this).children("ul").hide();
    });
});