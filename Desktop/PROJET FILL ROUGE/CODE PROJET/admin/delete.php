<?php 
require './db.php';
$id = $_GET["id"];
$sql = "DELETE From products WHERE product_id = $id";
$result = mysqli_query($con, $sql);
header("location: charts.php");