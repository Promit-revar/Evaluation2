class HttpError extends Error{
    constructor(errorMessage,code){
        super(errorMessage);
        this.message = errorMessage;
        this.statusCode = code;
    }
}
module.exports=HttpError;