/*  *******************************
 * @title Reloj mundial
 * @version 1.0
 * @author Gabi Ortíz
 ******************************* */


 function relojEsp () {

    var hora= new Date();
    h= hora.getHours();
    m=hora.getMinutes();
    s=hora.getSeconds();

   function ponerCero(i){
       if (i<10){
           i='0'+i;
       }
       return i;
   }

var divReloj = document.getElementById ("relojEsp");
divReloj.innerHTML= `${h}:${m}:${s}`;

setTimeout ('relojEsp()', 500);

 }

 relojEsp ();