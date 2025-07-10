interface SeoData {
    title: string;
    description: string;
    ogImage: string;
    keywords: string;
    canonicalUrl: string;
    schemaMarkup: object;
    localBusinessSchema?: object;
  }
  
  type RouteKey = 'home' | 'about' | 'services' | 'projects' | 'contact' | 'flooring' | 'cabinets' | 'renovation';
  
  // Eliminar todo lo relacionado a otros idiomas y dejar solo inglés
  const seoContent = {
    en: {
      home: {
        title: 'Home | RGB Corporation',
        description: 'High-quality flooring and construction services in Jacksonville, FL.',
        keywords: 'flooring, construction, Jacksonville, FL, vinyl, laminate, tile, wood',
        ogImage: '/img/logo_optimized.png',
        canonicalUrl: 'https://rgb-corporation.com/'
      },
      about: {
        title: 'About Us - RGB Corporation | Flooring Experts Jacksonville, FL',
        description: 'Meet RGB Corporation, your trusted partner for flooring installation and renovations in Jacksonville, Florida. Over 10 years of experience in flooring, cabinet installation, and space remodeling.',
        keywords: 'RGB Corporation Jacksonville, flooring experts Florida, cabinet installation Jacksonville, flooring contractors Florida, Jacksonville flooring company, porcelain tile experts Jacksonville',
        ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
        canonicalUrl: 'https://rgb-corporation.com/en/about',
        schemaMarkup: {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "RGB Corporation",
          "description": "Especialistas en instalación de pisos y revestimientos en Jacksonville, Florida",
          "url": "https://rgb-corporation.com",
          "foundingDate": "2014",
          "numberOfEmployees": "10-50"
        }
      },
      services: {
        title: 'Flooring & Installation Services | RGB Corporation Jacksonville, FL',
        description: 'Complete flooring installation services: vinyl, porcelain, hardwood, laminate. Cabinet installation, kitchen and bathroom remodeling in Jacksonville, Florida. Free estimates!',
        keywords: 'flooring services Jacksonville, vinyl installation Florida, porcelain tiles Jacksonville, hardwood floors Florida, laminate flooring Jacksonville, cabinet installation Florida, kitchen remodeling Jacksonville',
        ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
        canonicalUrl: 'https://rgb-corporation.com/en/services',
        schemaMarkup: {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Flooring and Installation Services",
          "itemListElement": [
            {
              "@type": "Service",
              "position": 1,
              "name": "Vinyl Flooring Installation",
              "description": "Professional vinyl flooring installation in Jacksonville, Florida"
            },
            {
              "@type": "Service",
              "position": 2,
              "name": "Porcelain Tile Installation",
              "description": "Porcelain and ceramic tile installation in Jacksonville, Florida"
            },
            {
              "@type": "Service",
              "position": 3,
              "name": "Hardwood Flooring Installation",
              "description": "Hardwood and laminate flooring installation in Jacksonville, Florida"
            }
          ]
        }
      },
      projects: {
        title: 'Flooring Projects Gallery | RGB Corporation Jacksonville, FL',
        description: 'Gallery of completed projects: vinyl, porcelain, hardwood, and laminate flooring installation in Jacksonville, Florida. Kitchen, bathroom, and commercial space renovations.',
        keywords: 'flooring projects Jacksonville, porcelain work Florida, vinyl installations Jacksonville, flooring renovations Florida, project gallery Jacksonville',
        ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
        canonicalUrl: 'https://rgb-corporation.com/en/projects',
        schemaMarkup: {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Completed Projects",
          "description": "Gallery of flooring installation and renovation projects in Jacksonville, Florida"
        }
      },
      contact: {
        title: 'Contact | RGB Corporation - Flooring Installation Jacksonville, FL',
        description: 'Contact RGB Corporation for free estimates on flooring installation and renovations in Jacksonville, Florida. Phone: +1-904-422-5380. Services throughout the Jacksonville area.',
        keywords: 'contact RGB Corporation Jacksonville, flooring estimates Florida, flooring installation phone Jacksonville, flooring quotes Florida',
        ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
        canonicalUrl: 'https://rgb-corporation.com/en/contact',
        schemaMarkup: {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact RGB Corporation",
          "description": "Contact flooring installation experts in Jacksonville, Florida"
        }
      },
      flooring: {
        title: 'Flooring Installation | Vinyl, Porcelain, Hardwood | RGB Corporation Jacksonville, FL',
        description: 'Professional installation of vinyl, porcelain, hardwood, and laminate flooring in Jacksonville, Florida. Flooring renovation and repair services. Free estimates!',
        keywords: 'flooring installation Jacksonville FL, vinyl flooring Florida, porcelain tiles Jacksonville, hardwood floors Florida, laminate flooring Jacksonville, flooring renovation Florida',
        ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
        canonicalUrl: 'https://rgb-corporation.com/en/flooring',
        schemaMarkup: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Flooring Installation",
          "description": "Professional installation of vinyl, porcelain, hardwood, and laminate flooring in Jacksonville, Florida"
        }
      },
      cabinets: {
        title: 'Cabinet Installation | Kitchens & Bathrooms | RGB Corporation Jacksonville, FL',
        description: 'Professional cabinet installation for kitchens and bathrooms in Jacksonville, Florida. Kitchen renovation, space design, and kitchen island installation.',
        keywords: 'cabinet installation Jacksonville FL, kitchen cabinets Florida, bathroom cabinets Jacksonville, kitchen renovation Florida, kitchen islands Jacksonville',
        ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
        canonicalUrl: 'https://rgb-corporation.com/en/cabinets',
        schemaMarkup: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Cabinet Installation",
          "description": "Professional cabinet installation for kitchens and bathrooms in Jacksonville, Florida"
        }
      },
      renovation: {
        title: 'Flooring & Space Renovation | RGB Corporation Jacksonville, FL',
        description: 'Complete flooring and space renovation services in Jacksonville, Florida. Kitchen, bathroom, and commercial space remodeling. Flooring, cabinet, and wall covering installation.',
        keywords: 'flooring renovation Jacksonville FL, kitchen remodeling Florida, bathroom renovation Jacksonville, space remodeling Florida, flooring renovation Jacksonville',
        ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
        canonicalUrl: 'https://rgb-corporation.com/en/renovation',
        schemaMarkup: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Flooring and Space Renovation",
          "description": "Complete flooring and space renovation services in Jacksonville, Florida"
        }
      }
    }
  };
  
  export function getSeoData(pathname: string) {
    const route = getRouteKeyFromPath(pathname);
    const baseUrl = 'https://rgb-corporation.com';
    return seoContent.en[route] || seoContent.en.home;
  }
  
  function getRouteKeyFromPath(pathname: string): RouteKey {
    if (pathname.includes('/about')) return 'about';
    if (pathname.includes('/services')) return 'services';
    if (pathname.includes('/projects')) return 'projects';
    if (pathname.includes('/contact')) return 'contact';
    if (pathname.includes('/flooring')) return 'flooring';
    if (pathname.includes('/cabinets')) return 'cabinets';
    if (pathname.includes('/renovation')) return 'renovation';
    return 'home';
  }
  
  // FAQ Schema markup para mejorar SEO
  export function getFAQSchema() {
    // Solo inglés
    return [
      {
        question: 'What services do you offer?',
        answer: 'We offer flooring installation, renovation, and more.'
      },
      {
        question: "How much does flooring installation cost in Jacksonville?",
        answer: "Prices vary by flooring type and area. We offer free estimates. Contact +1-904-422-5380 for a personalized quote."
      },
      {
        question: "Do you work throughout the Jacksonville area?",
        answer: "Yes, we serve Jacksonville and nearby areas like Jacksonville Beach, Atlantic Beach, Orange Park, and Fleming Island. 50km service radius."
      },
      {
        question: "How long does flooring installation take?",
        answer: "Depends on flooring type and area. Vinyl: 1-2 days. Porcelain: 2-3 days. Hardwood: 3-5 days. Complete projects: 1-2 weeks."
      },
      {
        question: "Do you offer installation warranty?",
        answer: "Yes, we offer warranty on all our work. 1-year installation warranty and up to 25 years on materials depending on manufacturer."
      }
    ];
  }
  