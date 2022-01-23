import clsx from 'clsx'

export const Button: React.FC<ButtonProps> = ({ className, type = 'button', ...props }) => (
  <button
    className={clsx(
      'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500',
      className
    )}
    type={type}
    {...props}
  />
)

export default Button

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
