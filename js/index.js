$(function(){
    $(".Customer").mouseover(() => {
         $(".Customer ul").fadeIn();
         $(".Customer").show("slow");
    })
    $(".Customer").mouseleave(() => {
        $(".Customer ul").fadeOut();
        // $(".Customer").hide("slow");
    })
    $(window).on('load', function () {
        $('.ma5slider').ma5slider();
    });
})