const reviews = [
  {
    name: "Rahul Sharma",
    review: "Excellent AC repair service! Fixed in no time.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    review: "Very professional & affordable. Highly recommend!",
    rating: 4,
  },
  {
    name: "Amit Singh",
    review: "Quick response and great service!",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    review: "Good experience, but a little delay in service.",
    rating: 3,
  },
  {
    name: "Rajesh Kumar",
    review: "Best AC maintenance service in town!",
    rating: 5,
  },
];

function ReviewCard({ name, review, rating }) {
  return (
    <div className="border p-6 rounded-lg shadow-lg bg-white">
      {/* User Info */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
          {name.charAt(0)} {/* First letter of name as avatar */}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          {/* Star Ratings */}
          <div className="text-yellow-500 text-sm">{"⭐".repeat(rating)}</div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 italic">"{review}"</p>
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center">Customer Reviews</h1>
      <p className="text-center text-gray-600 mt-2">
        See what our satisfied customers have to say about our services.
      </p>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
}
