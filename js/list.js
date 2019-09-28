$(function(){
    $(".pt_nav_warp .nav_left .all_text").mouseenter(function(){
        $(".nav_left_menu").stop().slideDown();
        $(".nav_left_menu").mouseenter(function(){
            $(this).stop().slideDown();
        })
        $(".nav_left_menu").mouseleave(function () {
            $(this).stop().slideUp();
        })
    })
    $(".pt_nav_warp .nav_left .all_text").mouseleave(function(){
        $(".nav_left_menu").stop().slideUp();
    })
})