$(function(){
    var vcode2 = new Vcode({
        el: ".img-wrap",
        count: 4,
        fontSize: "30px",
        type: "mix",
        spacing: 0
    });
    $(".img-wrap").css({"top":20,"right":-15});
    $(".img-wrap").click(() => {
        vcode2.onReset()
    })
    let mnum;
    $("#btnnote").click(()=>{
        let a = parseInt(Math.random()*10);
        let b = parseInt(Math.random()*10);
        let c = parseInt(Math.random()*10);
        let d = parseInt(Math.random()*10);
        mnum = `${a}${b}${c}${d}`
        alert("验证码为:"+mnum);
    })
    layui.use('form', function () {
        var form = layui.form;
        form.on('submit(formDemo)', function (data) {
            $.ajax({
                type:"post",
                url:"../server/api/register.php",
                data: {
                    username: data.field.phone,
                    psw: data.field.psws
                },
                success:function(data){
                   resets(JSON.parse(data));
                }
            })
            $("#addGoodsForm")[0].reset();
            return false;
        });
        form.verify({
            pass: [
                /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/, '密码包含 数字,英文,字符中的两种以上，长度6-20'
            ],
            img_wrap:function(val){
                if (vcode2.code.toUpperCase() == val.toUpperCase()) {
                }else{
                    return "输入正确验证码";
                }
            },
            btnnote:function (val) {
                if(parseInt(mnum) != val){
                    return "验证码错误";
                }
            },
            psw:function(val){
                if (val != $("#psw").val()){
                    return "密码不一致"
                }
            }
        });
    });
    function resets(data){
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
             $(".mock").css("display", "block");
             var tsims = setTimeout(function () {
                 $(".mock").css("display", "none");
                 clearTimeout(tsims);
                 location.href = "/html/login.html"
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
             $(".mock").css("display", "block");
             var tsims = setTimeout(function () {
                 $(".mock").css("display", "none");
                 clearTimeout(tsims);
                 location.href = "/html/login.html"
             }, 3000);
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
         }
    }
})