$(function () {
    $('.ma5slider').ma5slider();
    $.ajax({
        type: "get",
        url: "../server/api/hot.php",
        data: "",
        success: function (data) {
            // console.log(data);
        }
    })
    $.ajax({
        type: "get",
        url: "../server/api/timebuy.php",
        data: "",
        success: function (data) {
            tibuy(JSON.parse(data));
        }
    })
    function tibuy(data) {
        data.forEach(function (item) {
            document.getElementById("tbuy_list").innerHTML +=
                `<div class="swiper-slide">
                    <a href="###" class="a1">
                        <p class="p_img">
                            <img src = "${item[1]}" data-src="${item[1]}" alt = ""/>
                        </p>
                        <div class="p_txt">
                            <h6>${item[2]}</h6>
                            <p class="p1">
                                <em>
                                    <span class="sp_1">${item[3]}</span>
                                    <span class="sp_2">${item[4]}</span>
                                </em>
                            </p>
                            <del>${item[5]}</del>
                        </div>
                    </a>
                </div>`;
        })
        var mySwiper1 = new Swiper('#swiper1', {
            loop: true,
            slidesPerView: 3,
            slidesPerGroup: 3,
            loopFillGroupWithBlank: true,
            loopedSlides: 3,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '#ls_n',
                prevEl: '#ls_p',
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            lazy: true,
            watchSlidesProgress: true,
            watchSlidesVisibility: true

        })
    }
    var mySwiper2 = new Swiper('#swiper2', {
        // autoplay: true,
        navigation: {
            nextEl: '#pg_n',
            prevEl: '#pg_p',
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        }
    })
    $.ajax({
        type: "get",
        url: "../server/api/used.php",
        data: "",
        success: function (data) {
            usedlist(JSON.parse(data))
        }
    })

    function usedlist(data) {
        data.forEach(function (item) {
            document.querySelector("#used_list").innerHTML +=
                `<div class="swiper-slide">
                <a href="###" class="a2">
                    <p class="p_img">
                        <img src="${item[1]}" data-src="${item[1]}"
                            alt="" />
                    </p>
                    <div class="p_txt">
                        <span class="condition">${item[2]}</span>
                        <h6>${item[3]}</h6>
                        <div class="pict">
                            <span class="sp_1">￥${item[4]}</span>
                            <del>￥${item[5]}</del>
                        </div>
                    </div>
                </a>
            </div>`
        })
        var mySwiper3 = new Swiper('#swiper3', {
            loop: true,
            slidesPerView: 4,
            slidesPerGroup: 4,
            navigation: {
                nextEl: '#ls_p2',
                prevEl: '#ls_n2',
            },
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false
            }
        })
    }
    $("#homeTab01hove ul").on("mouseenter", "li", function () {
        $(this).addClass("tab1_move").siblings().removeClass("tab1_move");
        $("#homeCon01").children().eq($(this).index()).css("display", "block").siblings().css("display", "none");

    })
    $("#homeCon03 .gnTabs_block nav").on("mouseenter", "li", function () {
        $(this).children().children(".brand_list-img02").stop().fadeIn();
    })
    $("#homeCon03 .gnTabs_block nav").on("mouseleave", "li", function () {
        $(this).children().children(".brand_list-img02").stop().fadeOut();
    })
    $("#homeCon03hove ul").on("mouseenter", "li", function () {
        $(this).addClass("tab1_move").siblings().removeClass("tab1_move");
        $("#homeCon03 .gnTabs_block").eq($(this).index()).css("display", "block").siblings().css("display", "none");
    })
    $(".sp_bg_btn").click(function () {
        $("#video_bf").css("display", "block").siblings().css("display", "none");
    })
    $.ajax({
        type: "get",
        url: "../server/api/guess_like.php",
        dataType: "json",
        data: "",
        success: function (data) {
            guess_like(data)
        }
    })
    $(".main img").each(function () {
        $(this).attr("data-src", $(this).attr("src"))
    })
    function guess_like(data) {
        data.forEach(function (item) {
            document.getElementsByClassName("guess_like_slider")[0].innerHTML +=
                `<a href="###" class="goods_a">
                <div class="g_img">
                    <img src="${item[1]}" data-src="${item[1]}"
                        alt="">
                </div>
                <p class="p1">${item[2]}</p>
                <p class="p2">${item[3]}</p>
                <div class="fq">
                    <span class="month_tag">月付</span>
                    <span class="fq_price">${item[4]}</span>
                    <span class="wb_price">${item[5]}</span>
                </div>
            </a>`
        })
    }
    // if (location.hash == 'aa.html'){
    //     this.location.href = "localhost:5213";
    // }
})