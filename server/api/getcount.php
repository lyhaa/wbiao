<?php
    @include "msql.php";
    $sqly = "SELECT * FROM list_ll";
    $num = ceil(mysqli_num_rows($conn->query($sqly)) / 44);
    echo $num;
?>