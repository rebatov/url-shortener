var winston = require('winston');


winston = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {
    service: 'user-service'
  },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({
      filename: 'log/error.log',
      level: 'error'
    }),
    new winston.transports.File({
      filename: 'log/combined.log'
    }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});
module.exports = winston;