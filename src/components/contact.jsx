
import React from 'react';

export default function Contact() {
  const WHATSAPP_NUMBER = "919486290016";
  const PHONE_NUMBER = "+919486290016";
  const EMAIL_ADDRESS = "tlkfitness@gmail.com";

  const whatsappMessage = encodeURIComponent(
    "Hello! I want to join TLK Unisex Fitness Zone. Please share admission details."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=TLK+Unisex+Fitness+Zone%2C+Ramanujaa+Streets%2C+Nenmeli%2C+Sriperumbudur%2C+Tamil+Nadu";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        padding: '80px 20px',
        backgroundColor: '#0b0b0b',
        width: '100%',
        borderTop: '2px solid #dc2626',
        borderBottom: '2px solid #dc2626',
        boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)'
      }}
    >
      <style>{`
        .highlight-red {
          color: #dc2626;
          text-shadow: 0 0 10px rgba(220, 38, 38, 0.6);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .card-custom {
          background-color: rgba(23, 23, 23, 0.7);
          border: 1px solid #262626;
          padding: 32px 24px;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card-custom:hover {
          border-color: #dc2626;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
          transform: translateY(-4px);
        }
        .icon-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 48px;
          margin-bottom: 16px;
        }
        .btn-whatsapp {
          background-color: #25d366;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 12px 20px;
          text-decoration: none;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
          transition: all 0.2s ease;
          display: inline-block;
        }
        .btn-whatsapp:hover {
          background-color: #20ba5a;
          box-shadow: 0 0 16px rgba(37, 211, 102, 0.6);
        }
        .btn-action {
          background-color: #dc2626;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 10px 18px;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.2s ease;
          display: inline-block;
          margin-top: 8px;
        }
        .btn-action:hover {
          background-color: #b91c1c;
          box-shadow: 0 0 12px rgba(220, 38, 38, 0.6);
        }
        .map-container {
          position: relative;
          width: 100%;
          height: 180px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 16px;
          border: 1px solid #333;
        }
        .map-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.1);
          transition: background 0.3s ease;
          cursor: pointer;
        }
        .map-container:hover .map-overlay {
          background: rgba(0,0,0,0);
        }
      `}</style>

      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
        <h2
          id="contact-heading"
          style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            fontStyle: 'italic',
            textTransform: 'uppercase',
            color: '#fff',
            marginTop: '8px'
          }}
        >
          <span className="highlight-red">C</span>ONTACT
        </h2>

        <p style={{
          color: '#a3a3a3',
          fontSize: '0.875rem',
          marginTop: '12px',
          lineHeight: 1.6
        }}>
          Contact TLK Unisex Fitness Zone, your local gym in
          Sriperumbudur (Sriperumbathur), Tamil Nadu. Reach us
          for membership enquiries, fitness information and visits.
        </p>
      </div>

      <div className="contact-grid">

        {/* WhatsApp Card */}
        <div className="card-custom">
          <div>
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="#25D366">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
              WhatsApp Us
            </h3>

            <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '20px', lineHeight: 1.5 }}>
              Instant answers about membership, personal training and slot timings.
            </p>
          </div>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            Chat on WhatsApp &rarr;
          </a>
        </div>

        {/* Call & Email Card */}
        <div className="card-custom">
          <div>
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#3b82f6">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
              Call & Email
            </h3>

            <p style={{ color: '#e5e5e5', fontSize: '0.9rem', fontWeight: 600, margin: '6px 0' }}>
              {PHONE_NUMBER}
            </p>

            <p style={{ color: '#a3a3a3', fontSize: '0.85rem', wordBreak: 'break-all', marginBottom: '20px' }}>
              ✉️ {EMAIL_ADDRESS}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${PHONE_NUMBER}`} className="btn-action">
              Call Now
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="btn-action" style={{ backgroundColor: '#333' }}>
              Send Email
            </a>
          </div>
        </div>

        {/* Location Card */}
        <div className="card-custom">
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
              📍 Our Location
            </h3>

            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="map-container">
                <iframe
                  title="TLK Unisex Fitness Zone location in Nenmeli, Sriperumbudur"
                  src="https://www.google.com/maps?q=Ramanujaa+Streets,+Nenmeli,+Sriperumbudur,+Tamil+Nadu&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="map-overlay"></div>
              </div>
            </a>

            <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '8px', lineHeight: 1.6 }}>
              <strong style={{ color: '#fff' }}>TLK Unisex Fitness Zone</strong>
              <br />
              Ramanujaa Streets, Nenmeli,
              <br />
              Sriperumbudur, Tamil Nadu, India.
            </p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-action"
          >
            Open in Google Maps 🗺️
          </a>
        </div>

      </div>
    </section>
  );
}
