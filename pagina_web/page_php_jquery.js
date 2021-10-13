<?php 



//conexion a DB
$conexion = mysqli_connect('localhost', 'usuario', 'password', 'base_datos');
if(!$conexion){
	echo 'Error al conectar';
	die();
}

//setear caracteres
mysqli_set_charset($conexion, 'utf8');

//cantidad por pagina
$porpagina = 6;

//máximo de botones
$botones = 6;

//indice paginación
if(!isset($_GET['pagina'])) $indice = 0 ; else $indice = ($_GET['pagina']-1) * $porpagina;

//total de posts
$totalpost = $conexion->query("SELECT * FROM mi_tabla");

//obtener el numero de paginas
$paginas = $totalpost->num_rows / $porpagina;

//consulta a tabla
$consulta = $conexion->query("SELECT * FROM mi_tabla ORDER BY id DESC LIMIT $indice, $porpagina");


?>
<div class="paginacion">

<!-- listado posts -->
<h1>Listado de posts</h1>
<ul>

<?php if( $consulta->num_rows > 0 ){
while( $res = $consulta->fetch_array() ){ ?>
		<!-- $res['id'] y $res['titulo'] son columnas de la tabla mi_tabla -->
		<li>#<?php echo $res['id'] ?>: <?php echo $res['titulo'] ?></li>
	<?php 
} }?>
</ul>

<!-- botones -->
<?php if( $consulta->num_rows > 0 ){

//botón principal
$inicioboton = 1;
if( isset($_GET['pagina']) ){
	$inicioboton = $_GET['pagina']-1;
	if( $_GET['pagina']==1 ){
		$inicioboton = $_GET['pagina'];
	}
}

//calcular cantidad botones mediante el botón de inicio
$botones = $botones + $inicioboton;

//calcular el fin de los botones
if( ($botones) > $paginas ){
	$botones = $paginas + 1;
} 

?>

<!-- Retroceder 1 pagina -->
<?php if( isset($_GET['pagina']) && $_GET['pagina'] > 1 ) {?>
<span><a href="?pagina=<?php echo $_GET['pagina'] - 1; ?>">&laquo;</a></span>
<?php } ?>

<?php
//bucle para mostrar botones
for ( $i= $inicioboton; $i < $botones; $i++ ) { ?>
	<span><a href="?pagina=<?php echo $i; ?>"><?php echo $i; ?></a></span>
<?php } } ?>

<!-- Avanzar 1 pagina -->
<?php if( !isset($_GET['pagina']) || $_GET['pagina'] < $paginas ) {?>
<span><a href="?pagina=<?php if( isset($_GET['pagina']) ) echo $_GET['pagina'] + 1; else echo 2; ?>">&raquo;</a></span>
<?php } ?>

</div>