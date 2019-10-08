<?php
    @include "msql.php";
    $dataid = isset($_REQUEST["dataid"])? $_REQUEST["dataid"]:7;
    $sql = "SELECT * FROM list_ll WHERE id='$dataid'";
    $res = $conn->query($sql);
    $data = mysqli_fetch_all($res);
    echo json_encode($data);
?>