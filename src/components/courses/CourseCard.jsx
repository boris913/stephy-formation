import { motion } from 'framer-motion';
import Button from './../ui/Button';
import RatingStars from './../data-display/RatingStars';

const CourseCard = ({ 
  title, 
  description, 
  price, 
  rating, 
  duration,
  onLearnMore 
}) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
    >
      <div className="aspect-video bg-gray-100 relative">
        {/* Placeholder pour l'image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <RatingStars rating={rating} />
          <span className="text-sm text-gray-500">{duration}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 line-clamp-2 mb-4">{description}</p>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">€{price}</span>
          <Button variant="outline" onClick={onLearnMore}>
            Détails
          </Button>
        </div>
      </div>
    </motion.article>
  );
};

export default CourseCard;