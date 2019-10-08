<?php
    @include "msql.php";
    $goodid = $_REQUEST["goodid"];
    $num = $_REQUEST["num"];
    $price = $_REQUEST["price"];
    $total = $num * $price;
    $isActive = $_REQUEST["isActive"];
    $sql = "UPDATE wb_cart SET num='$num',total='$total',price='$price',isActive='$isActive' WHERE goodid='$goodid'";
    $conn->query($sql);
?>