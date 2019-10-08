<?php
    @include "msql.php";
    $username = $_REQUEST["username"];
    $wbpsw = $_REQUEST["pswval"];
    $sql = "SELECT username,passwords FROM wb_user WHERE username='$username' and passwords='$wbpsw'";
    $sql2 = "SELECT username FROM wb_user WHERE username='$username'";
    // echo json_encode(array("username"=>$username, "wbpsw"=> $wbpsw));
    $res = $conn->query($sql2);
    $num = mysqli_num_rows($res);
    if($num){
        $res2 = $conn->query($sql);
        $num2 = mysqli_num_rows($res2);
        if($num2){
            echo json_encode(array("username"=>$username, "ress"=> "succeed", "datas" => "登录成功"), JSON_UNESCAPED_UNICODE);
        }else{
        echo json_encode(array("ress" => "existing", "datas"=>"密码错误"), JSON_UNESCAPED_UNICODE);
        }
    }else{
        echo json_encode(array("ress" => "defeated", "datas" => "请注册账号"), JSON_UNESCAPED_UNICODE);
    }
?>