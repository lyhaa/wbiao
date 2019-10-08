$(function () {
    layui.use('carousel', function () {
        var carousel = layui.carousel;
        //建造实例
        carousel.render({
            elem: '#test1',
            width: '100%',
            arrow: 'none',
            height: "400px"
        });
    });
    let lsitsort = "";
    list_data(0, "synthesize");
    $("#mock").css("display", "block");
    var tirem = setTimeout(function () {
        $("#mock").css("display", "none");
        clearTimeout(tirem);
        $(".fltr").css("display", "block");
    }, 800)

    function list_data(page, sorttype) {
        $.ajax({
            type: "get",
            url: "../server/api/list.php",
            data: {
                page,
                sorttype
            },
            dataType: "json",
            success: function (data) {
                let res = data.map(function (item) {
                    return `<li data-id="${item.data_id}">
                        <a href="###" class="s_goods_img">
                            <img src = "${item.imgsrc}"alt="">
                        </a>
                        <div class="goods_txt">
                            <p class="tPrc">
                                <em class="month_tag">月付</em>
                                <span class="fenqi_price">￥${item.price}</span>
                                <span class="s_price">￥${item.sprice}</span>
                            </p>
                            <a href="###" class="s_goods_name">
                                ${item.title}
                            </a>
                            <div class="goods_sale"> <em class="s_sale_num">销量${item.sales}</em></div>
                            <a href="###" class="s_shop">${item.brand}</a>
                            <p class="sale_tags"> <span>${item.free}</span></p>
                            <div class="goods_hover">
                                <a href="###" class="add_to_keep">加入收藏</a>
                                <a href="###" class="already_keep h" style="color: #ae0f17">已收藏</a>
                            </div>
                        </div>
                    </li>`
                }).join("");
                $(".s_goods_list ul").html(res);
                $(".s_goods_list img").each(function () {
                    $(this).attr("data-src", $(this).attr("src"))
                })
            }
        })
    }
    var sortval = "";
    var paiceisok = true;
    $(".sort_list .sort_con01 ul li").click(function () {
        $(this).children().addClass("on").parents().siblings().children().removeClass("on");
        if($(this).index()==2){
           if (paiceisok){
               $(this).attr("data-sort", "pricehigh");
               $(this).children().text("价格高到低");
            }else{
                $(this).attr("data-sort", "pricelow");
                $(this).children().text("价格低到高");
           }
           paiceisok = !paiceisok;
        }
         sortval = $(this).attr("data-sort")
         list_data(0, sortval);
         $("#page-list").children().eq(0).addClass("active").siblings().removeClass("active");
         $("#from-move").css("left",7);
    })
    $.ajax({
        type: "get",
        url: "../server/api/getcount.php",
        data: {},
        success: function (data) {
            for (var i = 0; i < data; i++) {
                var li = $(`<li></li>`);
                $("#page-list").append(li);
            }
        }
    })
    $(".pt_nav_warp .nav_left .all_text").mouseenter(function () {
        $(".nav_left_menu").stop().slideDown();
        $(".nav_left_menu").mouseenter(function () {
            $(this).stop().slideDown();
        })
        $(".nav_left_menu").mouseleave(function () {
            $(this).stop().slideUp();
        })
    })
    $(".pt_nav_warp .nav_left .all_text").mouseleave(function () {
        $(".nav_left_menu").stop().slideUp();
    })
    $(".page-list").on("click", "li", function () {
        var delay = 0.004,
            init = 1;
        var li_ind = $(this).index();
        var li_ind_prev = $(".active").index();
        var li_length = $(this).length;
        var li_diff = li_ind - $(".active").index();
        var dur = Math.abs(li_diff)
        var left_pos = $(this).position().left + 7;
        $("#from-move").css({
            "left": left_pos
        });

        if (li_diff > 0) {
            for (var i = li_ind_prev; i < li_ind; i++) {
                dur = delay * init;
                $("#page-list").find("li").eq(i).addClass("animate-right").css({
                    "animation-delay": dur + "s"
                });
                init = init + 1;
            }
        } else {
            for (var i = li_ind_prev; i > li_ind; i--) {
                dur = delay * init;
                $("#page-list").find("li").eq(i).addClass("animate-left").css({
                    "animation-delay": dur + "s"
                });
                init = init + 1;
            }
        }
        $("#from-move").addClass("animate");

        $("#page-list li").removeClass("active");
        $(this).addClass("active");

        $("#from-move").bind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
            $("#from-move").removeClass("animate");
            $("#from-move").unbind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend");
        });
        $(".page-list li").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
            $(".page-list li").removeClass("animate-right").removeAttr("style");
            $(".page-list li").removeClass("animate-left").removeAttr("style");
            $("#page-list li").unbind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd");
        });
        list_data($(this).index(), sortval);
        jQuery.prototype.overlayScrollTO({
            y: 250
        }, 1500)
    })
    $(".gslist").on("click","li",function(){
        // console.log($(this).data("id"))
        location.href = "/html/details.html?id=" + $(this).data("id")+"";
    })
})