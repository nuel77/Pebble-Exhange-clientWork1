//data for the tables!
//must be a array of jsons and properties must match data-field attribute inside <thead> of every table element
let dataForTable5 = [
    {
        "txHash":"val",
        "date":"23/2/14",
        "pair":"6,2",
        "side":"213",
        "price":"3223l",
        "amount":"643",
        "filled":"4645",
        "notional":"6275"
    },
    {
        "txHash":"val",
        "date":"23/2/14",
        "pair":"6,2",
        "side":"213",
        "price":"3223l",
        "amount":"643",
        "filled":"4645",
        "notional":"6275"
    },
    {
        "txHash":"val",
        "date":"23/2/14",
        "pair":"6,2",
        "side":"213",
        "price":"3223l",
        "amount":"643",
        "filled":"4645",
        "notional":"6275"
    },
    {
        "txHash":"val",
        "date":"23/2/14",
        "pair":"6,2",
        "side":"213",
        "price":"3223l",
        "amount":"643",
        "filled":"4645",
        "notional":"6275"
    },
    {
        "txHash":"val",
        "date":"23/2/14",
        "pair":"6,2",
        "side":"213",
        "price":"3223l",
        "amount":"643",
        "filled":"4645",
        "notional":"625"
    },
    {
        "txHash":"val",
        "date":"23/2/14",
        "pair":"6,2",
        "side":"213",
        "price":"3223l",
        "amount":"643",
        "filled":"4645",
        "notional":"6235"
    },
    {
        "txHash":"smallest",
        "date":"23/2/14",
        "pair":"6,2",
        "side":"213",
        "price":"3223l",
        "amount":"643",
        "filled":"4645",
        "notional":"568"
    },
    {
        "txHash":"val",
        "date":"23/2/14",
        "pair":"6,2",
        "side":"213",
        "price":"3223l",
        "amount":"643",
        "filled":"4645",
        "notional":"3242"
    },
    {
        "txHash":"val",
        "date":"23/2/14",
        "pair":"6,2",
        "side":"213",
        "price":"3223l",
        "amount":"643",
        "filled":"4645",
        "notional":"3232"
    },
    {
        "txHash":"val",
        "date":"23/2/14",
        "pair":"6,2",
        "side":"213",
        "price":"3223l",
        "amount":"643",
        "filled":"4645",
        "notional":"4332"
    },
    {
        "txHash":"val",
        "date":"23/2/14",
        "pair":"6,2",
        "side":"213",
        "price":"3223l",
        "amount":"643",
        "filled":"4645",
        "notional":"6275"
    }
];
let dataForTable4 = [
    {
        "price": 0,
        "amount": "test0",
        "total": "$0"
    },
    {
        "price": 1,
        "amount": "test1",
        "total": "$1"
    },
    {
        "price": 2,
        "amount": "test2",
        "total": "$2"
    },
    {
        "price": 3,
        "amount": "test3",
        "total": "$3"
    },
    {
        "price": 4,
        "amount": "test4",
        "total": "$4"
    },
    {
        "price": 5,
        "amount": "test5",
        "total": "$5"
    },
    {
        "price": 6,
        "amount": "test6",
        "total": "$6"
    },
    {
        "price": 7,
        "amount": "test7",
        "total": "$7"
    },
    {
        "price": 8,
        "amount": "test8",
        "total": "ldka"
    },
    {
        "price": 9,
        "amount": "test9",
        "total": "$9"
    }
];
let dataForTable3 = [
    {
        "price": 0,
        "amount": "test0",
        "total": "$0"
    },
    {
        "price": 1,
        "amount": "test1",
        "total": "$1"
    },
    {
        "price": 2,
        "amount": "test2",
        "total": "$2"
    },
    {
        "price": 3,
        "amount": "test3",
        "total": "$3"
    },
    {
        "price": 4,
        "amount": "test4",
        "total": "$4"
    },
    {
        "price": 5,
        "amount": "test5",
        "total": "$5"
    },
    {
        "price": 6,
        "amount": "test6",
        "total": "$6"
    },
    {
        "price": 7,
        "amount": "test7",
        "total": "$7"
    },
    {
        "price": 8,
        "amount": "test8",
        "total": "ldka"
    },
    {
        "price": 9,
        "amount": "test9",
        "total": "$9"
    }
];
let dataForTable1 = [
    {
        "price": 0,
        "pair": "test0",
        "volume": "$0",
        "change": "932"
    },
    {
        "price": 1,
        "pair": "test1",
        "volume": "$1",
        "change": "932"
    },
    {
        "price": 2,
        "pair": "test2",
        "volume": "$2",
        "change": "932"
    },
    {
        "price": 3,
        "pair": "test3",
        "volume": "$3",
        "change": "932"
    },
    {
        "price": 4,
        "pair": "test4",
        "volume": "$4",
        "change": "932"
    },
    {
        "price": 5,
        "pair": "test5",
        "volume": "$5",
        "change": "932"
    }
];
let dataForTable2 = [
    {
        "price": 0,
        "amount":"2313",
        "time":"9.30"
    },
    {
        "price": 1,
        "amount":"2313",
        "time":"9.30"
    },
    {
        "price": 2,
        "amount":"2313",
        "time":"9.30"
    },
    {
        "price": 3,
        "amount":"2313",
        "time":"9.30"
    },
    {
        "price": 4,
        "amount":"2313",
        "time":"9.30"
    },
    {
        "price": 5,
        "amount":"2313",
        "time":"9.30"
    }
];

//Form fields data cleaning
//to suppress scientific notations in form field
function precise(elem) {
    elem.value = Number(elem.value).toFixed(8);
}

$('#buyAmount').change(() => {
    let val = $('#buyAmount').val() * $('#buyPrice').val();
    $('#buyTotal').val(val.toFixed(8));
});
$('#sellAmount').change(() => {
    let val = $('#sellAmount').val() * $('#sellPrice').val();
    $('#sellTotal').val(val.toFixed(8));
});


//when document is ready this function is called
$(function () {

    //toggleable table for the first table
    $('#changeToVolume').click(() => {
        let table = $('#table-1')
        table.bootstrapTable('destroy');
        let t = $('#table-1-toggle');
        t.attr('data-field', 'volume');
        t.text('Volume');

        table.bootstrapTable({
            data: dataForTable1
        });
    });
    $('#changeToChange').click(() => {
        let table = $('#table-1')
        table.bootstrapTable('destroy');
        let t = $('#table-1-toggle');
        t.attr('data-field', 'change');
        t.text('Change');
        table.bootstrapTable({
            data: dataForTable1
        });
    });

    //all other tables
    $('#table-5').DataTable( {
        data: dataForTable5,
        scrollX:false,
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
    $('#table-4').bootstrapTable({
        data: dataForTable4
    });
    $('#table-3').bootstrapTable({
        data: dataForTable3
    });
    $('#table-2').bootstrapTable({
        data: dataForTable2
    });
    $('#table-1').bootstrapTable({
        data: dataForTable1
    });


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
            sellPrice: $('#buyPrice').val(),
            sellAmount: $('#buyAmount').val(),
            sellTotal: $('#buyTotal').val()
        };
        axios.post('/buyPost',reqBody)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    });

});