function ShoppingCar(options){
    this.elps1 = document.querySelector(options.el);
    if(this.getsessionStorages()){
        $(".cart_wrap").css("display", "block");
        $(".cart_empty").css("display","none");
        this.init();
    }else{
        let isok = confirm("请登录查看!!");
        if(isok){
            location.href = "/html/login.html";
        }
        $(".cart_empty").css("display","block");
        $(".cart_wrap").css("display", "none");
    }
}
ShoppingCar.prototype.getData = function(){
    let _this = this;
    $.ajax({
        type:"get",
        url:"../server/api/getCatData.php",
        data:{},
        success:function(data){
            _this.data = JSON.parse(data);
            _this.render();
        }
    })
}
ShoppingCar.prototype.init = function(){
    this.getData();
    this.event();
}
ShoppingCar.prototype.getsessionStorages = function(){
    const username = sessionStorage.getItem("username");
    return username;
}

ShoppingCar.prototype.render = function(){
    this.elps1.children[1].innerHTML =
    this.renderStore();
}
ShoppingCar.prototype.renderStore = function(){  
    if(this.data.length>0){
        return this.data.map((item)=>{
            return `
                <div class="cart_c" data-goodid="${item.goodid}">
                        <div class="goods_floor">
                            <div class="goods_info">
                                <div class="goods_right">
                                    <span class="select_tik fl">
                                        <input type="checkbox" class="check">
                                    </span>
                                    <a href="###">
                                        <div class="goods_img fl">
                                            <img src="${item.imgsrc}"
                                                alt="">
                                        </div>
                                        <div class="goods_txt fl">
                                            <div class="goods_a">
                                                <p class="p1">${item.title}</p>
                                                <p class="specifications">真皮 银色 牛皮</p>
                                            </div>
                                        </div>
                                    </a>
                                    <ul class="fr">
                                        <li class="unit_price">
                                            ￥
                                            <em>${item.price}</em>
                                        </li>
                                        <li class="goods_num">
                                            <span class="reducebtns">-</span>
                                            <input type="text" value="${item.num}" class="num" readonly>
                                            <span class="addbtns">+</span>
                                        </li>
                                        <li class="total_price">
                                            ￥
                                            <em class="subTotal">${item.total}</em>
                                        </li>
                                        <li class="others">
                                            <a href="###" class="delete_goods" style="color: #aaa">删除</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            `
        }).join("");
    }else{
         $(".cart_empty").css("display", "block");
         $(".cart_wrap").css("display", "none");
    }
}
ShoppingCar.prototype.event = function(){
    let _this = this;
    this.elps1.children[1].onclick = function(event){
        let target = event.target;
        let className = target.className;
        if (className === 'addbtns' || className === 'reducebtns') {
            _this.num(target);
        }
        if(className === 'delete_goods'){
            let isok = confirm("是否要删除该商品");
            if(isok){
                _this.removeGoods(_this.getParent(target,"cart_c"))
            }
        }
        if(className ==="check"){
            _this.checkbox(target);
        }
    };
    this.selectAll();
    this.allrovemclick();
}

ShoppingCar.prototype.allrovemclick = function(){
    let _this = this;
    document.querySelector(".delete_goodss").onclick = function () {
        let isok1 = document.querySelector(".W_settle_floor").querySelector(".select_tik").children[0].checked;
        if (isok1) {
            let isok = confirm("是否删除全部商品");
            if (isok) {
                _this.allremoveGoods();
            }
        }
    }
}

ShoppingCar.prototype.num = function(target){
    let className = target.className,
        input, cartc = this.getParent(target, "cart_c");
    if(className === 'reducebtns'){
        input = target.nextElementSibling;
        if(input.value<=1){
            let isok = confirm("是否要移除该商品");
            return isok?this.removeGoods(cartc):"";
        }else{
            let price = parseFloat(this.getParent(target, "goods_num").previousElementSibling.children[0].innerText);
            let goodid = this.getParent(target, "cart_c").dataset.goodid;
            // console.log(price,parseInt(input.value), goodid)
            --input.value;
             this.http({
                 goodid,
                 num: parseInt(input.value),
                 price,
                 isActive: true
             });
        }
        this.sum(target);
    } else if (className === "addbtns") {
        input = target.previousElementSibling;
        input.value = ++input.value;
        this.sum(target);
        let price = parseFloat(this.getParent(target, "goods_num").previousElementSibling.children[0].innerText);
        let goodid = this.getParent(target, "cart_c").dataset.goodid;
        this.http({
            goodid,
            num: parseInt(input.value),
            price,
            isActive:true
        });
    }
    let check = cartc.querySelector('[type="checkbox"]');
    if(!check.checked){
        check.checked = true;
    }
    this.checkbox(check);
}
ShoppingCar.prototype.checkbox = function(check){
    let checkboxs = this.getParent(check, "cart-content").querySelectorAll('[type="checkbox"]');
    let arr = [...checkboxs].filter((item)=>{
        return item.checked === false;
    })
    let all = document.querySelector(".cart_nav input");
    let all2 = document.querySelector(".W_settle_floor input");
    all2.checked = !arr.length;
    all.checked = !arr.length;
    this.sumPrice();
    this.allrovemclick();
    this.selected();
}

