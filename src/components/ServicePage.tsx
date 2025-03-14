import { FaPhone, FaWhatsapp, FaCheck, FaClock, FaMapMarkerAlt, FaStar, FaTools, FaShieldAlt, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  videoUrl?: string;
  price: string;
  emergencyInfo?: string;
  areas: string[];
  benefits?: {
    title: string;
    description: string;
    icon: string;
  }[];
  process?: {
    title: string;
    description: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
  testimonials?: {
    name: string;
    location: string;
    text: string;
    rating: number;
  }[];
}

export default function ServicePage({
  title,
  description,
  features,
  imageUrl,
  videoUrl,
  price,
  emergencyInfo = "24/7 Notdienst verfügbar",
  areas,
  benefits = [],
  process = [],
  faq = [],
  testimonials = []
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#003366] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-xl mb-8">{description}</p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:015735989735"
                  className="bg-[#007BFF] hover:bg-[#1a4d80] text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-colors"
                >
                  <FaPhone className="animate-pulse" />
                  <span>Jetzt anrufen</span>
                </a>
                <a 
                  href="https://wa.me/015735989735"
                  className="bg-[#1a4d80] hover:bg-[#007BFF] text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-colors"
                >
                  <FaWhatsapp />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {videoUrl && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center">Unser Service im Überblick</h2>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-8">Unsere Leistungen</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <FaCheck className="text-[#007BFF] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <FaClock className="text-2xl text-[#007BFF]" />
                <div>
                  <h3 className="text-xl font-bold text-[#003366]">24/7 Notdienst</h3>
                  <p className="text-gray-700">{emergencyInfo}</p>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#003366] mb-2">Preise</h3>
                <p className="text-gray-700">{price}</p>
              </div>
              <a 
                href="tel:015735989735"
                className="bg-[#003366] hover:bg-[#007BFF] text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-colors w-full"
              >
                <FaPhone />
                <span>Kostenlos anrufen</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Ihre Vorteile</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-[#007BFF] rounded-full flex items-center justify-center mb-4">
                    <i className={`text-white text-xl ${benefit.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#003366] mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {process.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">So arbeiten wir</h2>
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#007BFF] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#003366] mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Das sagen unsere Kunden</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex text-[#007BFF] mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <div className="text-[#003366] font-semibold">
                    {testimonial.name} aus {testimonial.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faq.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Häufig gestellte Fragen</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {faq.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-[#003366] mb-3">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#003366] mb-8">Einsatzgebiete</h2>
          <div className="flex flex-wrap gap-4">
            {areas.map((area, index) => (
              <Link
                key={index}
                href={`/einsatzgebiete/${area.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center space-x-2 bg-gray-50 hover:bg-[#003366] text-[#003366] hover:text-white px-4 py-2 rounded-full transition-colors"
              >
                <FaMapMarkerAlt />
                <span>{area}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Call Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#003366] text-white py-4 md:hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">24/7 Notdienst</p>
              <p className="text-sm">{emergencyInfo}</p>
            </div>
            <a
              href="tel:015735989735"
              className="bg-[#007BFF] px-4 py-2 rounded-full flex items-center space-x-2"
            >
              <FaPhone />
              <span>Anrufen</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 