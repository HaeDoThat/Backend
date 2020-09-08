class HttpError extends Error {
  constructor(status, message, cause) {
    super(message);
    this.status = status;
    this.cause = cause;
  }
}

const badRequest = new HttpError(400, '올바르지 않은 요청입니다.');
const invalidName = new HttpError(412, 'name의 형식이 올바르지 않습니다.', 'name');

module.exports = {
  badRequest,
  invalidName
};