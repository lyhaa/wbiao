<?php
    include "msql.php";
    $sql = "SELECT * FROM Timebuy";
    $res = $conn->query($sql);
    $data = mysqli_fetch_all($res);
    $re = array_rand($data,15);
    // $data1 = array(
    //     $data->$re);
    // var_dump($data);
    $arr = array();
    for($i=0;$i<count($re);$i++){
        array_push($arr,$data[$re[$i]]);
    }
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>