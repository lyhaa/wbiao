<?php
    @include "msql.php";
    $wbusername = $_REQUEST["username"];
    $wbpsw = $_REQUEST["psw"];
    $sql = "INSERT INTO wb_user(id,username,passwords) VALUES(null,'$wbusername','$wbpsw')";
    $sql2 = "SELECT username FROM wb_user WHERE username LIKE '$wbusername'";
    $res = $conn->query($sql2);
    $num = mysqli_num_rows($res);
    if($num==0){
        $res2 = $conn->query($sql);
        if($res2){
            $result = array(
                "ress"=>"succeed",
                "datas"=>"注册成功"
            );
            echo  json_encode($result,JSON_UNESCAPED_UNICODE);
        }else{
            $result = array(
                "ress" => " defeated",
                "datas" => "注册失败"
            );
            echo  json_encode($result, JSON_UNESCAPED_UNICODE);
        }
    }else{
        $result = array(
            "ress" => "existing",
            "datas" => "用户注册已注册请登录"
        );
        echo  json_encode($result, JSON_UNESCAPED_UNICODE);
    }
?>