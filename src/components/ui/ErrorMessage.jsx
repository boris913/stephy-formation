import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const ErrorMessage = ({ message = "Une erreur est survenue" }) => {
  return (
    <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg">
      <ExclamationTriangleIcon className="h-5 w-5" />
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;