<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  


<?php


include_once('connect.php');
$name = $_POST['name'];
$email = $_POST['email'];
$sel = $_POST['sel'];
$message = $_POST['message'];


$sql = "insert into user_email (name, email ,sel , message) values ('$name','$email','$sel','$message')";    
$result = mysqli_query($conn, $sql);

if($result){
  echo 'Your message was sent successfully. Thanks.';
}

include_once('close.php');

?>

</body>
</html>
