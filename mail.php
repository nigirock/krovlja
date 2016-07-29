<?php

$frm_name  = "Youname";
$recepient = "nigirock124@gmail.com";
$sitename  = "Ограждение и кровля";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);

$message = "
Имя: $name <br>
Телефон: $phone<br>
E-mail: $mail
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
/*Форма: $formname <br>*/