<?php
 session_start();

 $erreurs = "";
 $db = new PDO('mysql:host=localhost;dbname=ecomerce;charset=utf8', 'root', 'admin1');

 if ($_SERVER['REQUEST_METHOD']== "POST") {

    $username = !empty($_POST['username']) ? trim($_POST['username']) : null;
    $passwordAttempt = !empty($_POST['password']) ? trim($_POST['password']) : null;
  
    $sql = "SELECT id, username, password FROM user WHERE username = :username";
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':username', $username);
    var_dump($stmt);
    exit;
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if($user === false){
        // header('location: login.php');
    } else{   
        session_start();
        if($passwordAttempt == $user['password']){  
            $_SESSION['user_id'] = $user['id'];
         
            header('Location: inde.php');
            exit;
            
        } else{
   
            // header('location: login.php');
        } }
   } 



?>
