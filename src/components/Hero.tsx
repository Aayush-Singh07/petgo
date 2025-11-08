export function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Pet care,<br />on the go.
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Book grooming, vet consultation & pet services with one tap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-teal"><a href="https://wa.me/918921761269?text=Hii%2C%20I'm%20a%20pet%20parent%20and%20I'm%20interested%20in%20booking%20a%20service%20through%20PetGo." target="_blank" class="btn">
  Book Now
</a>
</button>
              <button className="btn-outline">Share Your Experience</button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src="hero.png"
                alt="Happy Golden Retriever"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
