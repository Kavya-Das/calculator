<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculate</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<link rel="stylesheet" href="css\style.css">
</head>
<body class="background">
<nav class="navbar navbar-expand-lg bg-success navbar-light">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="index.php">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="add.php">Addition</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="sub.php">Subtraction</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="mul.php">Multiplication</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="div.php">Division</a>
          </li>
        </ul>
      </nav>
    <div class="container">
        <div class="row">
            <div class="col">
<table class="table">
  <tr>
    <td>Enter first number:</td>
    <td><input type="text" class="form-control" id="first"></td>
  </tr>
  <tr>
    <td>Enter second number:</td>
    <td><input type="text" class="form-control" id="second"></td>
  </tr>
  <tr>
    <td></td>
    <td><button onclick="clickDiv()" class="btn btn-danger">Calculate</button></td>
  </tr>
  <tr class="backcolor">
    <td>Result:</td>
    <td><p id="resDiv"></p></td>
  </tr>
</table>
</div>
</div>
</div>
<script src="js\script.js">

</script>
</body>
</html>