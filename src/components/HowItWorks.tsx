export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Choose a service',
    },
    {
      number: 2,
      title: 'Book on WhatsApp',
    },
    {
      number: 3,
      title: 'A verified PetGo partner arrives',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">HOW PETGO WORKS?</h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-teal-500 flex items-center justify-center bg-white mb-6 relative z-10">
                  <span className="text-2xl font-bold text-teal-500">{step.number}</span>
                </div>
                <div className="card-base p-6 text-center w-full">
                  <p className="text-gray-700 font-medium">{step.title}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-teal-300 -z-10 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:block absolute left-0 right-0 top-1/3 h-0.5 bg-teal-200 -z-20" style={{ top: '33%' }}></div>
      </div>
    </section>
  );
}
