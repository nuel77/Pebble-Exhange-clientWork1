
let socket = io();
socket.emit('chat message',"chat-Connected");
//live data to table 5(open Orders);
socket.on('event-2',(msg)=>{
    let table = $('#table-5').DataTable();
    table.row.add(msg);
    table.draw();
});