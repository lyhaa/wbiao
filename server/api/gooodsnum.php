<?php
    @include "msql.php";
    $totalCount = "SELECT * FROM wb_cart";
    $res = $conn->query($totalCount);
    $rows = mysqli_num_rows($res);
    echo '{"totalRow":' . $rows . '}';
?>