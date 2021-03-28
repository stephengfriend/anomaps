import clsx from 'clsx'

export const Button: React.FC<ButtonProps> = ({ children, className, secondary }) => (
  <button
    type="button"
    className={clsx("inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", className)}
  >
    {children}
  </button>
)

export interface ButtonProps extends HTMLButtonElement {
  secondary?: boolean
  inverse?: boolean

  rounded?: boolean
  circular?: boolean
}
