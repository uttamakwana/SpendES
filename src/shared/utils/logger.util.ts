import winston, { createLogger, transports, format } from 'winston';
import path from 'path';

// Log Levels
const logLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6
    },
    colors: {
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'magenta',
        verbose: 'cyan',
        debug: 'blue',
        silly: 'grey'
    }
};

// Set up the log format for consistent logging
const logFormat = format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }), // Allows logging of stack traces
    format.splat(),
    format.printf(({ timestamp, level, message, stack }) => {
        if (stack) {
            return `${timestamp} ${level}: ${message}\n${stack}`;
        }
        return `${timestamp} ${level}: ${message}`;
    })
);

// Configure the Logger
const logger = createLogger({
    levels: logLevels.levels,
    transports: [
        // Console transport for development environment
        new transports.Console({
            level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
            format: format.combine(
                format.colorize(),
                logFormat
            ),
        }),

        // File transport for production (error logs and general info)
        new transports.File({
            filename: path.join(__dirname, '../logs/error.log'),
            level: 'error',
            format: logFormat,
        }),
        new transports.File({
            filename: path.join(__dirname, '../logs/combined.log'),
            level: 'info',
            format: logFormat,
        }),
    ],
});

// Adding colors to the logger for better readability in development
winston.addColors(logLevels.colors);

// Handling uncaught exceptions and unhandled promise rejections
logger.exceptions.handle(
    new transports.Console({ format: logFormat }),
    new transports.File({ filename: path.join(__dirname, '../logs/exceptions.log'), format: logFormat })
);

// Catch unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    logger.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
});

export { logger };
