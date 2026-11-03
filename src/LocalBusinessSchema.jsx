
import React from 'react';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "name": "TLK Unisex Fitness Zone",
    "description":
      "TLK Unisex Fitness Zone is a gym located in Nenmeli, Sriperumbudur, Tamil Nadu.",
    "url": "https://tlk-unisex-fitness-zone.vercel.app/",
    "telephone": "+919486290016",
    "email": "tlkfitness@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ramanujaa Streets, Nenmeli",
      "addressLocality": "Sriperumbudur",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
