<?php
    include "msql.php";
    $sql = "SELECT * FROM used";
    $res = $conn->query($sql);
    $data = mysqli_fetch_all($res);
    $re = array_rand($data,12);
    $arr = array();
    for($i=0;$i<count($re);$i++){
        array_push($arr,$data[$re[$i]]);
    }
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>