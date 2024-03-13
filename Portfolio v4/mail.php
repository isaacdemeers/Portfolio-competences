<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent = "From: $name \n Message: $message";
$recipient = "demeersemanisaac@orange.fr";
$subject = "Contact Form";
$mailheader = "Form: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error");
echo "thank you";
header("Location: http://113xa.net/Isrem");
die();