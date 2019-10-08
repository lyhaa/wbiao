$(function(){
    $(".s_click").click(function () {
        $(this).addClass("span_on").siblings().removeClass("span_on");
        var i = $(this).index() == 2 ? 1 : $(this).index();
        $(".input_from form").children("div").eq(i).css("display", "block").siblings("div").css("display", "none");
    })
    let phoneval;
    let pswval;
    let graphval;
    let noteval;
    var regobj = {};
    regobj.num = 0;
    var vcode1 = new Vcode({
        el: ".img-wrap",
        count: 4,
        fontSize: "30px",
        type: "mix",
        spacing: 0
    });
    $(".img-wrap").click(() => {
        vcode1.onReset()
    })
    $(".phone_num").blur(function () {
        var phoneReg = /^1[3,4,5,7,8]\d{9}$/;
        if (phoneReg.test($(this).val())) {
            $(this).parent().next().removeClass("i_inp_reg");
            phoneval = $(this).val();
            regobj.a = true;
        } else {
            $(this).parent().next().addClass("i_inp_reg");
            phoneval = "";
            regobj.a = false;
        }
    })
    $(".psw").blur(function () {
        var pswreg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/;
        if (pswreg.test($(this).val())) {
            $(this).parent().next().removeClass("i_inp_reg");
            pswval = $(this).val();
            regobj.b = true;
        } else {
            $(this).parent().next().addClass("i_inp_reg");
            pswval = "";
            regobj.b = true;
        }
    })
    $(".captcha_wrap input").blur(function () {
        if (vcode1.code.toUpperCase() == $(this).val().toUpperCase()) {
            $(this).parent().next().removeClass("i_inp_reg");
            regobj.c = true;
        } else {
            $(this).parent().next().addClass("i_inp_reg");
            regobj.c = false;
        }
    })
    let notenum = {};
    var wait = 60;
    var stim;

    function time(o) {
        if (wait == 0) {
            clearTimeout(stim);
            o.removeAttribute("disabled");
            o.value = "获取验证码";
            wait = 60;
        } else {
            o.setAttribute("disabled", true);
            o.value = "重新发送(" + wait + ")";
            wait--;
            stim = setTimeout(function () {
                    time(o)
                },
                1000)
        }
    }
    $("#note_code").blur(function () {
        if (!$(this).val()) {
            $(this).parent().next().addClass("i_inp_reg");
        } else if ($(this).val().length == 4 && typeof parseInt($(this).val()) == "number" && !isNaN($(this).val())) {
            $(this).parent().next().removeClass("i_inp_reg");
            noteval = $(this).val();
        } else {
            $(this).parent().next().addClass("i_inp_reg");
            noteval = "";
        }
    })
    $("#get_code").click(function () {
        if (!phoneval) {} else {
            time(this);
            // $.ajax({
            //     type: "post",
            //     url: "../server/api/note.php",
            //     data: {
            //         phone: phoneval
            //     },
            //     success: function (data) {
            //         notenum.phonecode = JSON.parse(data).phonecode;
            //     }
            // })
        }
    })

    function lsgin(data) {
        $(".moke").css("display", "block");
        layui.use("layer", function () {
        if (data.ress == "succeed") {
            layer.open({
                title: ['万表网', 'font-size:20px'],
                content: data.datas,
                skin: 'layui-layer-lan',
                offset: 't',
                closeBtn: 0,
                time: 2000,
                btn: "",
                icon: 1
            })
            sessionStorage.setItem("username", data.username);
            var trem = setInterval(function () {
                $(".moke").css("display", "none");
                clearInterval(trem);
                location.href = "/index.html";
            }, 2000);
        } else if (data.ress == "existing") {
            layer.open({
                title: ['万表网', 'font-size:20px;color:red'],
                content: data.datas,
                skin: 'alert-skin',
                offset: 't',
                closeBtn: 0,
                time: 2000,
                btn: "",
                icon: 2
            })
            var trem = setInterval(function () {
                $(".moke").css("display", "none");
                clearInterval(trem);
            }, 1500);
        } else {
            layer.open({
                title: ['万表网', 'font-size:20px;color:red'],
                content: data.datas,
                skin: 'alert-skin',
                offset: 't',
                closeBtn: 0,
                time: 2000,
                btn: "",
                icon: 2
            })
            var trem = setInterval(function () {
                $(".moke").css("display", "none");
                clearInterval(trem);
            }, 2500);
        }
        })
    }
    notenum.phonecode = 3214;
    $("#user_login").click(() => {
        if ($(".i_inp_reg").length == 0 && regobj.a && regobj.b && regobj.c && phoneval && pswval) {
            if (noteval == notenum.phonecode) {
                $.ajax({
                    type: "post",
                    url: "../server/api/login.php",
                    data: {
                        username: phoneval,
                        pswval: pswval
                    },
                    success: function (data) {
                        lsgin(JSON.parse(data));
                    }
                })
                regobj = {};
                vcode1.onReset()
                $(".l_form input").slice(0, 4).each(function (index, item) {
                    item.value = "";
                })
            } else {
                $(".moke").css("display", "none");
                alert("验证错误")
            }
        } else {
            $(".moke").css("display", "none");
            alert("请填好资料");
        }
    })
})