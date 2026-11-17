import React from 'react';

export default function Footer() {
  const WHATSAPP_NUMBER = "919342146824";
  const PHONE_NUMBER = "+919342146824";
  const EMAIL_ADDRESS = "albertarul1985@gmail.com";
  const INSTAGRAM_URL = "https://www.instagram.com/tlk_unisex_fitness_zone?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==";
  const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=TLK+Unisex+Fitness+Zone";

  return (
    <footer style={{
      backgroundColor: '#070707',
      color: '#a3a3a3',
      padding: '70px 20px 30px 20px',
      borderTop: '2px solid #dc2626',
      boxShadow: '0 -5px 25px rgba(220, 38, 38, 0.2)',
      boxSizing: 'border-box',
      width: '100%'
    }}>
      <style>{`
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 40px;
          padding-bottom: 50px;
          border-bottom: 1px solid #1f1f1f;
        }
        .footer-col h3 {
          font-size: 1.2rem;
          font-weight: 900;
          text-transform: uppercase;
          font-style: italic;
          margin-bottom: 20px;
          letter-spacing: 0.05em;
          color: #ffffff;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          color: #a3a3a3;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .footer-links a:hover {
          color: #dc2626;
          padding-left: 6px;
        }
        .footer-social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #171717;
          border: 1px solid #262626;
          color: #ffffff;
          margin-right: 12px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .footer-social-icon:hover {
          background-color: #dc2626;
          border-color: #dc2626;
          box-shadow: 0 0 15px rgba(220, 38, 38, 0.8);
          transform: translateY(-3px);
        }
        .footer-social-icon:hover svg {
          stroke: #ffffff;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 0.85rem;
        }
        .static-contact-link {
          color: #ffffff;
          text-decoration: none;
        }
        .location-link {
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .footer-bottom {
          max-width: 1200px;
          margin: 30px auto 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 0.75rem;
          color: #525252;
          font-family: monospace;
        }
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <div className="footer-container">
        {/* Col 1: Brand Info */}
        <div className="footer-col">
          <h3>
            TLK UNISEX FITNESS ZONE
          </h3>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '20px' }}>
            Push your limits, build ultimate strength, and transform your body with professional guidance and top-notch equipment.
          </p>
          
          <div style={{ display: 'flex' }}>
            {/* WhatsApp Icon */}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
            
            {/* Instagram Icon */}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* Phone Call Icon */}
            <a href={`tel:${PHONE_NUMBER}`} className="footer-social-icon" title="Call Us">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#events">Events & Highlights</a></li>
            <li><a href="#membership">Membership Plans</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Col 3: Contact Details */}
        <div className="footer-col">
          <h3>Get In Touch</h3>
          
          <div className="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <a href={`tel:${PHONE_NUMBER}`} className="static-contact-link">{PHONE_NUMBER}</a>
          </div>

          <div className="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="static-contact-link" style={{ wordBreak: 'break-all' }}>{EMAIL_ADDRESS}</a>
          </div>

          <div className="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="location-link">
              LOCATION
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom with Admin Link */}
      <div className="footer-bottom">
        <div>© 2026 TLK UNISEX FITNESS ZONE. ALL RIGHTS RESERVED.</div>
        <div>
          POWERED BY REACT & VITE |{' '}
          <a href="#admin" style={{ color: '#737373', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#dc2626'} onMouseLeave={(e) => e.target.style.color = '#737373'}>
            ADMIN
          </a>
        </div>
      </div>
    </footer>
  );
}