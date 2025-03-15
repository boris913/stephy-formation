import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

const Button = forwardRef(({ 
  children, 
  variant = 'primary',
  isLoading,
  className,
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  return (
    <button
      ref={ref}
      className={twMerge(
        'px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2',
        variants[variant],
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <ArrowPathIcon className="h-5 w-5 animate-spin" />
          Chargement...
        </>
      ) : children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;