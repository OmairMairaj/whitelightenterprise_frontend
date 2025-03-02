import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const phoneNumber = '9168948474'; // Replace with your WhatsApp number
  const callNumber = '+919168948474'; // Replace with your call number

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const whatsappUrl = isMobile
    ? `https://api.whatsapp.com/send?phone=${phoneNumber}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <div>
      {/* WhatsApp Sticky Button */}
      <div
        className="whatsapp-button"
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          backgroundColor: '#25D366',
          color: '#fff',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          zIndex: 1000,
        }}
        aria-label="Open WhatsApp Chat"
        title="Open WhatsApp Chat"
      >
        <FaWhatsapp size={24} color="#fff" />
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div
          className="whatsapp-chat-container"
          style={{
            position: 'fixed',
            bottom: '140px',
            right: '20px',
            width: '300px',
            height: '400px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            overflow: 'hidden',
            zIndex: 1000,
            backgroundColor: '#fff',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <iframe
            src={whatsappUrl}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            title="WhatsApp Chat"
          />
        </div>
      )}

      {/* Click-to-Call Button */}
      <div
        className="call-button"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '90px',
          backgroundColor: '#fffff',
          color: '#fff',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.91)',
          cursor: 'pointer',
          zIndex: 1000,
        }}
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
