const express = require('express');
const app= express();

//ficheros staticos
app.use(express.static('views'));
app.set('view engine', 'ejs');

const server = require('http').Server(app);
const io = require('socket.io')(server);


//rutas
app.get('/', (req, res) => {
    res.render('index.ejs')
  })

  //sockets https://www.youtube.com/watch?v=ppiAvvkvAz0
  //npm start
 let arra_mensajes= [{
    nombre:'franklim',
    text:'me gusta el funcionamiento del socket'
}];
  io.on('connect', function(socket){
      console.log('alguiense conecto al sockets'+socket.id);
      //objeto a enviar
     
    //envia respuesta inicial
      socket.emit('ejemplo',arra_mensajes)

      //new-mewnsaje
      socket.on('new-mensaje',function(data){
         arra_mensajes.push(data)//agrega el nuevo mensaje
        //avisamos que llego un mensaje a todos los sockets
        io.sockets.emit('ejemplo',arra_mensajes);
        })

    
  })


server.listen(8080, function(){
    console.log('Servidor http://localhost:8080')
})