exports.succes = (req, res, messege, statusCode)  => {
    req.status(statusCode).send({
        error: '',
        messege: messege || 'created successfully'
    })
};

exports.error = (req, res, message, statusCode, errorDetails) => {
    console.log('[Require Error]:', errorDetails);

    res.status(statusCode).send({
        error: messege || 'Internal Error',
        message: ''
    })
}