<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name1'])) {$name1 = $_POST['name1'];}
    if (isset($_POST['phone1'])) {$phone1 = $_POST['phone1'];}

    if (isset($_POST['name2'])) {$name2 = $_POST['name2'];}
    if (isset($_POST['phone2'])) {$phone2 = $_POST['phone2'];}
    if (isset($_POST['mail2'])) {$email2 = $_POST['mail2'];}

    if (isset($_POST['name3'])) {$name3 = $_POST['name3'];}
    if (isset($_POST['mail3'])) {$email3 = $_POST['mail3'];}

    if (isset($_POST['name4'])) {$name4 = $_POST['name4'];}
    if (isset($_POST['phone4'])) {$phone4 = $_POST['phone4'];}
    if (isset($_POST['height4'])) {$height4 = $_POST['height4'];}
    if (isset($_POST['width4'])) {$width4 = $_POST['width4'];}

    if (isset($_POST['name5'])) {$name5 = $_POST['name5'];}
    if (isset($_POST['phone5'])) {$phone5 = $_POST['phone5'];}
    if (isset($_POST['mail5'])) {$email5 = $_POST['mail5'];}

    if (isset($_POST['mail6'])) {$email6 = $_POST['mail6'];}
    if (isset($_POST['text6'])) {$text6 = $_POST['text6'];}

    if(isset($_POST['name1']) && isset($_POST['phone1'])){
        $message = "<h1 style='color: #00b3ee;font-style: italic'>Получить расчет сметы</h1> <h3 style='color:blue'>Имя: $name1</h3> <h3 style='color: green'>Телефон: $phone1</h3>";
    }
    if(isset($_POST['name2']) && isset($_POST['phone2']) && isset($_POST['mail2'])){
        $message = "<h1 style='color: #00b3ee;font-style: italic'>Получить 7 советов</h1> <h3 style='color:blue'>Имя: $name2</h3> <h3 style='color: green'>Телефон: $phone2</h3> <h3 style='color: orange'>E-mail: $email2</h3>";
    }
    if(isset($_POST['name3']) && isset($_POST['mail3'])){
        $message = "<h1 style='color: #00b3ee;font-style: italic'>Получить бесплатный подбор с расчетом</h1> <h3 style='color:blue'>Имя: $name3</h3> <h3 style='color: orange'>E-mail: $email3</h3>";
    }
    if(isset($_POST['name4']) && isset($_POST['phone4']) && isset($_POST['height4']) && isset($_POST['width4'])){
        $message = "<h1 style='color: #00b3ee;font-style: italic'>Рассчитайте ориентировочную стоимость забора с учетом монтажа</h1> <h3 style='color:blue'>Имя: $name4</h3> <h3 style='color: green'>Телефон: $phone4</h3> <h3>Высота: $height4 м.</h3> <h3>Длина: $width4 м.</h3>";
    }
    if(isset($_POST['name5']) && isset($_POST['phone5']) && isset($_POST['mail5'])){
        $message = "<h1 style='color: #00b3ee;font-style: italic'>Получить на почту договор с гарантиями</h1> <h3 style='color:blue'>Имя: $name5</h3> <h3 style='color: green'>Телефон: $phone5</h3> <h3 style='color: orange'>E-mail: $email5</h3>";
    }
    if(isset($_POST['mail6']) && isset($_POST['text6'])){
        $message = "<h1 style='color: #00b3ee;font-style: italic'>Есть вопрос</h1> <h3 style='color: orange'>E-mail: $email6</h3> \n\nТекст: $text6";
    }

    $to = "avtovamservis@mail.ru"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/html; charset = utf-8";
    $subject = "Профессиональная установка ограждения и кровли";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
        echo "<center>Спасибо за отправку вашего сообщения!</center>";
    }
    else
    {
        echo "<center><b>Ошибка. Сообщение не отправлено!</b></center>";
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>