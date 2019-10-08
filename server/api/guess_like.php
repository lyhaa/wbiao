<?php
    include "msql.php";
    $sql = "SELECT * FROM guess_like";
    $res = $conn->query($sql);
    $data = mysqli_fetch_all($res);
    // var_dump($data);
    $re = array_rand($data,20);
    $arr = array();
    for($i=0;$i<count($re);$i++){
        array_push($arr,$data[$re[$i]]);
    }
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>