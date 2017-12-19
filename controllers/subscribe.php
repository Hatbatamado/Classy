<?php
if (isset($_POST['email'])) {
	// CHANGE THE TWO LINES BELOW
	$email_to = "gyula@classysound.com";
	$email_subject = "http://www.classysound.com";

	function died($error) {
		// your error code can go here
		echo "We're sorry, but there's errors found with the form you submitted.\n\n";
		echo $error."\n\n";
		echo "Please go back and fix these errors.\n\n";
		die();
	}

	// validation expected data exists
	if (!isset($_POST['email'])) {
		died('We are sorry, but there appears to be a problem with the form you submitted.');
	}

	$email_from = $_POST['email']; // required

	$error_message = "";
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if (!preg_match($email_exp,$email_from)) {
  	$error_message .= 'The Email Address you entered does not appear to be valid.';
  }

  if (strlen($error_message) > 0) {
  	died($error_message);
  }

	$email_message = "Subscribed to your mailing list.\n\n";

	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}

	$email_message .= "Email: ".clean_string($email_from)."\n";

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
?>

Thank you for your subscription. We'll keep you updated.

<?php
}
die();
?>
