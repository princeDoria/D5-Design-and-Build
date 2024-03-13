<?php
if (isset($_POST['send'])){
    $to = 'd5designandbuild2023@gmail.com';
    $from = $_POST['email'];
    $subject = 'Website Message Form';
    $message = 'Name: ' . $_POST['name'] . "\r\n\r\n" . $_POST['message'];
    $headers = "From: " . $from;
    $headers .= 'Content-Type: text/plain; charset=utf-8';

    $success = mail($to, $subject, $message, $headers);
    echo "Mail Sent.";
}
?>