ShoppingCar.prototype.selectAll = function(){
    let _this = this;
    let all = document.querySelector(".cart_nav input");
    let all2 = document.querySelector(".W_settle_floor input");
    all.onclick = function(){
        let isok = all.checked;
        all2.checked = isok;
        let allCheck = document.querySelectorAll(".cart-content .check");
        [...allCheck].forEach(item=>{
            item.checked = isok;
        })
        _this.sumPrice();
        _this.allrovemclick();
        _this.selected();
    }
    all2.onclick = function(){
        let isok = all2.checked;
        all.checked = isok;
        let allCheck = document.querySelectorAll(".cart-content .check");
        [...allCheck].forEach(item=>{
            item.checked = isok;
        })
        _this.sumPrice();
        _this.allrovemclick();
        _this.selected();
    }
}

ShoppingCar.prototype.selected = function(){
    let checkbox = document.querySelector(".cart-content").querySelectorAll('[type="checkbox"]');
     let arr = [...checkbox].filter((item)=>{
         return item.checked === true;
     })
    document.querySelector(".choose_num").children[0].innerText = arr.length;
}

ShoppingCar.prototype.sum = function(tis){
    let cartc = this.getParent(tis, "cart_c");
    let all = cartc.querySelector(".subTotal");
    let num = parseInt(cartc.querySelector(".num").value);
    let price = parseFloat(cartc.querySelector(".unit_price").children[0].innerText);
    all.innerText = (num*price).toFixed(2);
}

ShoppingCar.prototype.sumPrice = function(){
    var _this = this;
    let sum = 0;
    let allcheckbox = document.querySelectorAll(".cart-content .check");
    [...allcheckbox].forEach(function(item){
        if(item.checked){
            let all = _this.getParent(item, "cart_c").querySelectorAll(".subTotal");
            [...all].forEach(item=>{
                sum += parseFloat(item.innerText);
            });
        }
    })
    sum = sum.toFixed(2);
    document.querySelector("#payableAmount").innerText = sum;
    document.querySelector("#goodsAmount").innerText = sum;
    return;
}

ShoppingCar.prototype.getParent = function(el,parent){
    for(;;){
        if(!el){
            return null;
        }else{
            if(el.parentNode.className === parent){
                return el.parentNode;
            }else{
                el = el.parentNode;
            }
        }
    }
}

ShoppingCar.prototype.removeGoods = function(el){
    let pat = this.getParent(el, "cart-content");
    $.ajax({
        type:"post",
        url:"../server/api/reoveCart.php",
        data:{
            goodid: el.dataset.goodid
        }
    });
    pat.removeChild(el);
    this.sumPrice();
    this.removeFlush();
}

ShoppingCar.prototype.removeFlush = function (){
     let allCheckl = document.querySelectorAll(".cart_c").length;
     let all = document.querySelector(".cart_nav input");
     let all2 = document.querySelector(".W_settle_floor input");
     if (allCheckl == 0) {
         all.checked = false;
         all2.checked = false;
         $(".cart_empty").css("display", "block");
         $(".cart_wrap").css("display", "none");
     }else{
         $(".cart_wrap").css("display", "block");
         $(".cart_empty").css("display", "none");
     }
     this.selected();
}

ShoppingCar.prototype.http = function(DT){
    $.ajax({
        type:"post",
        url:"../server/api/uperCart.php",
        data:{
            cartid:null,
            goodid:DT.goodid,
            num:DT.num,
            price:DT.price,
            isActive:DT.isActive
        }
    })
}

ShoppingCar.prototype.allremoveGoods = function(){
    let pat = document.querySelector(".cart-content");
    let removeel = document.querySelectorAll(".cart_c");
    [...removeel].forEach(function(item){
        pat.removeChild(item);
    })
    $.ajax({
        type: "post",
        url: "../server/api/allreoveCar.php",
        data: {}
    });
    this.sumPrice();
    this.removeFlush();
}

let car = new ShoppingCar({
    el: ".cart_a"
})