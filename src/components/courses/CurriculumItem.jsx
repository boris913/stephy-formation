import { PlayCircleIcon } from '@heroicons/react/24/outline';

const CurriculumItem = ({ title, duration, isFree }) => {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
      <div className="flex items-center gap-3">
        <PlayCircleIcon className="h-6 w-6 text-gray-400" />
        <span>{title}</span>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <span>{duration}</span>
        {isFree && <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Gratuit</span>}
      </div>
    </div>
  );
};

export default CurriculumItem;