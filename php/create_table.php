<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>테이블 생성</title>
</head>
<body>

<?php
include_once('connect.php');

$sql = "create table if not exists user_email (
    idx int auto_increment not null,
    name varchar(13) not null,
    email varchar(100) not null,
    sel varchar(100) not null,
    message varchar(100) not null,
    primary key (idx)
) ENGINE=InnoDB DEFAULT CHARSET=utf8";
$result = mysqli_query($conn, $sql);

include_once('close.php');
?>

</body>
</html>