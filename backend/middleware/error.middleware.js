const errorHandler = (err, req, res, next) => {
    res.json({
        error: {
            code: 500,
            message: err.message
        }
    })
};

module.exports = { errorHandler };


/* // middleware/error.middleware.js
const errorHandler = (err, req, res, next) => {
    // 1. Log the error internally for debugging (CRUCIAL!)
    console.error(err.stack); // Logs the full stack trace, which is invaluable

    // 2. Determine the appropriate HTTP status code
    let statusCode = err.statusCode || 500; // If you have custom errors with statusCode property, use it. Default to 500.
    let message = err.message || 'An unexpected error occurred.'; // Default message

    // Specific handling for "Not Found" errors from your service layer
    // The error thrown by findNoteById ("Note with specified ID does not exist.")
    // will be caught here.
    if (err.message.includes("does not exist")) {
        statusCode = 404;
        // For 404, it's usually fine to return the specific message to the client.
        message = err.message;
    }
    // You could add more conditions for other custom error types, e.g.:
    // if (err.name === 'ValidationError') {
    //     statusCode = 400;
    //     message = err.message; // Or format validation errors differently
    // }

    // 3. Adjust message for production environment (optional but recommended for 500s)
    // Avoid sending internal error details to clients in production for 500 errors.
    if (statusCode === 500 && process.env.NODE_ENV === 'production') {
        message = 'An internal server error occurred.';
    }

    // 4. Send the response
    res.status(statusCode).json({
        error: {
            code: statusCode, // Aligning the internal code with the HTTP status
            message: message,
            // Optionally, include stack trace or more details ONLY in development
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
        }
    });
};

module.exports = { errorHandler }; */