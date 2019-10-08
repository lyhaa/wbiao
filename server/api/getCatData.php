<?php
    @include "msql.php";
    $sql = "SELECT wb_cart.*,list_ll.title,list_ll.imgsrc FROM wb_cart , list_ll WHERE wb_cart.goodid = list_ll.id";
    $res = $conn->query($sql);
    $data = mysqli_fetch_all($res,MYSQLI_ASSOC);
    echo json_encode($data,true);
?>