<html>
<body>
<?php
    $size = $_POST['multTableSize'];
    echo $size;

    echo "<table border='1'>";
    for ($row = 1; $row <= $size; $row++)
    {
        for ($col = 1; $col <= $size; $col++)
        {
            echo "<td>" . $row * $col . "</td>"
        }
        echo "</tr>"
    }
    echo "</table>"
?>
</body>
</head>