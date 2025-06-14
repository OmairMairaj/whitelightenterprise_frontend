import React from 'react';
import { CheckCircle2, Zap, ShieldCheck, UsersRound, Palette, MapPin, Phone, Building } from 'lucide-react';

// Helper component for section titles for consistency
const SectionTitle = ({ children }) => (
  <h2 className="text-4xl font-bold text-gray-800 mb-8 relative inline-block">
    {children}
    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-amber-500 transform translate-y-2"></span>
  </h2>
);

const AboutUs = () => {
  const whatWeOfferItems = [
    { text: 'Street Lights & Flood Lights', icon: <Building size={28} className="text-amber-600" /> },
    { text: 'Ceiling Chandeliers & Hanging Lights', icon: <Zap size={28} className="text-amber-600" /> },
    { text: 'Downlights, Spotlights & Track Lights', icon: <CheckCircle2 size={28} className="text-amber-600" /> },
    { text: 'Fancy Wall Lamps & Foot Lamps', icon: <Palette size={28} className="text-amber-600" /> },
    { text: 'LED Lighting Solutions (SMD, High Power, OLED)', icon: <Zap size={28} className="text-amber-600" /> },
    { text: 'Garden & Landscape Lights', icon: <CheckCircle2 size={28} className="text-amber-600" /> },
    { text: 'Integrated Post-top Lights & Pole Designs', icon: <Building size={28} className="text-amber-600" /> },
    { text: 'Heavy-duty Industrial Lights & Highbays', icon: <ShieldCheck size={28} className="text-amber-600" /> },
    { text: 'Customized Solutions for Architectural & Commercial Lighting', icon: <Palette size={28} className="text-amber-600" /> },
  ];

  const whyChooseUsItems = [
    {
      title: 'Premium Quality Products',
      description: 'We source and manufacture only premium-grade products to ensure durability and high performance.',
      icon: <ShieldCheck size={32} className="text-amber-500 mb-3" />,
    },
    {
      title: 'Innovative & Modern Designs',
      description: 'Our cutting-edge designs are crafted with the latest technology to deliver exceptional lighting experiences.',
      icon: <Zap size={32} className="text-amber-500 mb-3" />,
    },
    {
      title: 'Tailored Customization',
      description: 'We offer a range of customizable solutions to suit your specific requirements and vision.',
      icon: <Palette size={32} className="text-amber-500 mb-3" />,
    },
    {
      title: 'Customer-Centric Approach',
      description: 'Your satisfaction is our top priority. We are committed to providing exceptional service from consultation to installation.',
      icon: <UsersRound size={32} className="text-amber-500 mb-3" />,
    },
  ];

  const locations = [
    {
      title: 'Virar Office',
      address: 'E/403, Poonam Orchid, Yashwant Nagar, Virar West, Palghar - 401303, Thane, Maharashtra, India',
      phone: '+91 9168948474',
    },
    {
      title: 'Vasai Office',
      address: 'Building No. 3, Bhoomi Ind. Estate, Gala No.100, Sativali Rd, Waliv Phata, Vasai East, Vasai-Virar, Maharashtra - 401208',
      phone: '+91 86929 70696',
    },
  ];


  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-100 text-gray-700 min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4 py-16 lg:w-9/12 xl:w-8/12">
        <header className="text-center mb-16 custom-fade-in-down"> {/* CHANGED */}
          <h1 className="text-5xl lg:text-6xl font-extrabold text-amber-600 tracking-tight">
            About WhiteLight
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to Whitelight Enterprises, your trusted partner in premium lighting solutions. We are a renowned Manufacturer and Trader of a wide range of high-quality lighting products, offering innovative and energy-efficient solutions for various sectors. From residential to commercial, industrial to decorative, we have the expertise and product range to meet all your lighting needs.
          </p>
        </header>

        <section className="mb-16 custom-fade-in-up"> {/* CHANGED */}
          <div className="text-center">
             <SectionTitle>What We Offer</SectionTitle>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {whatWeOfferItems.map((item, index) => (
              <li
                key={index}
                // Tailwind classes for styling, custom class for animation
                className="bg-white shadow-xl rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-start gap-4 custom-pop-in" // CHANGED
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <p className="text-gray-700 font-medium text-base">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16 custom-fade-in-up"> {/* CHANGED */}
          <div className="text-center">
            <SectionTitle>Why Choose Us?</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {whyChooseUsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center custom-pop-in" // CHANGED
                style={{ animationDelay: `${(whatWeOfferItems.length + index) * 100}ms` }}
              >
                {item.icon}
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 custom-fade-in-up"> {/* CHANGED */}
           <div className="text-center">
            <SectionTitle>Our Locations</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl custom-pop-in" // CHANGED
                style={{ animationDelay: `${(whatWeOfferItems.length + whyChooseUsItems.length + index) * 100}ms` }}
              >
                <div className="flex items-center mb-3">
                  <MapPin size={28} className="text-amber-600 mr-3 flex-shrink-0" />
                  <h3 className="text-2xl font-semibold text-gray-800">{location.title}</h3>
                </div>
                <p className="text-gray-600 mb-3 leading-relaxed text-base">{location.address}</p>
                <div className="flex items-center text-amber-700 font-medium">
                  <Phone size={20} className="mr-2" />
                  <span>{location.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="custom-fade-in-up text-center bg-white shadow-xl rounded-xl p-8 transform transition-all duration-300 hover:shadow-2xl"> {/* CHANGED */}
          <SectionTitle>Get In Touch</SectionTitle>
          <div className="mt-6 text-gray-600 space-y-3">
            <p className="text-lg flex items-center justify-center">
              <Phone size={22} className="text-amber-600 mr-2"/>
              <span className="font-semibold text-gray-800 mr-1">General Inquiries:</span> +91 8692948474
            </p>
            <p className="text-lg flex items-center justify-center">
              <Phone size={22} className="text-amber-600 mr-2"/>
              <span className="font-semibold text-gray-800 mr-1">Virar Office:</span> +91 9168948474
            </p>
            <p className="text-lg flex items-center justify-center">
             <Phone size={22} className="text-amber-600 mr-2"/>
              <span className="font-semibold text-gray-800 mr-1">Vasai Office:</span> +91 8692970696
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;