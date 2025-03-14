import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const testimonials = [
  {
    stars: 5,
    text: "Super Service! Der Techniker war in 20 Minuten da und hat meine Tür in Sekunden geöffnet – ohne Schäden!",
    location: "Berlin",
    href: "/einsatzgebiete/berlin"
  },
  {
    stars: 5,
    text: "Schnelle Rohrreinigung! Mein Waschbecken war verstopft – innerhalb von 30 Minuten lief alles wieder perfekt.",
    location: "München",
    href: "/einsatzgebiete/muenchen"
  },
  {
    stars: 5,
    text: "Zuverlässig & fair! Der Elektriker hat mein Problem schnell gelöst und alles super erklärt. Sehr empfehlenswert!",
    location: "Frankfurt",
    href: "/einsatzgebiete/frankfurt"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[#007BFF] text-3xl mx-1" />
            ))}
          </div>
          <h2 className="text-4xl font-bold text-[#003366]">
            Das sagen unsere Kunden
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} className="text-[#007BFF] text-xl mr-1" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "{testimonial.text}"
              </p>
              <Link 
                href={testimonial.href}
                className="flex items-center text-[#003366] hover:text-[#007BFF] transition-colors group"
              >
                <FaMapMarkerAlt className="mr-2 group-hover:text-[#007BFF] transition-colors" />
                <span className="font-medium">Kunde aus {testimonial.location}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 