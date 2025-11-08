import React, { useState } from 'react';
import { Home, Heart, Scissors, ShoppingBag, CheckCircle, PawPrint, ArrowLeft, Check } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Pet Boarding & Night Stay',
    subtitle: 'Stay',
    description: 'Give your pet a home away from home with our premium boarding facilities. Our trained staff ensures your furry friend receives personalized attention, comfortable accommodations, and plenty of playtime while you\'re away.',
    features: [
      '24/7 supervised care by trained professionals',
      'Spacious, climate-controlled rooms',
      'Regular exercise and playtime sessions',
      'Customized feeding schedules',
      'Daily photo/video updates to pet parents',
      'Medical care available on-site'
    ],
    price: 'Starting from ₹800/night'
  },
  {
    icon: Heart,
    title: 'Vet Appointments & Tele-Vet',
    subtitle: 'Consultation',
    description: 'Access professional veterinary care from the comfort of your home. Our certified veterinarians provide comprehensive health check-ups, consultations, and emergency care whenever your pet needs it.',
    features: [
      'Home visit appointments available',
      '24/7 tele-vet consultation support',
      'Vaccination and preventive care',
      'Health diagnostics and treatment',
      'Emergency medical services',
      'Follow-up care and monitoring'
    ],
    price: 'Starting from ₹500/consultation'
  },
  {
    icon: Scissors,
    title: 'Grooming',
    subtitle: 'Services',
    description: 'Pamper your pet with our professional grooming services. From basic baths to full spa treatments, we ensure your pet looks and feels their absolute best with premium products and expert care.',
    features: [
      'Professional bath and blow-dry',
      'Breed-specific haircuts and styling',
      'Nail trimming and paw care',
      'Ear cleaning and dental care',
      'Skin and coat treatments',
      'Premium grooming products used'
    ],
    price: 'Starting from ₹600/session'
  },
  {
    icon: PawPrint,
    title: 'Specialized Training',
    subtitle: 'Services',
    description: 'Help your pet become their best self with our expert training programs. Our certified trainers use positive reinforcement techniques to address behavioral issues and teach essential commands.',
    features: [
      'Obedience training programs',
      'Behavioral correction sessions',
      'Puppy socialization classes',
      'Advanced command training',
      'Customized training plans',
      'One-on-one and group sessions available'
    ],
    price: 'Starting from ₹1,500/package'
  },
  {
    icon: ShoppingBag,
    title: 'Food, Treats & Accessories',
    subtitle: 'Delivery',
    description: 'Shop premium pet food, treats, and accessories delivered right to your doorstep. We carefully curate products from trusted brands to ensure quality nutrition and the best supplies for your pet.',
    features: [
      'Wide selection of premium brands',
      'Nutritionist-approved food options',
      'Same-day delivery available',
      'Subscription plans with discounts',
      'Toys, beds, and accessories',
      'Expert guidance on product selection'
    ],
    price: 'Free delivery on orders above ₹999'
  },
  {
    icon: CheckCircle,
    title: 'Weekly Pet Well-Being',
    subtitle: 'Check-ins',
    description: 'Regular wellness checks to keep your pet healthy and happy. Our team monitors your pet\'s health, provides preventive care advice, and ensures they maintain optimal well-being throughout their life.',
    features: [
      'Weekly health monitoring visits',
      'Weight and vitality tracking',
      'Behavioral assessment',
      'Preventive care recommendations',
      'Personalized wellness reports',
      'Early detection of health issues'
    ],
    price: 'Starting from ₹299/week'
  },
];

function ServiceDetail({ service, onBack }) {
  const Icon = service.icon;

  return (
    <section className="bg-gray-50 py-12 md:py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-teal-600 hover:text-teal-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-teal-500 p-8 md:p-12 text-white">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <Icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
                <p className="text-teal-100 text-lg mt-1">{service.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-teal-600" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pricing</h3>
              <p className="text-2xl font-bold text-teal-600">{service.price}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-teal flex-1">Book This Service</button>
              <button className="btn-outline flex-1">Contact Us for Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const [selectedService, setSelectedService] = useState(null);

  if (selectedService) {
    return (
      <ServiceDetail 
        service={selectedService} 
        onBack={() => {
          setSelectedService(null);
          // Scroll to services section after a brief delay
          setTimeout(() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }} 
      />
    );
  }

  return (
    <section id="services" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">WHAT WE OFFER</h2>
        <p className="section-subtitle">Premium on-demand services for pet parents</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedService(service);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="card-base p-8 text-center hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-teal-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500">{service.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}