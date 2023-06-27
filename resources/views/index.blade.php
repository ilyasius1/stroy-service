<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
{{--    <link rel="icon" href="<%= BASE_URL %>favicon.ico">--}}
    <title>{{ env('APP_NAME','') }}</title>
</head>
<body>

    <div id="app"></div>
  @vite('resources/js/main.js')
  </body>
</html>
