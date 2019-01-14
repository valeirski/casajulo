<html>
    <head>
        <meta http-equiv="refresh" content="2;url=http://www.casa-julo.com/" />
    </head>
    <body>
      <?php
          ini_set( 'display_errors', 1 );
          error_reporting( E_ALL );
          $from = $_POST["email"];
          $to = "broodjeskoerier@gmail.com";
          $subject = "contact formulier casa julo " . $_POST["name"];
          $message = $_POST["address"] . "\r\n" . $_POST["message"];
          $headers = "From:" . $from;
          if(mail($to,$subject,$message, $headers)) {
            echo "<h1>Uw bericht werd verzonden.<h1>";
          } else {
            echo "Verzenden van bericht mislukt.";
          }
      ?>
    </body>
</html>
