import React from 'react'; // Removed useState as isChatOpen is commented out
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  // const [isChatOpen, setIsChatOpen] = useState(false); // Not used if chat window is commented
  const phoneNumber = '+919168948474'; // Replace with your WhatsApp number
  const callNumber = '+919168948474'; // Replace with your call number

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const whatsappUrl = isMobile
    ? `https://api.whatsapp.com/send?phone=${phoneNumber}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

  const openWhatsApp = () => {
    window.open(whatsappUrl, '_blank');
  };

  // --- Sizing and Position Constants ---
  const BUTTON_SIZE = '60px'; // Increased from 50px
  const ICON_SIZE = 30; // Increased from 24 for WhatsApp
  const CALL_ICON_FONT_SIZE = '28px'; // Increased font size for call emoji

  const WHATSAPP_BOTTOM = '90px'; // Adjusted to make space if both are larger
  const WHATSAPP_RIGHT = '25px';

  const CALL_BUTTON_BOTTOM = '25px';
  const CALL_BUTTON_RIGHT = '25px'; // Now aligns with WhatsApp right edge if WhatsApp is above it

  return (
    <div>
      {/* WhatsApp Sticky Button - LARGER */}
      <div // Changed from <a> to <div> for more consistent styling control with onClick
        className="whatsapp-button"
        onClick={openWhatsApp}
        style={{
          position: 'fixed',
          bottom: WHATSAPP_BOTTOM,
          right: WHATSAPP_RIGHT,
          backgroundColor: '#25D366',
          color: '#fff',
          borderRadius: '50%',
          width: BUTTON_SIZE,  // Using constant
          height: BUTTON_SIZE, // Using constant
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)', // Slightly adjusted shadow
          cursor: 'pointer',
          zIndex: 1000,
          transition: 'transform 0.2s ease-in-out', // Added hover effect
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Open WhatsApp Chat"
        title="Open WhatsApp Chat"
      >
        <FaWhatsapp size={ICON_SIZE} color="#fff" />
      </div>

      {/* Chat Window - Commented out as in your original */}
      {/* {isChatOpen && ( ... )} */}

      {/* Click-to-Call Button - LARGER and repositioned */}
      <div
        className="call-button"
        style={{
          position: 'fixed',
          bottom: CALL_BUTTON_BOTTOM, // Repositioned below WhatsApp
          right: CALL_BUTTON_RIGHT,   // Can align with WhatsApp or be offset
          backgroundColor: '#ffffff', // Corrected: #ffffff for white
          // color: '#007bff', // Example: Blue call icon color on white background
          borderRadius: '50%',
          width: BUTTON_SIZE,  // Using constant
          height: BUTTON_SIZE, // Using constant
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)', // Slightly adjusted shadow
          cursor: 'pointer',
          zIndex: 1000,
          fontSize: CALL_ICON_FONT_SIZE, // Increased font size for emoji
          border: '2px solid #E0E0E0', // Optional: light border for white button
          transition: 'transform 0.2s ease-in-out', // Added hover effect
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        onClick={() => window.open(`tel:${callNumber}`, '_self')}
        aria-label="Call Us"
        title="Call Us"
      >
        📞
      </div>
    </div>
  );
};

export default WhatsAppButton;