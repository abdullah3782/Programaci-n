//asi se comienza hacer un array
var articulos=["Zapatillas", "camisetas", "pantalon", "Calcetines"] ;
//eso es para que pille el primer elemento de la array en este caso zapatillas
document.write ("<p> El primer articulo es <strong>") ;
//aqui te muestra que array es, ponemos 0 porque empezamos de 0 y no de 1
  document.write (articulos [0] + "</strong> </p>") ;
  //eso es para que pille el ultimo elemento de la array en este caso calcetines 
  document.write ("<p>El ultimo elemento es <strong>") ;
  //aqui muestrara el ultimo array y ya que se empieza de 0 le ponemos -1 para que le reste 1 al ultimmo  
    document.write (articulos[articulos.length-1] + "</strong> </p>") ;
    //para agregar un elemnto al PRINCIPIO de la ARRAY
    articulos.unshift ("Balón") ; 
    //aqui se cambia el primer elemnto y de zapatillas se cambia a balon
    document.write ("<p> Casi se me olvida !!! Agregamos este elemento: <strong>") ;
    //aqui aparecera el nuevo elemto agregado a la array
      document.write (articulos[0] + "</strong> </p>") ;
      //eso no es  que nada es un simple texto que queremos que nos aparezca en la web nada más
      document.write ("<p> agregamos un elemento mas al final : <strong>");
      //push es para agregar un elemento al final de la Array y con prompt elije el usuario que elemento quiere ponerle de manera temporal
        articulos.push (prompt("Introduce"));
        //aqui muestrara el ultimo array y ya que se empieza de 0 le ponemos -1 para que le reste 1 al ultimmo  
        document.write (articulos [articulos.length-1] + "</strong> </p>");
       //para que me escriba el primer elemento de la array y luego las que viene
        document.write ("<p>" + articulos[0] + "</br>")
        document.write (articulos[1] + "</br>")
        document.write (articulos[2] + "</br>")
        document.write (articulos[3] + "</br>")
        document.write (articulos[4] + "</br>")
        document.write (articulos[5] + "</br> </p>")
        //una simple alerta 
        alert("Voy a borrar el primer elemento")
        // shift para borrar el primer elemnto 
        articulos.shift();
        document.write ("<p>" + articulos[0] + "</br>")
        document.write (articulos[1] + "</br>")
        document.write (articulos[2] + "</br>")
        document.write (articulos[3] + "</br>")
        document.write (articulos[4] + "</br> </p>")
        //una simple alerta 
        alert("Ahora toca borrar el último elemento")
         //pop es para borrar el último elemnto 
        articulos.pop();
        document.write ("<p>" + articulos[0] + "</br>")
        document.write (articulos[1] + "</br>")
        document.write (articulos[2] + "</br>")
        document.write (articulos[3] + "</br> </p>")
    
        
       
