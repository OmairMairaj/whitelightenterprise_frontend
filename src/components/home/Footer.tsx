import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiGlobe, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const productCategories = [
        { title: 'Commercial LED', items: 'Cob Spotlight, Gimbal & Zoom Downlight' },
        { title: 'Panel Lights', items: 'Track, Concealed, Surface, Wall Light, LED Strip, 2x2' },
        { title: 'Outdoor Lights', items: 'Up/Down Wall Light, Street, Flood Light, Highbay' }
    ];

    const whyChooseUsPoints = [
        "Premium Quality Products",
        "Custom Lighting Solutions",
        "Advanced Manufacturing",
        "Timely Delivery & Support",
        "Expertise in LED Tech"
    ];

    const contactDetails = [
        { icon: FiGlobe, text: 'whitelightenterprises.in', href: 'http://whitelightenterprises.in', type: 'link' },
        { icon: FiMail, text: 'info@whitelightenterprises.in', href: 'mailto:info@whitelightenterprises.in', type: 'link' },
        { icon: FiPhone, text: '+91 86929 70696', href: 'tel:+918692970696', type: 'tel' },
        { icon: FiPhone, text: '+91 91689 48474', href: 'tel:+919168948474', type: 'tel' },
    ];

    const officeAddresses = [
        { name: 'Virar Office', details: 'E/403, Poonam Orchid, Yashwant Nagar, Virar West, Palghar - 401303.' },
        { name: 'Vasai Office', details: 'Bldg No. 3, Bhoomi Ind. Estate, Gala No.100, Sativali Rd, Waliv Phata, Vasai East - 401208.' }
    ];

    const socialLinks = [
        { icon: FaFacebookF, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
        { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
        { icon: FaWhatsapp, href: 'https://wa.me/918692970696', label: 'WhatsApp', color: 'hover:text-green-500' }
    ];

    return (
        // Added overflow-x-hidden to the main footer to prevent horizontal scroll at the root level if all else fails
        // but the goal is to fix it within the container.
        <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 border-t border-slate-700/80 overflow-x-hidden">
            {/* Max width for the container and centering it */}
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Grid layout:
                    - 1 column on smallest screens (default)
                    - 2 columns on small screens (sm:)
                    - 4 columns on large screens (lg:)
                */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-10 md:mb-12">

                    {/* Column 1: Company Info */}
                    {/* On sm screens, this will take full width of its grid cell (which is 1 of 2 cols)
                        On lg screens, this will also take 1 of 4 cols.
                        If you want it to span more on md, use md:col-span-X
                    */}
                    <div className="lg:col-span-1 sm:col-span-2"> {/* On small screens, it spans 2 columns, effectively taking full width if sm:grid-cols-2 */}
                        {/* Corrected logic: For sm:grid-cols-2, this will be one of the two.
                                                                    For lg:grid-cols-4, it will be one of the four.
                                                                    If we want company info to be wider on medium screens than other columns,
                                                                    we need a md breakpoint.
                                                                    Let's simplify: it takes 1 logical column in the current grid setup.
                                                                */}
                        <img
                            src="/pictures/navlogo.png"
                            alt="Whitelight Enterprises Logo"
                            className="h-14 mb-4 bg-white/10 p-1.5 rounded-md shadow-md"
                        />
                        {/* Added break-words to help long text wrap better */}
                        <p className='text-sm text-slate-400 leading-relaxed break-words'>
                            Whitelight Enterprises – Your Trusted Partner for Premium LED Lighting Solutions.
                            Specializing in innovative and energy-efficient lighting for all applications.
                        </p>
                    </div>

                    {/* Column 2: Product Range */}
                    <div>
                        <h3 className="text-md font-semibold text-slate-100 mb-5 uppercase tracking-wide">Product Range</h3>
                        <ul className='text-sm space-y-3'>
                            {productCategories.map(category => (
                                <li key={category.title}>
                                    <strong className='font-medium text-slate-200 block'>{category.title}:</strong>
                                    {/* Added break-words */}
                                    <span className="text-slate-400 text-xs leading-snug block break-words">{category.items}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Why Choose Us */}
                    <div>
                        <h3 className="text-md font-semibold text-slate-100 mb-5 uppercase tracking-wide">Why Choose Us?</h3>
                        <ul className='text-sm space-y-2.5'>
                            {whyChooseUsPoints.map(point => (
                                <li key={point} className="flex items-start">
                                    <svg className="w-4 h-4 mr-2 mt-0.5 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span className="text-slate-400 break-words">{point}</span> {/* Added break-words */}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Section */}
                    <div>
                        <h3 className="text-md font-semibold text-slate-100 mb-5 uppercase tracking-wide">Get in Touch</h3>
                        <div className='text-sm space-y-3'>
                            {contactDetails.map((contact, index) => (
                                <a
                                    key={index}
                                    href={contact.href}
                                    target={contact.type === 'link' ? '_blank' : undefined}
                                    rel={contact.type === 'link' ? 'noopener noreferrer' : undefined}
                                    className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors"
                                >
                                    <contact.icon className="w-4 h-4 mr-2.5 flex-shrink-0 text-cyan-500" />
                                    {/* Added min-w-0 to allow text to truncate/wrap within flex item */}
                                    <span className="truncate min-w-0">{contact.text}</span>
                                </a>
                            ))}
                            {officeAddresses.map((office, index) => (
                                <div key={index} className="flex items-start pt-1">
                                    <FiMapPin className="w-4 h-4 mr-2.5 mt-0.5 flex-shrink-0 text-cyan-500" />
                                    <span className="text-slate-400 min-w-0"> {/* Added min-w-0 */}
                                        <strong className="block text-slate-200 font-medium">{office.name}:</strong>
                                        {/* Added break-words */}
                                        <span className="block text-xs leading-snug break-words">{office.details}</span>
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map(social => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    title={social.label}
                                    className={`text-slate-500 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-slate-700/60 text-center text-xs text-slate-500">
                    <p>© {currentYear} Whitelight Enterprises. All rights reserved.</p>
                    {/* <p className="mt-1">Designed & Developed with <span className="text-red-500 animate-pulse">❤️</span></p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;