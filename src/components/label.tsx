import clsx from 'clsx'

export const Label: React.FC<LabelProps> = ({ className, htmlFor, ...props }) => (
  <label
    className={clsx(
      'shadow-sm focus:ring-indigo-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md',
      className
    )}
    htmlFor={htmlFor} // Note: This is required to avoid jsx-ally linting errors
    {...props}
  />
)

export default Label

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
