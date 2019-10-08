<?php
    include "msql.php";
    $sql="SELECT * FROM hot_a";
    $res = $conn->query($sql);
    $data = mysqli_fetch_all($res);
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>