import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800 min-h-screen">
      <div className="container mx-auto   py-12 lg:w-8/12">
        <header className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-600">
            Thank you for your interest in Whitelight Enterprises! We’re here to assist you with any questions, product inquiries, or lighting solutions you may need.
          </p>
        </header>

        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
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
            ].map((location, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col gap-2"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{location.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">{location.address}</p>
                <p className="text-blue-600 font-medium">Phone: {location.phone}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">Email</h2>
          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-600">
            <li className="mb-2">
              <span className="font-medium text-gray-800">General Inquiries:</span> singhdeepak@whitelightenterprises.in
            </li>
            <li className="mb-2">
              <span className="font-medium text-gray-800">Product Questions:</span> info@whitelightenterprises.in
            </li>
            <li>
              <span className="font-medium text-gray-800">Sales:</span> sales@whitelightenterprises.in
            </li>
          </ul>
        </section>

        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">Business Hours</h2>
          <p className="text-sm sm:text-base text-gray-600">
            <span className="font-medium text-gray-800">Monday - Saturday:</span> 9:00 AM - 6:00 PM
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            <span className="font-medium text-gray-800">Sunday:</span> Closed
          </p>
        </section>
        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">Contact number</h2>
          <p className="text-sm sm:text-base text-gray-600">
            <span className="font-medium text-gray-800">Contact No:</span> +91 8692948474
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            <span className="font-medium text-gray-800">Virar Office Contact:</span> +91 9168948474
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            <span className="font-medium text-gray-800">Asai Office Contact:</span> +91 8692970696
          </p>
        </section>

     
      </div>
    </div>
  );
};

export default ContactUs;
