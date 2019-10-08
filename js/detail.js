$(function(){
    var hrf = location.href;
    var dataid = hrf.split("?")[1].split("=")[1];
    $.ajax({
        type:"get",
        url:"../server/api/details.php",
        data:{
            dataid
        },
        dataType:"json",
        success:function(data){
            var item = data[0];
            $(".W_detail").html(
            `
            <div class="detail_upper clearfix" data-goodslisid="${item[0]}">
                    <div class="detail_upper_left fl">
                        <div class="content">
                            <div class="content_img_wrap">
                                <img class="my-foto" src="${item[1]}"
                                    alt="" width="100%" height="100%">
                            </div>
                            <div class="tag"></div>
                        </div>
                        <div class="content_bottom clearfix">
                            <div class="cb_l fl">
                                <a href="###">
                                    &lt;
                                </a>
                            </div>
                            <div class="cb_c fl">
                                <div class="bottom_nr">
                                    <ul>
                                        <li>
                                            <img src="http://image8.wbiao.co/shop/4122f00947084fd685b9fdb8cbb92a49.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff"
                                                alt="">
                                        </li>
                                        <li>
                                            <img src="http://image8.wbiao.co/shop/4122f00947084fd685b9fdb8cbb92a49.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff"
                                                alt="">
                                        </li>
                                        <li>
                                            <img src="http://image8.wbiao.co/shop/4122f00947084fd685b9fdb8cbb92a49.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff"
                                                alt="">
                                        </li>
                                        <li>
                                            <img src="http://image8.wbiao.co/shop/4122f00947084fd685b9fdb8cbb92a49.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff"
                                                alt="">
                                        </li>
                                        <li>
                                            <img src="http://image8.wbiao.co/shop/4122f00947084fd685b9fdb8cbb92a49.jpg?x-oss-process=image/resize,m_pad,w_480,h_480,color_ffffff"
                                                alt="">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cb_r fr">
                                <a href="###">
                                    &gt;
                                </a>
                            </div>
                        </div>
                        <div class="content_collection clearfix">
                            <span class="js_share">收藏</span>
                            <span class="content_collection_a">分享</span>
                        </div>
                    </div>
                    <div class="detail_upper_right fr">
                        <div class="upper_title">${item[4]}</div>
                        <div class="upper_xuyan">
                            独道品味、耀眼风采与光芒
                            <span class="js_more">了解更多>></span>
                        </div>
                        <div class="upper_model">
                            <div class="upper_modela">
                                <span class="sp1">型号:</span>
                                <span class="sp2">116231-63201黑色纪念花纹10钻</span>
                            </div>
                            <div class="upper_modelb">
                                <span class="sp1">编号:</span>
                                <span class="sp2">11261</span>
                            </div>
                            <div class="upper_modelc">
                                <span class="sp1">品牌:</span>
                                <span class="sp2">11261</span>
                            </div>
                            <div class="upper_modeld">
                                <span class="sp1">销量:</span>
                                <span class="sp2">${item[5]}</span>
                            </div>
                        </div>
                        <div class="upper_price">
                            <div class="upper_stages">
                                <div class="upper_stages_left fl">分期</div>
                                <div class="upper_stages_right fl">
                                    <span class="upper_stages_a">
                                        <em>￥</em>
                                        <i class="js_stages">${item[2]}</i>
                                        x12期
                                    </span>
                                    <span class="upper_stages_b">
                                        <i class="icon-a-doubt"></i>
                                        免息免手续费
                                    </span>
                                </div>
                            </div>
                            <div class="upper_price_jiage">
                                <div class="upper_price_jiage_left fl">万表价</div>
                                <div class="upper_price_jiage_right fl">
                                    <span class="wb_price">
                                        ￥${item[3]}
                                    </span>
                                    <em class="scarcity">稀缺款</em>
                                    <span class="marketprice">
                                        <em>市场价</em>
                                        <i>￥${item[3]}</i>
                                    </span>
                                </div>
                            </div>
                            <div class="upper_price_jiage2 clearfix">
                                <div class="reference">参考价</div>
                                <span class="sp_1">￥${item[3]}</span>
                                <span class="sp_2">稀缺款</span>
                            </div>
                            <div class="upper_stages2">
                                <div class="upper_stages_left">流程</div>
                                <div class="upper_stages_rigth">提交订单 > 客服定价 > 支付订单 > 等待发货</div>
                            </div>
                        </div>
                        <div class="upper_give">
                            <h3>配送</h3>
                            <div class="upper_give_rigth">
                                <i>（顺丰包邮）</i>
                                预计2-5周内发货
                            </div>
                        </div>
                        <div class="promise">
                            <h3>承诺</h3>
                            <div class="right">
                                <ul>
                                    <li>
                                        <i></i>
                                        <span>正品保障</span>
                                        <div class="popup">全站自营直采，高于瑞士国家标准的进出仓全检机制，万表7年零假货投诉。</div>
                                    </li>
                                    <li>
                                        <i></i>
                                        <span>正规发票</span>
                                        <div class="popup">提供国家税务局认可的正规发票，具有售后维权法律效力。</div>
                                    </li>
                                    <li>
                                        <i></i>
                                        <span>假一赔三</span>
                                        <div class="popup">已售出名表超过45万枚，正品无假货，如有售假三倍赔偿。</div>
                                    </li>
                                    <li>
                                        <i></i>
                                        <span>7天退换</span>
                                        <div class="popup">无理由退换：除特殊商品外（特卖、私人定制、预售等）质量退换：非人为机芯故障或商品制造缺陷。</div>
                                    </li>
                                    <li>
                                        <i></i>
                                        <span>全球联保</span>
                                        <div class="popup" style="right: 0;left: -255px;">800+家售后服务点，完善的售后保障，可享受品牌全球联保服务。
                                        </div>
                                    </li>
                                    <li>
                                        <i></i>
                                        <span>免息分期</span>
                                        <div class="popup" style="right: 0;left: -255px;">与15家银行合作，招商、中行等提供免息分期购表服务。</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="service clearfix">
                            <h3>服务</h3>
                            <div class="right">
                                <a href="###">
                                    <span>“特惠” 购表延保服务</span>
                                    <i class="icon-d-choice"></i>
                                </a>
                                <a href="###">
                                    <span>100%正品二手表库</span>
                                    <i class="icon-d-choice"></i>
                                </a>
                            </div>
                        </div>
                        <div class="upper_style clearfix">
                            <h3>款式</h3>
                            <div class="upper_stylez fl">
                                <a href="###" class="fl upper_style_right_action">
                                    <span class="upper_style_right_img fl">
                                        <img src="../images/indeximg/4122f00947084fd685b9fdb8cbb92a49.jpg" alt="">
                                    </span>
                                    <span class="upper_style_right_text fl">钢 黄金 黑色 镶钻 玫瑰金 不锈钢</span>
                                    <div class="icon-a-o-arrow-black"></div>
                                </a>
                            </div>
                        </div>
                        <div class="upper_number clearfix">
                            <h3>数量</h3>
                            <div class="right">
                                <span class="fl reduce">-</span>
                                <input type="text" value="1" class="fl onkey" onkeyup="this.value=this.value.replace(/[^\\d]/g,'')"
                                    onafterpaste="this.value=this.value.replace(/[^\\d]/g,'')">
                                <span class="fl plus">+</span>
                            </div>
                        </div>
                        <div class="upper_button clearfix">
                            <div class="upper_button_a page fl" id="J_cartAdd_submit">加入购物车</div>
                            <div class="upper_button_b page fl">咨询定价</div>
                            <div class="qr-code fl">
                                <div class="qr_hover" style="float: left;margin-right: 15px;cursor: pointer;">
                                    <p class="icon-d-goods-ma"></p>
                                    <p class="text">手机购买</p>
                                </div>
                                <div class="qr-code-popup">
                                    <img src="../images/indeximg/qr.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `)
            jQuery(function () {
                $(".my-foto").imagezoomsl({
                    zoomrange: [1, 12],
                    zoomstart: 4,
                    innerzoom: true,
                    magnifierborder: "none"
                });
            });
            $(".plus").click(function(){
                $(this).siblings("input").val(parseInt($(this).siblings("input").val())+1);
            })
            $(".reduce").click(function () {
                $(this).siblings("input").val(parseInt($(this).siblings("input").val()) >1 ? parseInt($(this).siblings("input").val()) - 1:1);
            })
            $(".onkey").keyup(function(){
                if($(this).val()==0){
                    $(this).val(1)
                }
            })
            if(!sessionStorage.getItem("username")){
                $("#J_cartAdd_submit").click(function () {
                    let isok = confirm("请登录再购买!!!");
                    if(isok){
                        location.href = "/html/login.html";
                    }
                })
            }else{
                $("#J_cartAdd_submit").click(function () {
                    $(".content_img_wrap img").animate_from_to("#shoppingcart",{
                        callback: function (){
                            $.ajax({
                                type:"post",
                                url:"../server/api/addCart.php",
                                data:{
                                    goodid: $(".detail_upper").data("goodslisid"),
                                    num: parseInt($(".onkey").val()),
                                    price: parseFloat($(".js_stages").text()),
                                    isActive:false
                                },
                                success:function(res){
                                    var num = JSON.parse(res).totalRow;
                                    if(num>0){
                                        $("#shppnum").css("display","block").text(num);
                                        alert("添加成功");
                                    }
                                    $(".onkey").val(1);
                                }
                            });
                        }
                    });
                })
            }
              $(".qr_hover").stop().hover(function () {
                  $(".qr-code-popup").css("display", "block");
              }, function () {
                  $(".qr-code-popup").css("display", "none");
              });
        }
    })
    $(".srh_ipt_new").blur(function(){
        if($(this).val()){
            $(".srh_ipt_txt").css("display", "none");
        }else{
            $(".srh_ipt_txt").css("display", "block");
        }
    });
    $(".srh_ipt_new").focus(function(){
        $(".srh_ipt_txt").css("display", "none");
     })
})