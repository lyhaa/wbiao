<?php
    @include "msql.php";
    $goodid = $_REQUEST["goodid"];
    $num = $_REQUEST["num"];
    $price = $_REQUEST["price"];
    $total = $num * $price;
    $isActive = $_REQUEST["isActive"];
    $sql = "SELECT * FROM wb_cart WHERE goodid = '$goodid'";
    $result = $conn->query($sql);
    $row = mysqli_num_rows($result);
    if($row == 0){
        $insetSql = "INSERT INTO wb_cart(cartid,goodid,num,total,price,isActive) 
        VALUES (NULL,'$goodid','$num','$total','$price','$isActive')";
        $conn->query($insetSql);
    }elseif($row == 1){
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        $num = $data[0]["num"] + $num;
        $total = $data[0]["price"] * $num;
        $updateSql ="UPDATE wb_cart SET num='$num',total='$total' WHERE goodid='$goodid'";
        $conn->query($updateSql);
    }
    $totalCount = "SELECT * FROM wb_cart";
    $res = $conn->query($totalCount);
    $rows = mysqli_num_rows($res);
    echo '{"totalRow":'.$rows.'}';
?>