import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mrs. (Laoasai Parent)',
    text: 'Vet visit at home. Smooth and easy',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Jay (Shih Tzu Owner)',
    text: 'Grooming felt premium. Better than pet salons',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Isery (Shih Parent)',
    text: 'Boarding with pickup & drop. Stress-free',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Loved by Pet Parents</h2>
        <p className="section-subtitle">Hear from our early adopters</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-base p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>

              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-teal-500 text-teal-500"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-4 font-medium">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-gray-600">
                – {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
