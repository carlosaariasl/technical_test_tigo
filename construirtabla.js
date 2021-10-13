//Función para crear la tabla.
function Cliente_Paquete(tabla, datos)
{
    //Se limpiar el contenido de la tabla, excepto los titulos de las columnas.
    $('#' + tabla).find('tr:not(:first)').remove();     
 
    //Se valida si el origen de datos no contiene información.
    if(datos==null || datos.length==0)
    {       
        //Se crea una nueva fila.
        var _filaVacia = $((document).createElement('tr'));
        _filaVacia.css('text-align', 'center');
 
        //Se anexa la fila a la tabla.
        $('#' + tabla).append(_filaVacia);
         
        //Se crea una columna y se le asigna un tamaño de 4 columnas.
        var _columnaVacia = $((document).createElement('td'));            
        _columnaVacia.attr('colspan', 4);
 
        //Se crea un nodo de texto para definir un mensaje que se mostrará cuando no haya elementos.
        var _contenidoVacio = $((document).createTextNode('No se encontraron resultados :('));
         
        //Se anexa el nodo de texto a la columna.
        _columnaVacia.append(_contenidoVacio);
             
        //Se anexa la columna a la fila.
        _filaVacia.append(_columnaVacia);
         
        //Se finaliza la función.
        return;
    }
     
    //Se recorre cada uno de los elementos del origen de datos.
    $.each(datos, function (key, item)
    {
        //Se crea una nueva fila y se le asigna un identificador.
        var _fila= $((document).createElement('tr'));
        _fila.attr('id', 'fila'+item.personaId);
 
        //Se anexa la fila a la tabla.
        $('#' + tabla).append(_fila)
         
        //Identificador de la persona.
 
        //Se crea una nueva columna para encapsular los identificadores de las personas.        
        var _columnaPersonaId= $((document).createElement('td'));
         
        //Se crea un nodo de texto y se le asigna el identificador de la persona.
        var _personaId= $((document).createTextNode(item.personaId));
         
        //Se anexa a la columna [_columnaPersonaId] el nodo de texto.
        _columnaPersonaId.append(_personaId);
         
        //Se anexa la columna [_columnaPersonaId] a la fila.
        $('#fila' + item.personaId).append(_columnaPersonaId);
         
        //Nombre completo.
         
        //Se crea una nueva columna para encapsular el nombre completo de las personas.     
        var _columnaNombre= $((document).createElement('td'));
         
        //Se crea un nodo de texto y se le asigna el nombre completo de la persona.
        var _nombre= $((document).createTextNode(item.nombre + ' ' + item.apellidoPaterno + ' ' + item.apellidoMaterno));
         
        //Se anexa a la columna [_columnaNombre] el nodo de texto.
        _columnaNombre.append(_nombre);
         
        //Se anexa la columna [_columnaNombre] a la fila.
        $('#fila' + item.personaId).append(_columnaNombre);
 
        //Fecha de Nacimiento.
         
        //Se crea una nueva columna para encapsular la fecha de nacimiento de las personas.     
        var _columnaFechaNacimiento= $((document).createElement('td'));
         
        //En caso de que la fecha venga en formato largo, se debera de obtener el formato corto para cuestiones de presentación.
        var _fechaCorta= item.fechaNacimiento.split(' ')[0];
         
        //Se da formato a la fecha para presentarla como DD/MM/YYYY.
        var _elementosFecha= _fechaCorta.split('-');
        var _fecha= _elementosFecha[2] + '/' + _elementosFecha[1] + '/' + _elementosFecha[0];
                 
        //Se crea un nodo de texto y se le asigna la fecha de nacimiento de la persona.
        var _fechaNacimiento= $((document).createTextNode(_fecha));
         
        //Se anexa a la columna [_columnaFechaNacimiento] el nodo de texto.
        _columnaFechaNacimiento.append(_fechaNacimiento);
         
        //Se anexa la columna [_columnaFechaNacimiento] a la fila.
        $('#fila' + item.personaId).append(_columnaFechaNacimiento);
         
        //Genero
         
        //Se crea una nueva columna para encapsular el genero de de las personas.       
        var _columnaGenero= $((document).createElement('td'));
         
        //Se crea un nodo de texto y se le asigna el genero de la persona.
        var _genero= $((document).createTextNode((item.genero == 'F')? 'Femenino': 'Masculino'));
         
        //Se anexa a la columna [_columnaGenero] el nodo de texto.
        _columnaGenero.append(_genero);
         
        //Se anexa la columna [_columnaGenero] a la fila.
        $('#fila' + item.personaId).append(_columnaGenero);
    });     
}