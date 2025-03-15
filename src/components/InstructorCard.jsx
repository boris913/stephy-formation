import { StarIcon } from '@heroicons/react/24/solid';

const InstructorCard = ({ name, bio, avatar, experience, courses }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-start gap-6">
        <img 
          src={avatar} 
          alt={name} 
          className="w-24 h-24 rounded-full object-cover border-2 border-blue-100"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{bio}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span>{experience}</span>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="h-5 w-5 text-blue-500" />
              <span>{courses}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;