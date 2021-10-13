<?php
require("conexion.php");
$consulta = mysqli_query($con, "SELECT * FROM cliente");
if (mysqli_num_rows($consulta) > 0)
{
    echo "
<p>"; while($row = mysqli_fetch_array($consulta, MYSQL_ASSOC)) { echo "<tr>"; echo "<<td>".$row[//cedula//]."</td>"; echo "<td>".$row[//nombre//]."</td>"; echo "<td>".$row[//fecha_nacimiento//]."</td>"; echo "<td>".$row[//cargo//]."</td>"; echo "</tr>"; } echo " <table> <thead> <tr> <th>Nº de Cédula</th> <th>Nombre</th> <th>Fecha Nacimiento</th> <th>Cargo</th> </tr> </thead> </table> 
} else { 
echo " <p>Aún no hay registros en la base de datos</p> 
}
?>