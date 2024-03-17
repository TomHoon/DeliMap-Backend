const morgan = require('morgan');
const logger = require('./logger');

// 메소드, URL, 상태 코드, 응답 시간 등을 포함하는 로그 형식 (커스텀)
const customFormat = ':method :url :status :response-time ms - :res[content-length]';

// 환경에 따라 format 결정
//const morganFormat = process.env.NODE_ENV === 'production' ? 'combined' : customFormat;
const morganFormat = customFormat;

// 로그 작성을 위한 Output stream옵션.
const stream = {
    write: (message) => {
        logger.info(message.trim());
    },
};

const morganMiddleware = morgan(morganFormat, { stream });

module.exports = morganMiddleware;