<?php 

$conexion = mysqli_connect('localhost', 'usuario', 'password', 'base_datos');
if(!$conexion){
	echo 'Error al conectar';
	die();
}


mysqli_set_charset($conexion, 'utf8');


$porpagina = 6;


$botones = 6;


if(!isset($_GET['pagina'])) $indice = 0 ; else $indice = ($_GET['pagina']-1) * $porpagina;


$totalpost = $conexion->query("SELECT * FROM cliente");


$paginas = $totalpost->num_rows / $porpagina;


$consulta = $conexion->query("SELECT * FROM cliente ORDER BY id DESC LIMIT $indice, $porpagina");


?>
<div class="paginacion">


<h1>Listado de posts</h1>
<ul>

<?php if( $consulta->num_rows > 0 ){
while( $res = $consulta->fetch_array() ){ ?>
		<!-- $res['id'] y $res['titulo'] son columnas de la tabla mi_tabla -->
		<li>#<?php echo $res['id'] ?>: <?php echo $res['titulo'] ?></li>
	<?php 
} }?>
</ul>


<?php if( $consulta->num_rows > 0 ){


$inicioboton = 1;
if( isset($_GET['pagina']) ){
	$inicioboton = $_GET['pagina']-1;
	if( $_GET['pagina']==1 ){
		$inicioboton = $_GET['pagina'];
	}
}

$botones = $botones + $inicioboton;


if( ($botones) > $paginas ){
	$botones = $paginas + 1;
} 

?>


<?php if( isset($_GET['pagina']) && $_GET['pagina'] > 1 ) {?>
<span><a href="?pagina=<?php echo $_GET['pagina'] - 1; ?>">&laquo;</a></span>
<?php } ?>

<?php

for ( $i= $inicioboton; $i < $botones; $i++ ) { ?>
	<span><a href="?pagina=<?php echo $i; ?>"><?php echo $i; ?></a></span>
<?php } } ?>


<?php if( !isset($_GET['pagina']) || $_GET['pagina'] < $paginas ) {?>
<span><a href="?pagina=<?php if( isset($_GET['pagina']) ) echo $_GET['pagina'] + 1; else echo 2; ?>">&raquo;</a></span>
<?php } ?>

</div>