export default class ExpiredSessionError extends Error {
  constructor(public response: GenericType = {}) {
    super();
    this.response = {
      data: {
        message: 'Por questões de segurança, entre novamente',
      },
      status: 403,
    };
  }
}
