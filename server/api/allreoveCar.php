<?php
    @include "msql.php";
    $sql = "DELETE FROM wb_cart";
    $conn->query($sql);
?>