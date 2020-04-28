
//Form fields data cleaning

//to suppress scientific notations in form field
function precise(elem) {
    elem.value = Number(elem.value).toFixed(8);
}
//form events for calculation total etc
$('#buyAmount').change(() => {
    let val = $('#buyAmount').val() * $('#buyPrice').val();
    $('#buyTotal').val(val.toFixed(8));
});
$('#sellAmount').change(() => {
    let val = $('#sellAmount').val() * $('#sellPrice').val();
    $('#sellTotal').val(val.toFixed(8));
});



//function to create tables
function createTable5(data){
    $('#table-5').DataTable( {
        data: data,
        info:false,
        fixedHeader: true,
        paging:false,
        scrollX:false,
        select:'single',
        columns: [
            { data: 'txHash' },
            { data: 'date' },
            { data: 'pair' },
            { data: 'side' },
            { data: 'price' },
            { data: 'amount' },
            {data:'filled'},
            { data: 'notional' }
        ]
    } );
}
function createTable4(data){
    $('#table-4').DataTable({
        data: data,
        info:false,
        fixedHeader: true,
        bFilter:false,
        paging:false,
        scrollX:false,
        columns: [
            { data: 'price' },
            { data: 'amount' },
            { data: 'total' }

        ]
    });
}
function createTable3(data){
    $('#table-3').DataTable({
        data: data,
        fixedHeader: true,
        info:false,
        bFilter:false,
        paging:false,
        scrollX:false,
        columns: [
            { data: 'price' },
            { data: 'amount' },
            { data: 'total' }

        ]
    });
}
function createTable2(data){
    $('#table-2').DataTable({
        data: data,
        fixedHeade: true,
        info:false,
        bFilter:false,
        paging:false,
        scrollX:false,
        columns: [
            { data: 'price' },
            { data: 'amount' },
            { data: 'time' },
        ]
    });
}

function createTable1(data){
    $('#table-1').DataTable({
        data: data,
        fixedHeade: true,
        paging:false,
        info:false,
        select:'single',
        scrollX:false,
        columns: [
            { data: 'price' },
            { data: 'pair' },
            { data: 'change' },
        ]
    });
}

//when document is ready this function is called
$(function () {

    //initialize tables
    createTable1(dataForTable1);
    createTable2(dataForTable2);
    createTable3(dataForTable3);
    createTable4(dataForTable4);//order History table
    createTable5(dataForTable5); //open orders table

    //click event of 5th table
    $('#table-5').DataTable()
        .on( 'select', function ( e, dt, type, indexes ) {
            if ( type === 'row' ) {
                var data = $('#table-5').DataTable().rows( indexes ).data()[0];
            }
            console.log(data);
        });
    //table search event for --table-5
    $('#table5Search').on('keyup change paste', function(e){
        let table = $('#table-5').DataTable();
        table.search( this.value ).draw();
    });
    //  orderHistoryTable and openOrderTable toggle functions
    $('#openOrdersBtn').click(()=>{
        $('#openOrdersDiv').removeClass('d-none');
        $('#orderHistoryDiv').addClass('d-none')
    });
    $('#orderHistoryBtn').click(()=>{
        $('#orderHistoryDiv').removeClass('d-none');
        $('#openOrdersDiv').addClass('d-none')
    });

//AXIOS FUNCTIONS

    //Sending form data
    $('#sellForm').submit(e => {
        e.preventDefault();
        let reqBody = {
            sellPrice: $('#sellPrice').val(),
            sellAmount: $('#sellAmount').val(),
            sellTotal: $('#sellTotal').val()
        };
        axios.post('/sellPost',reqBody)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    });

    $('#buyForm').submit(e => {
        e.preventDefault();
        let reqBody = {
            buyPrice: $('#buyPrice').val(),
            buyAmount: $('#buyAmount').val(),
            buyTotal: $('#buyTotal').val()
        };
        axios.post('/buyPost',reqBody)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    });
    $('#market-sellForm').submit(e => {
        e.preventDefault();
        let reqBody = {
            marketSellPrice: $('#market-sellPrice').val(),
            marketSellAmount: $('#market-sellAmount').val(),
        };
        axios.post('/marketSellPost',reqBody)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    });
    $('#market-buyForm').submit(e => {
        e.preventDefault();
        let reqBody = {
            marketBuyPrice: $('#market-buyPrice').val(),
            marketBuyAmount: $('#market-buyAmount').val(),
        };
        axios.post('/marketBuyPost',reqBody)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    });

    //  market and Limit form toggle functions
    $('#marketForm').click(()=>{
        $('#marketDiv').removeClass('d-none');
        $('#limitDiv').addClass('d-none')
    });
    $('#limitForm').click(()=>{
        $('#limitDiv').removeClass('d-none');
        $('#marketDiv').addClass('d-none')
    });

});