<?php
$name = $_POST['Fname'];
$email = $_POST['email'];
$pnumber = $_POST['contact_no'];
$msg = $_POST['msg'];
$message = "\r\n  Name = " . $name . "\r\n  Email = " . $email . "\r\n  Phone Number = " .  $pnumber . "\r\n  Message = " . $msg;

$subject = "Mail From TechFlux";
$fromname = "";
$fromemail = 'info@techflux.co.in';  //if u dont have an email create one on your cpanel

$mailto = 'muninderkumar1920@gmail.com';  //the email which u want to recv this email

// a random hash will be necessary to send mixed content
$separator = md5(time());

// carriage return type (RFC)
$eol = "\r\n";

// main header (multipart mandatory)
$headers = "From: " . $fromname . " <" . $fromemail . ">" . $eol;
$headers .= "MIME-Version: 1.0" . $eol;
$headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
$headers .= "Content-Transfer-Encoding: 7bit" . $eol;
$headers .= "This is a MIME encoded message." . $eol;

// message
$body = "--" . $separator . $eol;
$body .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
$body .= "Content-Transfer-Encoding: 8bit" . $eol;
$body .= $message . $eol;


//SEND Mail
if (mail($mailto, $subject, $body, $headers)) {
    header('Location:thank_you.html'); // do what you want after sending the email


} else {
    echo "mail send ... ERROR!";
    print_r(error_get_last());
}
