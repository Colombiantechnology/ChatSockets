var socket = io.connect('http://localhost:8080/',{'forceNew':true});

    //evento emnsajes se enviaran datos desde el servidor
    /*socket.on('messages', function(data){
        console.log(data);
         })*/

         socket.on('ejemplo', function(data){
             console.log(data);//datos del servidor
            //ejecutamos la funcion deseada
            render(data);
         
           
         })
//ejecuta render data
      function render(data){
         var html = data.map(function(dato,index){
             return (` <li>${dato.nombre} ->${dato.text}  </li>`);
         }).join(" ");
         
         document.getElementById("mensaje").innerHTML= html;
      }
      //envio mensaje
       function addMensagex1(e){
           var payload ={
               nombre:document.getElementById('username').value,
               text:document.getElementById('text').value
           };
           //socket a servidor
           socket.emit('new-mensaje', payload);
           return false;
       }