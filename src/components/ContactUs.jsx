import React from 'react';
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react'; // Added Mail, Clock

// Helper component for section titles for consistency (same as in AboutUs)
const SectionTitle = ({ children }) => (
  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 relative inline-block">
    {children}
    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-amber-500 transform translate-y-2"></span>
  </h2>
);

// Card component for reusability
const InfoCard = ({ icon, title, children, animationDelay }) => (
  <div
    className="bg-white shadow-xl rounded-xl p-6 lg:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl custom-pop-in flex flex-col items-start"
    style={{ animationDelay }}
  >
    <div className="flex items-center text-amber-600 mb-4">
      {icon}
      {title && <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 ml-3">{title}</h3>}
    </div>
    <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-2 w-full">
        {children}
    </div>
  </div>
);


const ContactUs = () => {
  const locations = [
    {
      title: 'Virar Office',
      icon: <Building size={28} className="flex-shrink-0" />,
      address: 'E/403, Poonam Orchid, Yashwant Nagar, Virar West, Palghar - 401303, Thane, Maharashtra, India',
      phone: '+91 9168948474',
    },
    {
      title: 'Vasai Office',
      icon: <Building size={28} className="flex-shrink-0" />,
      address: 'Building No. 3, Bhoomi Ind. Estate, Gala No.100, Sativali Rd, Waliv Phata, Vasai East, Vasai-Virar, Maharashtra - 401208',
      phone: '+91 86929 70696',
    },
  ];

  const emailContacts = [
    { label: 'General Inquiries', email: 'singhdeepak@whitelightenterprises.in' },
    { label: 'Product Questions', email: 'info@whitelightenterprises.in' },
    { label: 'Sales', email: 'sales@whitelightenterprises.in' },
  ];

  const phoneNumbers = [
    { label: 'General Contact', number: '+91 8692948474'},
    { label: 'Virar Office Contact', number: '+91 9168948474'},
    { label: 'Vasai Office Contact', number: '+91 8692970696'},
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-100 text-gray-700 min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-4 py-16 lg:w-10/12 xl:w-9/12">
        <header className="text-center mb-16 custom-fade-in-down">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-amber-600 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Thank you for your interest in Whitelight Enterprises! We’re here to assist you with any questions, product inquiries, or lighting solutions you may need.
          </p>
        </header>

        {/* Combined Grid for Location and Contact Details */}
        <section className="mb-16 custom-fade-in-up">
          <div className="text-center mb-10">
            <SectionTitle>Get in Touch</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Location Cards */}
            {locations.map((location, index) => (
              <InfoCard
                key={`loc-${index}`}
                icon={location.icon}
                title={location.title}
                animationDelay={`${index * 100}ms`}
              >
                <div className="flex items-start mb-2">
                    <MapPin size={20} className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <p>{location.address}</p>
                </div>
                <div className="flex items-center">
                    <Phone size={20} className="text-amber-500 mr-2 flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="hover:text-amber-700 transition-colors">{location.phone}</a>
                </div>
              </InfoCard>
            ))}

            {/* Email Card */}
            <InfoCard
              icon={<Mail size={32} />}
              title="Email Us"
              animationDelay={`${locations.length * 100}ms`}
            >
              {emailContacts.map((email, idx) => (
                <p key={`email-${idx}`} className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-800 mr-1">{email.label}:</span>
                  <a href={`mailto:${email.email}`} className="text-amber-600 hover:text-amber-800 transition-colors break-all">{email.email}</a>
                </p>
              ))}
            </InfoCard>

            {/* Phone Numbers Card */}
            <InfoCard
              icon={<Phone size={32} />}
              title="Call Us"
              animationDelay={`${(locations.length + 1) * 100}ms`}
            >
              {phoneNumbers.map((phone, idx) => (
                <p key={`phone-${idx}`} className="flex items-center">
                  <span className="font-semibold text-gray-800 mr-1">{phone.label}:</span>
                  <a href={`tel:${phone.number}`} className="text-amber-600 hover:text-amber-800 transition-colors">{phone.number}</a>
                </p>
              ))}
            </InfoCard>

            {/* Business Hours Card */}
            <InfoCard
              icon={<Clock size={32} />}
              title="Business Hours"
              animationDelay={`${(locations.length + 2) * 100}ms`}
            >
              <p>
                <span className="font-semibold text-gray-800">Monday - Saturday:</span> 9:00 AM - 6:00 PM
              </p>
              <p>
                <span className="font-semibold text-gray-800">Sunday:</span> Closed
              </p>
            </InfoCard>
          </div>
        </section>

        {/* Optional: Map Section (Placeholder) */}
        {/*
        <section className="mb-16 custom-fade-in-up">
          <div className="text-center mb-10">
            <SectionTitle>Find Us On Map</SectionTitle>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-4 h-96 custom-pop-in" style={{ animationDelay: `${(locations.length + 3) * 100}ms` }}>
            {/* Replace with your Google Maps embed code or a map component */}
        {/*    <p className="text-center text-gray-500 flex items-center justify-center h-full">
              Google Maps Embed Placeholder
            </p>
          </div>
        </section>
        */}

      </div>
    </div>
  );
};

export default ContactUs;