import clsx from 'clsx'

export const Input: React.FC<InputProps> = ({ className, hidden, type = 'text', ...props }) => (
  <input
    className={clsx(
      'shadow-sm focus:ring-indigo-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md',
      { 'sr-only': hidden },
      className
    )}
    type={type}
    {...props}
  />
)

export default Input

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hidden?: boolean;
}
