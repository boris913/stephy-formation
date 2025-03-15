import RatingStars from './RatingStars';

const ReviewList = ({ reviews }) => {
  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-900">{review.user}</h4>
            <RatingStars rating={review.rating} />
          </div>
          <p className="text-gray-600">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;