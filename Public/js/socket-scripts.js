let socket = io();

socket.emit('chat message',"hello there");
socket.on('event-2',(msg)=>{
    console.log(msg);
    dataForTable5.push(msg);
    $("#table-5").dataTable().fnDestroy();
    createTable5(dataForTable5);

});