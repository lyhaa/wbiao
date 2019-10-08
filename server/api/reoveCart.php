<?php
    @include "msql.php";
    $goodid = $_REQUEST["goodid"];
    $sql = "DELETE FROM wb_cart WHERE goodid ='$goodid'";
    $conn->query($sql);
?>