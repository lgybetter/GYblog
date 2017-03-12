$(document).ready(function() {
    $("#navigation").click(function() {
        $("#information-box").animate({ width: '0' })
        $("#navigation").animate({ width: '0' })
        $("#information-box-container").hide();
        $("#navigation").hide();
        $("#navigation-column").animate({ width: '60px' }, 1000)
    });
    $("#information-box-push-button").click(function() {
        $("#information-box").animate({ width: '546px' }, 500)
        $("#navigation").animate({ width: '546px' }, 500)
        $("#information-box-container").show();
        $("#navigation").show();
        $("#navigation-column").animate({ width: '0' }, 200)
    })
});