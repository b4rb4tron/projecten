<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "../vendor/autoload.php";

//gegevens
$name = $_POST['naam'];
$from = $_POST['email'];
$subject = "Form submission";
$message = "<b>" . $name . "</b> schreef het volgende: <br><br><b>Email:</b> " . $from . "<br><br>" . $_POST['bericht'];
$messagecopy  = "Je hebt het volgende geschreven: <br><br><b>Email:</b> " . $from . "<br><br>" . $_POST['bericht'];
$subjectCopy = "Kopie van bericht naar Senshi No Hime";

//mail
$mail = new PHPMailer(true);                              
$copy = new PHPMailer(true);
try {
    //verzenden
    //$mail->SMTPDebug = 2;                                 
    $mail->isSMTP();  
    $mail->CharSet = 'UTF-8';                                    
    $mail->Host = 'smtp.emailarray.com';  
    $mail->SMTPAuth = true;                               
    $mail->Username = 'info@senshi-no-hime.nl';                 
    $mail->Password = 'Tasje16!';                        
    $mail->SMTPSecure = 'tls';                          
    $mail->Port = 587;                              
    $mail->setFrom($from, $name);
    $mail->addAddress('info@senshi-no-hime.nl');      
    $mail->isHTML(true);                              
    $mail->Subject = $subject;
    $mail->Body    = $message;
    $mail->AltBody = $message;
    $mail->send();
  
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

try {
    //Kopie bericht
    //$copy->SMTPDebug = 2;                                 
    $copy->isSMTP();  
    $copy->CharSet = 'UTF-8';                                    
    $copy->Host = 'smtp.emailarray.com';  
    $copy->SMTPAuth = true;                               
    $copy->Username = 'info@senshi-no-hime.nl';                 
    $copy->Password = 'Tasje16!';                        
    $copy->SMTPSecure = 'tls';                          
    $copy->Port = 587;                              
    $copy->setFrom("info@senshi-no-hime.nl", "Ruth Snoei");
    $copy->addAddress($from);      
    $copy->isHTML(true);                              
    $copy->Subject = $subjectCopy;
    $copy->Body    = $messagecopy;
    $copy->AltBody = $messagecopy;
    $copy->send();
  
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

?>