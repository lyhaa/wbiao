<?php
    $servername = '127.1.1.0';
    $username = 'root';
    $dbname =  'wbiao';
    $dbpsw = '';
    $conn = new mysqli($servername,$username,$dbpsw,$dbname);
    if($conn->connect_error){
        die("连接失败:".$conn->connect_error);
    }
    // echo "连接成功";
?>