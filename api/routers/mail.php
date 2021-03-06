<?php


class Mail extends Api
{
	public function POST()
	{
			$customerName = $this->data["customerName"];
			$phoneNumber = $this->data["phoneNumber"];
			$email = $this->data["email"];
			$messageType = $this->data["messageType"];
			$message = $this->data["message"];

			switch($messageType) {
				case 'contactsPage':
					$messageType = 'вопрос со страницы контактов';
					break;
				case 'courseSubscribe':
					$messageType = 'запись на курс';
					break;
				case 'teaching':
					$messageType = 'хочу стать преподавателем';
					break;
				default:
					$messageType = 'тема не указана';
			}

			$to = 'a.ragulin@coral-club.com';
			$from = 'no-reply@courses.coral.club';
			$subject = 'Сообщение с сайта courses.coral.club';
			$headers = "From: " . $from . "\r\n";
			$headers .= "Reply-To: ". $from . "\r\n";
			$headers .= "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
			$headers .= "cc: webdevatogz@gmail.com";

		$message =
			"
			        <html>
			        <head></head>
			        <body>
			            <h3>Новое сообщение с сайта courses.coral.club.<br/><br/> Тема: <b>".$messageType."</b></h3>

			            <p>Имя: $customerName</p>
			            <p>Телефон: $phoneNumber</p>
			           	<p>E-mail: $email</p>
			            <h4 style='text-decoration: underline'>Сообщение</h4>
			            <p>$message</p>
			        </body>
			        </html>";

			if(mail($to, $subject, $message, $headers)) {
				$data["message"] = "Спасибо! Ваша заявка отправлена. В ближайшее время мы с вами свяжемся.";
			}
			else {
				$data["error"] = error_get_last();
			}


		return $data;
	}

	public function PUT(){

	}
}

