export class AppError extends Error {
  public readonly statusCode: number;

  constructor(statusCode: number)
  constructor(message: string, statusCode: number)
  constructor(messageOrStatusCode?: string | number, statusCode: number = 400) {
    let message = messageOrStatusCode || ''
    if (Number.isInteger(message)) {
      statusCode = Number.parseInt(message.toString(), 10)
      message = 'AppError'
    }
    super(message.toString())
    this.name = "AppError"
    this.statusCode = statusCode;
  }
}

export default AppError
