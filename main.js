const express = require("express");
const app = express();
const cors = require("cors");
const morganMiddleware = require('./src/log/morgan.js');

// const mailer = require('./mail');

const maria = require("./maria.js");
maria.connect();

// 모든 요청 허용
const corsOptions = {
	origin: "*"
};

// 통신 CORM 설정
app.use(cors(corsOptions));

// 콘솔창에 통신결과 나오게 해주는 것
app.use(morganMiddleware);  

// 순서 route > controller > models
app.use('/members', require('./src/route/member.route'));
app.use('/mail', require('./src/route/mail.route'));

app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 3300;

const server = app.listen(port, function() {
  console.log('server running on port 3300');
});

require('./chat.js').construct(server);