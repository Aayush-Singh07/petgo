import { Link } from 'react-router-dom';
import { services } from '../data/services';

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">WHAT WE OFFER</h2>
        <p className="section-subtitle">Premium on-demand services for pet parents</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="card-base p-8 text-center hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-1 no-underline"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-teal-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500">{service.subtitle}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}