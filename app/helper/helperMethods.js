exports.getResponseObject = (code, message, data) => {
    return {
        responseCode: code,
        responseMessage: message,
        responseData: data
    }
}
