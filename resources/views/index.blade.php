<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">
        <title>Login</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="css/app.css">
        <!-- Styles -->
        <style>
            body {
                height: 100vh;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            #index{
                height: 100vh;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                background: url("/images/wallet.jpg");
                background-color: #cccccc;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }
        </style>
    </head>
    <body>
        <div id="index"></div>
        <script type="text/javascript" src="js/app.js"></script>
    </body>
</html>
