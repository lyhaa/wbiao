<?php
    @include "msql.php";
    $page = isset($_REQUEST["page"])? $_REQUEST["page"]:0;
    $pages = $page*44;
    $sorttype = isset($_REQUEST["sorttype"])? $_REQUEST["sorttype"]: "synthesize";
    $arr = array();
    if($sorttype == "synthesize"){
        $sql = "SELECT * FROM list_ll LIMIT $pages,44";
    }else if($sorttype == "pricehigh"){
        $sql= "SELECT * FROM list_ll ORDER BY price DESC LIMIT $pages,44";
    }else if($sorttype == "pricelow"){
        $sql="SELECT * FROM list_ll ORDER BY price ASC LIMIT $pages,44";
    }else if($sorttype == "salesvolume"){
        $sql= "SELECT * FROM list_ll ORDER BY sales DESC LIMIT $pages,44";
        
    }else{
        $sql = "SELECT * FROM list_ll LIMIT $pages,44";

    }
    $res = $conn->query($sql);
    $data = mysqli_fetch_all($res);
    for($i=0;$i<count($data);$i++){
        array_push($arr,
           array("imgsrc"=>$data[$i][1],
            "data_id"=>$data[$i][0],
            "price"=>$data[$i][2],
            "sprice"=>$data[$i][3],
            "title"=>$data[$i][4],
            "sales"=>$data[$i][5],
            "brand"=>$data[$i][6],
            "free"=>$data[$i][7])
        );
    };

    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>