<?php
    include "msql.php";
    $json = file_get_contents("../../json/HotSale.json");
    $arrData = json_decode($json);
    // $_REQUEST
    // var_dump($arrData);
    // print_r($arrData);
    for($i = 0;$i< count($arrData);$i++){
        // $_REQUEST
        // $msrc = $arrData[$i]["imgsrc"];
        // $price = floatval($arrData[$i]["price"]);
        // $sprice = $arrData[$i]["sprice"];
        // $title = $arrData[$i]["title"];
        // $sales = $arrData[$i]["sales"];
        // $brand = $arrData[$i]["brand"];
        // $free = $arrData[$i]["free"];
    //     $brand = $arrData[$i]->brand;
    //     $bimg = $arrData[$i]->bimg;
    //     $hot = $arrData[$i]->hot;
            $s_img = $arrData[$i]->imgsrc;
            $cond = $arrData[$i]->brand;
            $elps = $arrData[$i]->title;
            $price = $arrData[$i]->price;
            $oldprice = $arrData[$i]->wbprice;
            // var_dump($arrData[$i]->s_img);
    // // var_dump($hot);
    //     $bimg = json_encode($bimg, JSON_UNESCAPED_UNICODE);
    //     $hot = json_encode($hot, JSON_UNESCAPED_UNICODE);
        // var_dump($s_img,$cond,$elps,$price,$oldprice);
    // $sql = "INSERT INTO guess_like(id,imgsrc,brand,title,price,wbprice) VALUES (null,'$s_img','$cond','$elps','$price','$oldprice')";
    // INSERT INTO list_ll (id,imgsrc,price,sprice,title,sales,brand,free)VALUES (0,"435678.jpg",8435.8,"101,230","sdfds","120","sdf","sdfsd")
    // $conn->query($sql);
    // var_dump($sql);
    // echo $i;
    // echo $sql;
    }
    // $sql = "SELECT * FROM list_ll";
    // $res = $conn->query($sql);
    // $data = $res->fetch_all(MYSQLI_ASSOC);
    // print_r($arrData);
    // echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>