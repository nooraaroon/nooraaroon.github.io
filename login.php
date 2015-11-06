<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
echo '<response>';

$username=$_GET['username'];
$password=$_GET['password'];
$userArray=array('Noora', 'Aroon', 'Yosra', 'Aya'); 
$passwordArray=array('Blabla'); 

if(in_array($username,$userArray))
echo 'Valid username';
elseif($username='')
echo 'Field is empty'; 
else
echo 'Invalid username'; 

if(in_array($password,$passwordArray))
echo 'Valid password'; 
elseif($password='')
echo 'Field is empty'; 
else
echo 'Invalid password'; 

echo '</response>';

?>
