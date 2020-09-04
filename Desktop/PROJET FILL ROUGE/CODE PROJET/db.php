<?php

// class Crud{
   
//    private static $servername = HOST;
//    private static $username = USER;
//    private static $password = PASSWORD;
//    private static $db = DATABASE_NAME;
//    private static $con;
   
//    public static function connect() {
      
//     try {
//         //check if
//         // self::$con = new PDO(self::$servername, self::$username, self::$password,self::$db);
//         self::$con = new PDO('mysql:host=' . self::$servername .';dbname=' . self::$db . ', ' . self::$username . ', ' . self::$password . '');
    
//       }

      
//       catch (Exception $e) {
//         //display custom message
//         echo "error";
//       }
    
//    }

   
// }
require "config/constants.php";

$servername = HOST;
$username = USER;
$password = PASSWORD;
$db = DATABASE_NAME;

// Create connection
$con = mysqli_connect($servername, $username, $password,$db);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());

}


//  $erreurs = "";
//  $db = new PDO('mysql:host=localhost;dbname=todo_list;charset=utf8', 'root', 'admin1');
 
  

?>