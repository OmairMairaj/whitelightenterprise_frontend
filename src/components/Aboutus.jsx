import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800 min-h-screen">
      <div className="ontainer mx-auto   py-12 lg:w-8/12">
        <header className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl font-extrabold text-blue-700">About Us</h1>
          <p className="text-lg mt-4 text-gray-600">
            Welcome to Whitelight Enterprises, your trusted partner in premium lighting solutions. We are a renowned Manufacturer and Trader of a wide range of high-quality lighting products, offering innovative and energy-efficient solutions for various sectors. From residential to commercial, industrial to decorative, we have the expertise and product range to meet all your lighting needs.
          </p>
        </header>

        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">What We Offer</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Street Lights & Flood Lights',
              'Ceiling Chandeliers & Hanging Lights',
              'Downlights, Spotlights & Track Lights',
              'Fancy Wall Lamps & Foot Lamps',
              'LED Lighting Solutions (SMD, High Power, OLED)',
              'Garden & Landscape Lights',
              'Integrated Post-top Lights & Pole Designs',
              'Heavy-duty Industrial Lights & Highbays',
              'Customized Solutions for Architectural & Commercial Lighting',
            ].map((item, index) => (
              <li
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex items-center gap-4"
              >
                <span className="text-blue-600 text-2xl">✔</span>
                <p className="text-gray-700 font-medium">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'High-Quality Products',
                description: 'We source and manufacture only premium-grade products to ensure durability and high performance.',
              },
              {
                title: 'Innovative Designs',
                description: 'Our cutting-edge designs are crafted with the latest technology to deliver exceptional lighting experiences.',
              },
              {
                title: 'Customization',
                description: 'We offer a range of customizable solutions to suit your specific requirements.',
              },
              {
                title: 'Customer-Centric Approach',
                description: 'Your satisfaction is our top priority. We are committed to providing exceptional service from consultation to installation.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start gap-2"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-fade-in-up">

          <h2 className="text-3xl font-bold text-gray-700 mb-6">Our Locations</h2>
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{location.title}</h3>
                <p className="text-gray-600 mb-2">{location.address}</p>
                <p className="text-blue-600 font-medium">Phone: {location.phone}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="animate-fade-in-up my-10">
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

export default AboutUs;
