<?php


// require('config.php');
$con= $mysqli_connect('localhost','root','');
if(!con)
    {
        echo('Not connected to the database');
    }
if($mysqli_select_db($con,'contact_form_info'))
    {
        echo('Database not connected');
    }


extract($_POST);
$your_name=$_POST('your_name');
$your_email=$_POST('your_email');
$your_message=$_POST('your_message');


$sql = "INSERT into contact_form_info (name,email,message) VALUES('" . $your_name . "','" . $your_email . "','" . $your_message . "')";


$success = $mysqli->query($sql);


if (!$success) {
    die("Couldn't enter data: ".$mysqli->error);
}


echo "Thank You For Contacting Us ";


$conn->close();


?>