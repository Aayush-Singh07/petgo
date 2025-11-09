import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { services } from '../data/services';
import { useEffect } from 'react';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/" className="text-teal-600 hover:text-teal-700 font-medium">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-teal-500 to-teal-600 py-12 md:py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#services"
            className="inline-flex items-center text-teal-100 hover:text-white font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>

          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="text-teal-100 text-sm font-medium mb-2">{service.subtitle}</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">{service.title}</h1>
              <p className="text-xl text-teal-100">{service.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Service</h2>
              <div className="prose prose-lg max-w-none">
                {service.fullDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-teal-600" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Options</h3>
              <div className="space-y-4">
                {service.pricingTiers.map((tier, index) => (
                  <div key={index} className="border-l-4 border-teal-500 pl-4">
                    <h4 className="text-lg font-bold text-gray-900">{tier.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{tier.description}</p>
                    <p className="text-2xl font-bold text-teal-600">{tier.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {service.addOns.length > 0 && (
              <div className="bg-amber-50 rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Add-On Options</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.addOns.map((addon, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-amber-200">
                      <h4 className="font-bold text-gray-900 mb-1">{addon.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{addon.description}</p>
                      <p className="text-lg font-bold text-amber-600">{addon.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gray-50 rounded-lg p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose PETGO?</h3>
                <ul className="space-y-3">
                  {service.whyChoose.map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-teal-600" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  "Peace of mind for you, luxury care for your pet."
                </p>
              </div>

              <div className="space-y-3">
                <button className="btn-teal w-full">Book This Service</button>
                <button className="btn-outline w-full">Contact Us for Details</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Give Your Pet the Best Care?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about how PETGO can support your pet's health and happiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-teal">Get Started</button>
            <button className="btn-outline">Schedule a Call</button>
          </div>
        </div>
      </section>
    </div>
  );
}
