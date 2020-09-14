class NotFoundDataException extends Error {
    constructor(messsage) {
        if (message == undefined) {
            messsage = 'not found date';
        }
        super(message);
    }
}

class FailtoAuthenticationExcpetion extends Error {
    constructor(messsage) {
        if (message == undefined) {
            messsage = 'not found date';
        }
        super(message);
    }
}

module.exports = { NotFoundDataException,
    FailtoAuthenticationExcpetion };