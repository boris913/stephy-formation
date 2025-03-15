import { StarIcon } from '@heroicons/react/24/solid';

const RatingStars = ({ rating = 0, max = 5 }) => {
  return (
    <div className="flex items-center">
      {[...Array(max)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-5 w-5 ${
            index < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">({rating})</span>
    </div>
  );
};

export default RatingStars;