import AppError from './app'
import NotFoundError from './not-found'

export * from './app'
export * from './not-found'

const Errors = { AppError, NotFoundError }

export default Errors
