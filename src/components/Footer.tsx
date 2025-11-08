import { MessageCircle, Mail, Phone, Twitter, Linkedin, Instagram} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="bg-gray-900 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Your pet deserves premium care
            </h2>
            <p className="text-gray-300 mb-6">Book your first service today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-teal"><a href="https://wa.me/918921761269?text=Hii%2C%20I'm%20a%20pet%20parent%20and%20I'm%20interested%20in%20booking%20a%20service%20through%20PetGo." target="_blank" class="btn">
  Book Now
</a>
</button>
              <button className="btn-outline border-white text-white hover:bg-gray-800">
                <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSfj7Qf5kneydsZO-klCu_rv8qR4ZWfdBredjCivs0OT1dgT8A/viewform?usp=dialog" 
  target="_blank" 
  rel="noopener noreferrer" 
  class="btn-join"
>
  Join Us
</a>

              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="blogo.png" alt="" />
            </div>
            <p className="text-gray-400 text-sm">Premium pet care on demand</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              At PetCare Circle, our mission is simple — to make professional pet care easy, reliable, and accessible. We partner only with trusted vets, groomers, and trainers so your pet receives the care they truly deserve. Your pets are family — and we treat them that way.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Founder</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-white text-lg mb-3">Aayush Singh</p>
                <div className="flex items-center gap-3 mb-4">
                  <a 
                    href="https://linkedin.com/in/aayussingh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://instagram.com/aayussingh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://instagram.com/aaushsingh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@petgo.in" className="hover:text-teal-400">
                    hello@petgo.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+91987654300" className="hover:text-teal-400">
                    +91 987654000
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <a href="https://wa.me/28229" className="hover:text-teal-400">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2025 PetGo - Designed by Somatic Webs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}