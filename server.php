<?php


$name = $_POST['user_name'];
$phone = $_POST['user_phone-number'];
$street = $_POST['street'];
$house = $_POST['house_number'];
$building = $_POST['building_number'];
$flat = $_POST['flat_number'];
$floor = $_POST['floor_number'];
$comment = $_POST['comment'];
$payment = $_POST['pay'];
$donotcall = $_POST['no_callback'];
$donotcall = isset($donotcall) ? 'Не звонить' : 'Позвонить';

$mail_message = '

    <html>
        <head> 
            <title>Заказ</title>
        <head/>

        <body>
            <h2>Заказ</h2>
            <ul>
            <li>Имя: '. $name .' </li>
            <li>Телефон: '. $phone .' </li>
            <li>Улица: '. $street .' </li>
            <li>Дом: '. $house .' </li>
            <li>Корпус: '. $building .' </li>
            <li>Квартира: '. $flat .' </li>
            <li>Этаж: '. $floor .' </li>
            <li>Комментарий: '. $comment .' </li>
            <li>Способ оплаты: '. $payment .' </li>
            <li>Обратный звонок: '. $donotcall .' </li>
            </ul>
        </body> 
    </html>

';

$headers = "From: Администратор сайта <admin@burgers.com>\r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";


$mail = mail('lana.shvedova@gmail.com', 'Заказ', $mail_message, $headers);

$data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);


?>