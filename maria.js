const maria = require('mysql');

const hostAddr = {
    운영: 'tomhoon.duckdns.org',
    내부망: '192.168.0.100', // tomhoon만
    개발: 'localhost',
}

const conn = maria.createConnection({
    host : hostAddr.내부망,
    port : 13306,
    user:'root',
    password:'1234',
    database: 'todayworkout'
});

module.exports = conn;