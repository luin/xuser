var cfg = { _id: 'xuser',
    members: [
        { _id: 0, host: '127.0.0.1:27001'},
        { _id: 1, host: '127.0.0.1:27002'},
        { _id: 2, host: '127.0.0.1:27009', arbiterOnly: true}
    ]
};

var error = rs.initiate(cfg);
printjson(error);