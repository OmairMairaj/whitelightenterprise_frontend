import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#f8ede4] text-gray-800 py-10 border-t">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Shop Section */}
                    <div>
                        <img src="pictures/navlogo.png" height="60px" width="70px" />
                        <p className='text-sm mt-2'> Whitelight Enterprises – Your Trusted Partner for Premium LED Lighting Solutions
                            We specialize in the manufacturing and trading of a wide range of high-quality lighting products, including Street Lights, Ceiling Lights, Chandeliers, LED Downlights, Spotlights, Floodlights, and more. With over 5 years of experience, we offer innovative and energy-efficient lighting solutions for commercial, residential, industrial, and architectural applications.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Our Product Range Includes:</h3>
                        <ul className='text-sm flex flex-col gap-2 capitalize'>
                            <li><span className='font-semibold'>Commercial led light:</span> Cob Spotlight , Gimbal Downlight,Zoom Downlight</li>
                            <li><span className='font-semibold'>Pannel Light:</span> Tracklight/Concealed , Titletable-Track/3. Concealed/Surface,Wall Light, Surface Cylinder,Led Strip /Smpss,2x2 Recess/Surface</li>
                            <li><span className='font-semibold'>Graden Light:</span>Up /Down 2.Walllight,Street Light,Flood/Modular 5.Light/Highbay</li>
                            
                            
                           
                        </ul>
                    </div>

                    {/* Policy Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Why Choose Us?
                        </h3>
                        <ul className='text-sm flex flex-col gap-2'>
                            <li>High-Quality Products</li>
                            <li>Custom Lighting Solutions</li>
                            <li>Advanced Manufacturing Techniques</li>
                            <li>Timely Delivery & Support</li>
                            <li>Expertise in LED and Energy-Efficient Technologies</li>

                        </ul>
                    </div>


                    {/* Contact Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Get in Touch:</h3>
                        <div className='text-sm flex flex-col gap-2'>
                            <p>Website : whitelightenterprises.in </p>
                            <p>Email: info@whitelightenterprises.in</p>
                            <p>Phone:   +91 8692970696,  +91 9168948474,+91 8692948474</p>
                            <div>
                                <p>Virar Office: E/403, Poonam Orchid, Yashwant Nagar, Virar West, Palghar - 401303, Thane, Maharashtra, India</p>
                                <p>Vasai Office: Building No. 3, Bhoomi Ind. Estate, Gala No.100, Sativali Rd, Waliv Phata, Vasai East, Vasai-Virar, Maharashtra 401208</p>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <a href="#"><img src="src\components\home\main\socials\facebook.png" alt="Facebook" className="w-8 h-8" /></a>
                            <a href="#"><img src="src\components\home\main\socials\insta.png" alt="Instagram" className="w-8 h-8" /></a>
                            <a href="#"><img src="src\components\home\main\socials\whatsApp.png" alt="Whatsapp" className="w-8 h-8" /></a>
                        </div>
                    </div>


                </div>
                <div className="mt-8 text-center text-sm text-gray-600">
                    © 2025 whitelightenterprises.in, all rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
