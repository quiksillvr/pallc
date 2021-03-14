<?php


system("cp /usr/local/lib/php.ini  ./php.ini");

/*
// The message
$message = "Line 1\r\nLine 2\r\nLine 3";

// In case any of our lines are larger than 70 characters, we should use wordwrap()
$message = wordwrap($message, 70, "\r\n");

// Send
mail('iroberts15832@mail.mil', 'My Subject', $message);
echo "SEND";
*/

	require_once('class.phpmailer.php');
	
	if($_POST)
	{	
		$to_email       = "site@pallc.co"; //Recipient email, Replace with own email here
		$from_email    = "noreply@pallc.co"; //From email address (eg: no-reply@YOUR-DOMAIN.com)
		$subject         = "Resume";	
		$output_dir     = "./uploads/";
		
		echo "Sending to: $to_email";
	   
		//Sanitize input data using PHP filter_var().
		$user_name      = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
		$user_email     = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
		$phone_number   = filter_var($_POST["phone"], FILTER_SANITIZE_NUMBER_INT);
		$message        = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
		
		//email body
		$message_body = $message."\r\n\r\n".$user_name."\r\nEmail : ".$user_email."\r\nPhone Number : ". $phone_number ;	
		echo "Msg: $message_body";

		### Attachment Preparation ###
		$is_app_attached = false;
		/*if(isset($_FILES['file_attach'])) //check uploaded file
		{
			//get file details we need
			$file_tmp_name    = $_FILES['file_attach']['tmp_name'];
			$file_name        = $_FILES['file_attach']['name'];
			$file_size        = $_FILES['file_attach']['size'];
			$file_type        = $_FILES['file_attach']['type'];
			$file_error       = $_FILES['file_attach']['error'];

			//exit script and output error if we encounter any
			if($file_error>0)
			{   
				$output = json_encode(array('type'=>'error', 'text' => 'Error getting attachment'));
				return json_encode( $output );
			}
			
			$filepath = $output_dir.$file_name;
			move_uploaded_file($file_tmp_name, $filepath);
			$is_app_attached = true;
		}
		
		$is_res_attached = false;
		$filepath2 = null;
		$file_name2 = null;
		if(isset($_FILES['file_attach2'])) //check uploaded file
		{
			//get file details we need
			$file_tmp_name2    = $_FILES['file_attach2']['tmp_name'];
			$file_name2        = $_FILES['file_attach2']['name'];
			$file_size2        = $_FILES['file_attach2']['size'];
			$file_type2        = $_FILES['file_attach2']['type'];
			$file_error2       = $_FILES['file_attach2']['error'];

			//exit script and output error if we encounter any
			if($file_error2>0)
			{   
				$output = json_encode(array('type'=>'error', 'text' => 'Error getting attachment2'));
				return json_encode( $output );
			}
			
			$filepath2 = $output_dir.$file_name2;
			move_uploaded_file($file_tmp_name2, $filepath2);
			$is_res_attached = true;
		}	
*/		
		
		echo "From: $from_email";
		echo "To: $user_name";
		echo "Subject: $subject";
		echo "Body: $message_body";
		
		$email = new PHPMailer();
		$email->From           	= $from_email;
		$email->FromName  		= $user_name;
		$email->Subject       	= $subject;
		$email->Body           	= $message_body;
		$email->AddAddress( $to_email );	
		$email->AddAttachment( $filepath, $file_name );
		if($is_res_attached){
			$email->AddAttachment( $filepath2, $file_name2 );		
		}
		
		echo "Sending ...";
		$mail_sent = $email->Send();
		echo "Sent";
		
		if($is_app_attached ){
			unlink($filepath);
		}
		
		if($is_res_attached){
			unlink($filepath2);
		}

		$arr = array('result' => $mail_sent);	
		return json_encode($arr);
	}
	

?>