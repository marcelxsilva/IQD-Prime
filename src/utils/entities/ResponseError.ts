/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const defaultErrorMessage =
  'Erro inesperado. Verifique sua internet e tente novamente.';

export default class ResponseError {
  public message = '';

  public code = 0;

  constructor({ response }: any) {
    this.message = response.data.message || defaultErrorMessage;
    this.code = response.status || 0;
  }
}
