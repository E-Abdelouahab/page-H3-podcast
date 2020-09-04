<?php 
require './db.php';
$id = $_GET["id"];
$sql = "UPDATE From products WHERE product_id = $id";
$result = mysqli_query($con, $sql);
header("location: charts.php");

if ($_SERVER['REQUEST_METHOD']== "POST") {

    $product_id = !empty($_POST['product_id']) ? trim($_POST['product_id']) : null;
    $product_cat = !empty($_POST['product_cat']) ? trim($_POST['product_cat']) : null;
    $product_title = !empty($_POST['product_title']) ? trim($_POST['product_title']) : null;
    $product_price = !empty($_POST['product_price']) ? trim($_POST['product_price']) : null;
    $product_desc = !empty($_POST['product_price']) ? trim($_POST['product_desc']) : null;
    $product_image = !empty($_POST['product_image']) ? trim($_POST['product_image']) : null;
   
    $sql = "SELECT product_id,product_cat ,product_title,product_price,product_price,product_image,  FROM products WHERE product_id = :product_id";
    $stmt = $ecommerce->prepare($sql);
    $stmt->bindValue(':product_id', $product_id);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if($user === false){
        header('location: charts.php');
    } else{   
        session_start();
        if($passwordAttempt == $user['password']){  
            $_SESSION['user_id'] = $user['id'];
         
            header('Location: charts.php');
            exit;
            
        } else{
   
            header('location: charts.php');
        } }
   }   
      ?>