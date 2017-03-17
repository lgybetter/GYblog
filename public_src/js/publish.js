$(document).ready(function() {
    $("#first-label").click(function() {
        labelSelectorSlideIn()
    })
    $("#second-label").click(function() {
        labelSelectorSlideIn()
    })
    $("#third-label").click(function() {
        labelSelectorSlideIn()
    })
    $("#shelter").click(function() {
        $("#shelter").fadeOut(500);
        $("#alert-box").animate({ width: '0', left: '-100%' }, 500);
        $("#body-container").removeClass("body-container-animation");
        //$("#alert-box").animate({ left: '-800px' }, 500).hide();
        //$("#body-container").css({ 'transform': 'none', 'transition-duration': 'none' });
    })
    $("#container-shelter").click(function() {
        $("#container-shelter").fadeOut(500);
        $("#information-box").animate({ width: '0' })
        $("#navigation").animate({ width: '0' })
        $("#navigation-column").animate({ width: '60px' }, 1000);
    })
    $(".label-option").click(function() {
        let label = $(this).text();
        //$("#first-label").val(label);
        console.log($(this).text());
        console.log(typeof label);
        console.log(label.length);
    })

    function labelSelectorSlideIn() {
        $("#shelter").fadeIn(500);
        $("#alert-box").animate({ width: '600px', left: '0', right: '0' }, 500);
        //$("#body-container").css({ 'transform-style': 'preserve-3d', 'transform': 'perspective(1500px) rotateY(10deg)', 'transition-duration': '0.5s' });
        $("#body-container").toggleClass("body-container-animation");
    }


})

let bodyHeight = document.body.scrollHeight
let bodyWidth = document.body.scrollWidth
document.getElementById('body-container').style.height = bodyHeight
document.getElementById('body-container').style.width = bodyWidth