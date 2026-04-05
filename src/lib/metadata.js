// Shared constants for metadata across pages
export const SITE_CONFIG = {
  name: "Fietsspecialist Rotterdam",
  url: "https://fietsspecialistrotterdam.nl",
  address: {
    street: "2e Middellandstraat 28",
    postalCode: "3021 BP",
    city: "Rotterdam",
    country: "Nederland",
  },
  phone: "010-4779355",
  email: "info@fietsspecialistrotterdam.nl",
  hours: {
    weekdays: "09:00 - 18:00",
    saturday: "09:00 - 18:00",
    sunday: "12:00 - 18:00",
  },
  social: {
    instagram: "https://instagram.com/fietsspecialistrotterdam",
  },
};

// JSON-LD structured data for local business (append to layout later)
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BikeStore",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      postalCode: SITE_CONFIG.address.postalCode,
      addressLocality: SITE_CONFIG.address.city,
      addressCountry: "NL",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "18:00",
      },
    ],
    priceRange: "€ - €€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.9171,
      longitude: 4.4559,
    },
    image: "https://fietsspecialistrotterdam.nl/unnamed.webp",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "320",
      bestRating: "5",
    },
    areaServed: {
      "@type": "City",
      name: "Rotterdam",
    },
  };
}
