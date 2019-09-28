<?php
    include "msql.php";
    $sql = "SELECT id,brand,hot,bimg FROM hot_a";
    $res = $conn->query($sql);
    $data = mysqli_fetch_all($res);
    for ($i=0; $i <count($data);$i++){ 
        for ($i=0; $i < count($data[$i]); $i++) { 
            // print_r($data[$i][$i][0]);
        }
    }
    // var_dump($data);
    // echo json_encode($data,JSON_UNESCAPED_UNICODE);
    // $aa = $res->fetch_all();
    // echo json_encode($aa);
?>