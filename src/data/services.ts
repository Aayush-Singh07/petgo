import { Home, Heart, Scissors, ShoppingBag, CheckCircle, PawPrint, LucideIcon } from 'lucide-react';

export interface PricingTier {
  name: string;
  description: string;
  price: string;
}

export interface AddOnOption {
  name: string;
  description: string;
  price: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  slug: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: string[];
  price: string;
  heroImage: string;
  whyChoose: string[];
  pricingTiers: PricingTier[];
  addOns: AddOnOption[];
  fullDescription: string;
}

export const services: Service[] = [
  {
    id: '1',
    icon: Home,
    title: 'Pet Boarding & Night Stay',
    slug: 'pet-boarding',
    subtitle: 'Stay',
    tagline: 'Give your furry friend a home away from home!',
    description: 'Give your pet a home away from home with our premium boarding facilities. Our trained staff ensures your furry friend receives personalized attention, comfortable accommodations, and plenty of playtime while you\'re away.',
    features: [
      '24/7 supervised care by trained professionals',
      'Spacious, climate-controlled rooms',
      'Regular exercise and playtime sessions',
      'Customized feeding schedules',
      'Daily photo/video updates to pet parents',
      'Medical care available on-site'
    ],
    price: 'Starting from ₹800/night',
    heroImage: 'A happy dog/cat in a cozy boarding room or play area',
    whyChoose: [
      'Secure, monitored environment',
      'Experienced pet caretakers',
      'Real-time updates to owners',
      'Personalized attention & dietary care'
    ],
    pricingTiers: [
      {
        name: 'Daycare (8 hours)',
        description: 'Playtime, feeding, basic care, monitored by trained staff',
        price: '₹699/day'
      },
      {
        name: 'Boarding (24 hours)',
        description: 'Full-day stay, feeding, exercise, cuddles, personal attention',
        price: '₹999/night'
      }
    ],
    addOns: [
      {
        name: 'Personalized Diet',
        description: 'Bring your pet\'s favorite food or special meals',
        price: '₹299/day'
      },
      {
        name: 'Extra Playtime',
        description: 'One-on-one play session with trainer',
        price: '₹199/session'
      },
      {
        name: 'Grooming Refresh',
        description: 'Bath & basic grooming during boarding',
        price: '₹499'
      }
    ],
    fullDescription: 'At PETGO, we understand how much your pet means to you. Our Boarding & Daycare services are designed to keep your pets happy, safe, and comfortable while you\'re away. Every stay is more than just supervision – it\'s a full experience of love, care, and personalized attention.\n\nOur trained caretakers ensure:\n• Proper feeding according to your pet\'s diet\n• Playtime and socialization with other pets (if your pet enjoys it)\n• Daily exercise and mental stimulation\n• Hygiene and grooming maintenance\n• Real-time updates with photos and videos for peace of mind\n\nWhether it\'s a single day or an extended stay, PETGO makes sure your pet feels right at home.'
  },
  {
    id: '2',
    icon: Heart,
    title: 'Vet Appointments & Tele-Vet',
    slug: 'vet-appointments',
    subtitle: 'Consultation',
    tagline: 'Professional veterinary care at your fingertips',
    description: 'Access professional veterinary care from the comfort of your home. Our certified veterinarians provide comprehensive health check-ups, consultations, and emergency care whenever your pet needs it.',
    features: [
      'Home visit appointments available',
      '24/7 tele-vet consultation support',
      'Vaccination and preventive care',
      'Health diagnostics and treatment',
      'Emergency medical services',
      'Follow-up care and monitoring'
    ],
    price: 'Starting from ₹500/consultation',
    heroImage: 'A veterinarian examining a pet with advanced medical equipment',
    whyChoose: [
      'Certified, experienced veterinarians',
      'Home visit convenience',
      '24/7 emergency support available',
      'Prescription delivery to your door'
    ],
    pricingTiers: [
      {
        name: 'Tele-Vet Consultation',
        description: 'Video consultation with a licensed veterinarian',
        price: '₹500'
      },
      {
        name: 'Home Visit Examination',
        description: 'In-home physical examination and consultation',
        price: '₹999'
      },
      {
        name: 'Emergency Medical Service',
        description: 'Urgent care with home visit or clinic visit',
        price: '₹1,499'
      }
    ],
    addOns: [
      {
        name: 'Vaccination Package',
        description: 'Complete vaccination with follow-up records',
        price: '₹599'
      },
      {
        name: 'Blood Test & Diagnostics',
        description: 'Lab tests with detailed health report',
        price: '₹799'
      },
      {
        name: 'Prescription Delivery',
        description: 'Medications delivered to your home',
        price: 'Free with consultation'
      }
    ],
    fullDescription: 'Healthcare made accessible. PETGO\'s veterinary services bring professional medical care directly to your pet. Whether you need a routine check-up, vaccination, or emergency consultation, our network of certified veterinarians is available 24/7.\n\nOur veterinary services include:\n• Complete health assessments and diagnostics\n• Vaccination and preventive care programs\n• Treatment for acute and chronic conditions\n• Emergency medical response\n• Prescription management and delivery\n• Detailed health records and follow-up care\n\nYour pet\'s health is our priority. We ensure every consultation is thorough, professional, and caring.'
  },
  {
    id: '3',
    icon: Scissors,
    title: 'Grooming',
    slug: 'grooming',
    subtitle: 'Services',
    tagline: 'Pamper your pet with professional grooming',
    description: 'Pamper your pet with our professional grooming services. From basic baths to full spa treatments, we ensure your pet looks and feels their absolute best with premium products and expert care.',
    features: [
      'Professional bath and blow-dry',
      'Breed-specific haircuts and styling',
      'Nail trimming and paw care',
      'Ear cleaning and dental care',
      'Skin and coat treatments',
      'Premium grooming products used'
    ],
    price: 'Starting from ₹600/session',
    heroImage: 'A beautifully groomed dog or cat looking refreshed and happy',
    whyChoose: [
      'Certified professional groomers',
      'Breed-specific expertise',
      'Premium, pet-safe products',
      'Stress-free grooming experience'
    ],
    pricingTiers: [
      {
        name: 'Basic Grooming',
        description: 'Bath, dry, nail trimming, and ear cleaning',
        price: '₹600'
      },
      {
        name: 'Standard Grooming',
        description: 'Basic + breed-specific haircut and styling',
        price: '₹999'
      },
      {
        name: 'Premium Spa Package',
        description: 'Full grooming + skin/coat treatment + aromatherapy',
        price: '₹1,499'
      }
    ],
    addOns: [
      {
        name: 'Organic Coat Treatment',
        description: 'Nourishing oil and herbal coat treatment',
        price: '₹299'
      },
      {
        name: 'Nail Art & Polish',
        description: 'Decorative nail design (pet-safe)',
        price: '₹199'
      },
      {
        name: 'Teeth Cleaning',
        description: 'Professional dental cleaning service',
        price: '₹399'
      }
    ],
    fullDescription: 'Your pet deserves to look and feel their absolute best. Our professional grooming services combine expert care with premium, pet-safe products to ensure your furry friend leaves looking fabulous.\n\nWhat\'s included in our grooming services:\n• Thorough bathing with premium shampoos suited to your pet\'s skin type\n• Professional blow-drying and styling\n• Breed-specific haircuts performed by certified groomers\n• Nail trimming, paw pad care, and ear cleaning\n• Optional skin and coat treatments using natural products\n• Calming environment to reduce stress\n\nWhether your pet needs a quick refresh or a complete spa day, we\'ve got them covered.'
  },
  {
    id: '4',
    icon: PawPrint,
    title: 'Specialized Training',
    slug: 'training',
    subtitle: 'Services',
    tagline: 'Help your pet become their best self',
    description: 'Help your pet become their best self with our expert training programs. Our certified trainers use positive reinforcement techniques to address behavioral issues and teach essential commands.',
    features: [
      'Obedience training programs',
      'Behavioral correction sessions',
      'Puppy socialization classes',
      'Advanced command training',
      'Customized training plans',
      'One-on-one and group sessions available'
    ],
    price: 'Starting from ₹1,500/package',
    heroImage: 'A well-trained dog following commands or engaging in training activity',
    whyChoose: [
      'Certified professional trainers',
      'Positive reinforcement methods',
      'Customized training programs',
      'Proven behavioral improvements'
    ],
    pricingTiers: [
      {
        name: 'Puppy Starter Package',
        description: '4 weeks of basic training and socialization (1 session/week)',
        price: '₹1,500'
      },
      {
        name: 'Obedience Program',
        description: '8 weeks of comprehensive training (2 sessions/week)',
        price: '₹2,999'
      },
      {
        name: 'Advanced Behavior Correction',
        description: '12 weeks intensive program with personalized plans',
        price: '₹4,999'
      }
    ],
    addOns: [
      {
        name: 'One-on-One Coaching',
        description: 'Private training session with certified trainer',
        price: '₹499/session'
      },
      {
        name: 'Owner Guidance Class',
        description: 'Learn how to continue training at home',
        price: '₹299'
      },
      {
        name: 'Aggression Consultation',
        description: 'Specialized behavioral assessment and plan',
        price: '₹799'
      }
    ],
    fullDescription: 'Every pet has incredible potential. Our specialized training programs use positive reinforcement and modern behavioral science to unlock it. Whether you have a new puppy, an adult dog needing behavioral adjustment, or a pet with specific training goals, our certified trainers create personalized programs for success.\n\nOur training approach includes:\n• Assessment of your pet\'s current behavior and learning style\n• Customized training plan tailored to your pet\'s needs\n• Positive reinforcement-based methods proven to work\n• Progress tracking and regular updates\n• Owner education so you can reinforce training at home\n• Ongoing support and guidance\n\nTransform your pet\'s behavior and build a stronger bond through effective, humane training.'
  },
  {
    id: '5',
    icon: ShoppingBag,
    title: 'Food, Treats & Accessories',
    slug: 'shop',
    subtitle: 'Delivery',
    tagline: 'Premium pet supplies delivered to your door',
    description: 'Shop premium pet food, treats, and accessories delivered right to your doorstep. We carefully curate products from trusted brands to ensure quality nutrition and the best supplies for your pet.',
    features: [
      'Wide selection of premium brands',
      'Nutritionist-approved food options',
      'Same-day delivery available',
      'Subscription plans with discounts',
      'Toys, beds, and accessories',
      'Expert guidance on product selection'
    ],
    price: 'Free delivery on orders above ₹999',
    heroImage: 'Premium pet food packages and toys arranged beautifully',
    whyChoose: [
      'Curated premium brands only',
      'Nutritionist-verified products',
      'Fast delivery options',
      'Competitive pricing with subscriptions'
    ],
    pricingTiers: [
      {
        name: 'Single Purchase',
        description: 'Order premium pet supplies as needed',
        price: 'Free delivery above ₹999'
      },
      {
        name: 'Monthly Subscription',
        description: 'Regular deliveries with 15% discount',
        price: 'Starting ₹1,500/month'
      },
      {
        name: 'Bulk Order',
        description: '3+ months prepaid with additional 20% discount',
        price: 'Contact for quote'
      }
    ],
    addOns: [
      {
        name: 'Nutrition Consultation',
        description: 'Personalized diet plan from pet nutritionist',
        price: '₹299'
      },
      {
        name: 'Product Trial Pack',
        description: 'Sample multiple brands before committing',
        price: '₹399'
      },
      {
        name: 'Birthday Special',
        description: 'Special treats and toys for your pet\'s birthday',
        price: '₹599'
      }
    ],
    fullDescription: 'Quality nutrition and supplies make happy, healthy pets. PETGO\'s curated shop brings together the best pet products available, carefully selected by our team of pet nutrition experts and veterinarians.\n\nOur product categories include:\n• Premium dry and wet food from trusted brands\n• Prescription and therapeutic diets\n• Natural and organic treat options\n• Toys for mental stimulation and play\n• Comfortable beds and resting areas\n• Grooming supplies and hygiene products\n• Health supplements and vitamins\n\nEnjoy convenient same-day delivery and save even more with our subscription plans. We make it easy to give your pet the best.'
  },
  {
    id: '6',
    icon: CheckCircle,
    title: 'Weekly Pet Well-Being Check-ins',
    slug: 'wellness-checkins',
    subtitle: 'Check-ins',
    tagline: 'Regular wellness monitoring for optimal pet health',
    description: 'Regular wellness checks to keep your pet healthy and happy. Our team monitors your pet\'s health, provides preventive care advice, and ensures they maintain optimal well-being throughout their life.',
    features: [
      'Weekly health monitoring visits',
      'Weight and vitality tracking',
      'Behavioral assessment',
      'Preventive care recommendations',
      'Personalized wellness reports',
      'Early detection of health issues'
    ],
    price: 'Starting from ₹299/week',
    heroImage: 'A veterinarian performing a wellness check-up on a happy pet',
    whyChoose: [
      'Preventive health monitoring',
      'Early issue detection',
      'Personalized wellness plans',
      'Long-term health tracking'
    ],
    pricingTiers: [
      {
        name: 'Weekly Check-in',
        description: 'One wellness visit per week with monitoring',
        price: '₹299/week'
      },
      {
        name: 'Bi-weekly Monitoring',
        description: 'Two comprehensive checks per month',
        price: '₹599/month'
      },
      {
        name: 'Monthly Premium Plan',
        description: 'Weekly visits + detailed health reports + nutrition guidance',
        price: '₹1,199/month'
      }
    ],
    addOns: [
      {
        name: 'Full Blood Panel',
        description: 'Comprehensive blood work analysis',
        price: '₹899'
      },
      {
        name: 'Behavior Analysis Report',
        description: 'Detailed behavioral assessment document',
        price: '₹399'
      },
      {
        name: 'Nutrition Planning',
        description: 'Custom diet plan based on health metrics',
        price: '₹499'
      }
    ],
    fullDescription: 'Prevention is better than cure. Our weekly wellness check-in program ensures your pet stays healthy throughout their life. Regular monitoring helps catch potential health issues early, maintains optimal weight and vitality, and keeps your pet living their best life.\n\nWhat\'s included in our wellness program:\n• Regular vital signs monitoring (temperature, heart rate, respiration)\n• Weight and body condition tracking\n• Behavioral and emotional assessment\n• Joint and mobility evaluation\n• Coat and skin health observation\n• Nutrition and activity recommendations\n• Detailed wellness reports sent to you\n• Preventive care planning\n\nInvest in your pet\'s long-term health with consistent, professional wellness monitoring.'
  }
];
