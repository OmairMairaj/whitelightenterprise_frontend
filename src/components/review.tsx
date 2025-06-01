// import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "../styles/owl.css"; // Import the updated CSS file

const Review: React.FC = () => {
  // Owl Carousel settings
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  };

  return (
    <div className="containerb">
      <div className="row">
        <div className="w-full">
          <OwlCarousel className="owl-theme" {...options}>
            {/* Testimonial Item 1 */}
            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                  Ravi Kumar
                  <small>Corporate Office Project</small>
                </div>
                <div className="description">
                  "We chose WhiteLight Enterprises for our corporate office
                  lighting, and they did not disappoint. Their LED lights are
                  not only energy-efficient but also aesthetically enhance the
                  office's ambiance. The architectural lighting solutions they
                  provided for our exterior spaces were stunning and have given
                  our building a modern, sophisticated look. The team was
                  professional, and the installation process was quick and
                  hassle-free. Highly recommend them!"
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                  Priya Patel
                  <small> Residential Lighting
                  </small>
                </div>
                <div className="description">
                  "WhiteLight Enterprises has transformed the lighting in our home. We installed their LED interior lights in every room, and the result is both elegant and efficient. The lighting is bright without being overwhelming, and the design options are perfect for our modern decor. The customer service was exceptional, with quick responses to all of our inquiries. We’re extremely satisfied and will definitely use them for future projects."

                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                  Anil Sharma

                  <small> Highway Lighting Project
                  </small>
                </div>
                <div className="description">
                  "Our city recently collaborated with WhiteLight Enterprises for a major highway lighting upgrade. Their LED street lights have significantly improved visibility and safety on our roads. We’ve received positive feedback from commuters, and the durability of the lights has been impressive. The WhiteLight team provided excellent support throughout the project, from planning to installation. A reliable company that delivers high-quality products!"

                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                  MSneha Deshmukh

                  <small>Outdoor & Landscape Lighting
                  </small>
                </div>
                <div className="description">
                  "We approached WhiteLight Enterprises to light up our outdoor spaces, and their architectural lighting solutions exceeded our expectations. The lights are designed beautifully and add an artistic touch to our landscape. The lights are energy-efficient and durable, perfect for the Indian weather. Their team was attentive to our needs and helped us choose the right products to suit our outdoor ambiance."
                </div>
              </div>
            </div>
            {/* Testimonial Item 2 */}
            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                  Vikram Reddy

                  <small>Hotel Lighting Solutions
                  </small>
                </div>
                <div className="description">
                  "As a hotel owner, lighting plays a crucial role in setting the mood and atmosphere for our guests. WhiteLight Enterprises provided us with excellent LED lighting solutions for both the interior and exterior of our property. Their lights not only highlight our hotel's architectural features but also create a welcoming environment for our guests. The quality of the lights is top-notch, and we’ve seen a noticeable reduction in our energy bills. Very happy with the results!"

                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Review;