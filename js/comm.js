$(function () {
    document.getElementsByClassName("nav_left_menu")[0]?$.ajax({
        type: "get",
        url: "../server/api/hot_a.php",
        data: "",
        success: function (data) {
            hot_a(JSON.parse(data));
        }
    }):"";
    $(".noe").eq(1).click(() => {
        sessionStorage.removeItem("username");
        usern();
    })
      function usern() {
          const username = sessionStorage.getItem("username");
          if (username) {
              $(".noe").css("display", "block");
              $(".noe").eq(0).html("你好！" + username);
              $(".htop_r ul li").eq(0).css("display", "none");
              $(".htop_r ul li").eq(3).css("display", "none");
              $.ajax({
                  type: "get",
                  url: "../server/api/gooodsnum.php",
                  data: {},
                  dataType: "json",
                  success: function (data) {
                      if (data.totalRow > 0) {
                          $("#shppnum") ? $("#shppnum").css("display", "block").text(data.totalRow) : "";
                          $("#allQuantity") ? $("#allQuantity").text(data.totalRow) : "";
                      } else {
                          $("#shppnum").css("display", "none")
                      }
                  }
              })
          } else {
              $(".noe").css("display", "none");
              $(".htop_r ul li").eq(0).css("display", "block");
              $(".htop_r ul li").eq(3).css("display", "block");
          }
      }
      usern();
    function hot_a(darr) {
        darr.forEach(function (item, index) {
            // console.log(item);
            document.getElementsByClassName("nav_left_menu")[0].innerHTML +=
                `<div class="menu_box clearfix">
                                <i class="menu_line fl clearfix"></i>
                                <dl>
                                    <dt>
                                        <a href="###">${item[0]}</a>
                                        <em>/</em>
                                    </dt>
                                    <dd class="p_hot">
                                        <a href="###">${JSON.parse(item[3])[0].imgtex}</a>
                                        <a href="###">${JSON.parse(item[3])[1].imgtex}</a>
                                        <a href="###">${JSON.parse(item[3])[2].imgtex}</a>
                                    </dd>
                                    <dd class="sub_menu">
                                        <div class="col_box fl clearfix">
                                            <div class="col_1">
                                                <span class="t">品牌</span>
                                                    <div class="brand_list">
                                                        <ul class="test clearfix" id="my-scrollbar">
                                                            ${
                                                                JSON.parse(item[3]).map(function(itemm){
                                                                    return `<li class="clearfix">
                                                                                <a href="###">
                                                                                    <p class="p_logo"><img
                                                                                            data-src="${itemm.srcimg}"
                                                                                            src = "${itemm.srcimg}"
                                                                                            alt=""></p>
                                                                                    <p class="p_name">${itemm.imgtex}</p>
                                                                                </a>
                                                                            </li>`;
                                                                }).join("")
                                                            }
                                                        </ul>
                                                        <i class="brand_bottom"></i>
                                                    </div>
                                            </div>
                                            <div class="col_2">
                                                <span class="t">
                                                    热词
                                                </span>
                                                <div class="hot_words">
                                                        ${
                                                            JSON.parse(item[1]).map(function(itemm){
                                                                return `<a href="###">${itemm}</a>`;
                                                            }).join("")
                                                        }
                                                </div>
                                            </div>
                                        </div>
                                        <a href="###" class="brand_ads fl">
                                            <img src="http://image8.wbiao.co/mall/ea6e495be1c446d5b05ea26786361001.jpg?x-oss-process=image/resize,m_pad,w_205,h_412"
                                                alt="">
                                        </a>
                                    </dd>
                                </dl>
                            </div>`;
        })
        $('.test').overlayScrollbars({
            className: "os-theme-dark"
        });
    }
    var instance = $('body').overlayScrollbars({
        className: "os-theme-dark",
        callbacks: {
            onScroll: function () {
                var y = instance[0].__overlayScrollbars__.scroll();
                if (y.y.position > 232.33333587646484) {
                    $("#w_home_head_float")?$("#w_home_head_float").css("display", "block"):"";
                } else {
                    $("#w_home_head_float")?$("#w_home_head_float").css("display", "none"):"";
                }
                window.onload = function () {
                    var img = document.querySelectorAll("img[data-src]")
                    for (var i = 0; i < img.length; i++) {
                        img[i].style.opacity = "0"
                    }
                    Limg()
                }
                Limg()
                function Limg() {
                    var viewHeight = document.documentElement.clientHeight // 可视区域的高度
                    var t = document.documentElement.scrollTop || document.body.scrollTop;
                    var limg = document.querySelectorAll("img[data-src]")
                    // Array.prototype.forEach.call()是一种快速的方法访问forEach，并将空数组的this换成想要遍历的list
                    Array.prototype.forEach.call(limg, function (item, index) {
                        var rect
                        if (item.getAttribute("data-src") === "")
                            return
                        //getBoundingClientRect用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性。
                        rect = item.getBoundingClientRect()
                        // 图片一进入可视区，动态加载
                        if (rect.bottom >= 0 && rect.top < viewHeight) {
                            (function () {
                                var img = new Image()
                                img.src = item.getAttribute("data-src")
                                item.src = img.src
                                //给图片添加过渡效果，让图片显示
                                var j = 0
                                setInterval(function () {
                                    j += 0.2
                                    if (j <= 1) {
                                        item.style.opacity = j
                                        return
                                    }
                                }, 100)
                                item.removeAttribute('data-src')
                            })()
                        }
                    })
                }
            }
        }
    })
    $(".nav_left_menu").on("mouseenter", ".menu_box", function () {
        $(this).find(".sub_menu").css("display", "block");
        $(this).siblings().find(".sub_menu").css("display", "none");
    })
    $(".nav_left_menu").on("mouseleave", ".menu_box", function () {
        $(this).find(".sub_menu").css("display", "none");
    })
    $(".Customer").mouseover(function () {
        $(this).children("ul").stop().slideDown();
    })
    $(".Customer").mouseleave(function () {
        $(this).children("ul").stop().hide();
    })
    $("#searchForm .sear #srh_ipt_new").blur(function () {
        $(this).siblings(".adt").css("display", "block");
        $("#searchForm .recomen").addClass("hot_on");
    })
    $("#searchForm .sear #srh_ipt_new").focus(function () {
        $(this).siblings(".adt").css("display", "none");
        $("#searchForm .recomen").removeClass("hot_on");

    })
    $(".AD .clear").click(function () {
        $(this).parents(".AD").slideUp("slow");
    })
    $(".pt_nav_warp .nav_right ul").on('click', 'li', function () {
        $(this).children("a").addClass("anim");
        $(this).siblings().children("a").removeClass("anim");
    })
    $(".float_head_search #s_search").click(function () {
        $(".float_head_search .s_lt").stop().show();
    })
    $(".float_head_search .s_on").click(() => {
        $(".float_head_search .s_lt").stop().hide();
    })
    $(".pt_panel_box ul li").mouseenter(function () {
        $(this).children().children().eq(1).stop().fadeIn();
    })
    $(".pt_panel_box ul li").mouseleave(function () {
        $(this).children().children().eq(1).hide();
    })
    $("#wb_sollto").click(function () {
        instance[0].__overlayScrollbars__.scroll({
            y: 0
        })
    })
    jQuery.prototype = {
        overlayScrollTO:instance[0].__overlayScrollbars__.scroll
    }
    // console.log(jQuery.prototype)
    $(".wb_friend_links").on("click", "span", function () {
        if (!this.isok2) {
            $(this).siblings(".wb_more_link").stop().slideDown();
        } else {
            $(this).siblings(".wb_more_link").stop().slideUp();
        }
        this.isok2 = !this.isok2;
    })
})