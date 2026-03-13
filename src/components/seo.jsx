import Head from 'next/head'; 
 
 const SEO = ({ pageTitle, pageDescription, pageUrl, pageImage, font }) => { 
   // ─── Default Values ──────────────────────────────────────────────── 
   const siteName    = "Professional IT Skills College (PISC)"; 
   const defaultTitle = "PISC - Best IT Courses in Lahore | Professional IT Skills College"; 
   const defaultDesc  = 
     "Professional IT Skills College (PISC) in Shadbagh, Lahore offers affordable, hands-on IT courses including web development, graphic design, digital marketing, and more. Enroll now for career-ready training in Pakistan."; 
   const siteUrl     = "https://www.professionalitskillscollege.com"; 
   const logoUrl     = "https://www.professionalitskillscollege.com/assets/images/logo/logo-dark.png"; 
 
   const fullTitle   = pageTitle 
     ? `${pageTitle} | PISC - Professional IT Skills College Lahore` 
     : defaultTitle; 
   const description = pageDescription || defaultDesc; 
   const canonical   = pageUrl   ? `${siteUrl}${pageUrl}` : siteUrl; 
   const ogImage     = pageImage ? `${siteUrl}${pageImage}` : logoUrl; 
 
   // ─── JSON-LD: LocalBusiness + EducationalOrganization (GEO + AEO) ── 
   const jsonLd = { 
     "@context": "https://schema.org", 
     "@graph": [ 
       { 
         "@type": ["EducationalOrganization", "LocalBusiness"], 
         "@id": `${siteUrl}/#organization`, 
         "name": siteName, 
         "alternateName": "PISC", 
         "url": siteUrl, 
         "logo": logoUrl, 
         "image": logoUrl, 
         "description": defaultDesc, 
         "address": { 
           "@type": "PostalAddress", 
           "streetAddress": "Shadbagh", 
           "addressLocality": "Lahore", 
           "addressRegion": "Punjab", 
           "postalCode": "54000", 
           "addressCountry": "PK" 
         }, 
         "geo": { 
           "@type": "GeoCoordinates", 
           "latitude": "31.5976", 
           "longitude": "74.3414" 
         }, 
         "openingHours": "Mo-Su 12:00-22:00",
         "telephone": "+923166474545",
         "email": "info@professionalitskillscollege.com",
         "areaServed": ["Lahore", "Punjab", "Pakistan"], 
         "contactPoint": { 
           "@type": "ContactPoint", 
           "telephone": "+923166474545",
           "contactType": "Admissions", 
           "availableLanguage": ["Urdu", "English"], 
           "url": `${siteUrl}/contact-us` 
         }, 
         "sameAs": [], 
         "hasOfferCatalog": { 
           "@type": "OfferCatalog", 
           "name": "IT Courses", 
           "url": `${siteUrl}/course` 
         } 
       }, 
       { 
         "@type": "WebSite", 
         "@id": `${siteUrl}/#website`, 
         "url": siteUrl, 
         "name": siteName, 
         "publisher": { "@id": `${siteUrl}/#organization` }, 
         "inLanguage": ["en-PK", "ur"], 
         "potentialAction": { 
           "@type": "SearchAction", 
           "target": { 
             "@type": "EntryPoint", 
             "urlTemplate": `${siteUrl}/course?q={search_term_string}` 
           }, 
           "query-input": "required name=search_term_string" 
         } 
       }, 
       { 
         "@type": "FAQPage", 
         "mainEntity": [ 
           { 
             "@type": "Question", 
             "name": "Which IT courses are available at PISC Lahore?", 
             "acceptedAnswer": { 
               "@type": "Answer", 
               "text": "PISC Lahore offers web development, graphic design, digital marketing, MS Office, programming, and other career-focused IT courses." 
             } 
           }, 
           { 
             "@type": "Question", 
             "name": "Where is Professional IT Skills College located?", 
             "acceptedAnswer": { 
               "@type": "Answer", 
               "text": "PISC is located in Shadbagh, Lahore, Punjab, Pakistan." 
             } 
           }, 
           { 
             "@type": "Question", 
             "name": "Does PISC provide certificates after course completion?", 
             "acceptedAnswer": { 
               "@type": "Answer", 
               "text": "Yes, PISC provides industry-recognized certificates upon successful completion of IT courses." 
             } 
           }, 
           { 
             "@type": "Question", 
             "name": "Are PISC courses affordable?", 
             "acceptedAnswer": { 
               "@type": "Answer", 
               "text": "Yes, PISC offers budget-friendly courses with flexible timings to suit students from all backgrounds." 
             } 
           } 
         ] 
       } 
     ] 
   }; 
 
   return ( 
     <Head> 
       {/* ── Basic ─────────────────────────────────────────────────────── */} 
       <title>{fullTitle}</title> 
       <meta httpEquiv="x-ua-compatible" content="ie=edge" /> 
       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> 
       <meta name="description"  content={description} /> 
       <meta name="author"       content="Professional IT Skills College (PISC)" /> 
       <meta name="robots"       content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> 
       <link  rel="canonical"    href={canonical} /> 
 
       {/* ── Keywords (still used by some regional engines like Bing/PK) ─ */} 
       <meta 
         name="keywords" 
         content="IT courses Lahore, computer courses Lahore, professional IT training Pakistan, PISC, Professional IT Skills College, web development course Lahore, graphic design course Lahore, digital marketing Lahore, short IT courses Lahore, Shadbagh Lahore IT college, affordable IT courses Pakistan" 
       /> 
 
       {/* ── Geo Tags (GEO – local search ranking) ─────────────────────── */} 
       <meta name="geo.region"      content="PK-PB" /> 
       <meta name="geo.placename"   content="Lahore, Punjab, Pakistan" /> 
       <meta name="geo.position"    content="31.5976;74.3414" /> 
       <meta name="ICBM"            content="31.5976, 74.3414" /> 
       <meta name="language"        content="en-PK" /> 
       <meta name="content-language" content="en, ur" /> 
 
       {/* ── Open Graph (Facebook / LinkedIn / WhatsApp) ────────────────── */} 
       <meta property="og:type"        content="website" /> 
       <meta property="og:site_name"   content={siteName} /> 
       <meta property="og:title"       content={fullTitle} /> 
       <meta property="og:description" content={description} /> 
       <meta property="og:url"         content={canonical} /> 
       <meta property="og:image"       content={ogImage} /> 
       <meta property="og:image:alt"   content="PISC - Professional IT Skills College Lahore" /> 
       <meta property="og:image:width" content="1200" /> 
       <meta property="og:image:height" content="630" /> 
       <meta property="og:locale"      content="en_PK" /> 
 
       {/* ── Twitter Card ──────────────────────────────────────────────── */} 
       <meta name="twitter:card"        content="summary_large_image" /> 
       <meta name="twitter:title"       content={fullTitle} /> 
       <meta name="twitter:description" content={description} /> 
       <meta name="twitter:image"       content={ogImage} /> 
       <meta name="twitter:image:alt"   content="PISC - Professional IT Skills College Lahore" /> 
 
       {/* ── AEO: AI Answer Engine Optimization ───────────────────────── */} 
       {/* Helps Google SGE, Bing Copilot, ChatGPT browsing understand the page */} 
       <meta name="classification"   content="Education, IT Training" /> 
       <meta name="category"         content="IT Education" /> 
       <meta name="coverage"         content="Lahore, Pakistan" /> 
       <meta name="target"           content="students, professionals, job seekers" /> 
       <meta name="subject"          content="IT Courses, Computer Training, Digital Skills" /> 
       <meta name="topic"            content="Professional IT Education in Lahore" /> 
       <meta name="summary"          content="PISC provides affordable, hands-on IT courses in Lahore, Pakistan, covering web development, graphic design, digital marketing, and more with certified instructors." /> 
       <meta name="abstract"         content="Professional IT Skills College (PISC) in Shadbagh Lahore is a career-focused IT training institute offering industry-relevant digital skills courses with certificates." /> 
 
       {/* ── Google Site Verification ───────────────────────────────────── */} 
       <meta name="google-site-verification" content="T7BWEO1iZVWv6u9HvDhNTuHMuyCl0wx4B3oAq7Onals" /> 
 
       {/* ── Favicon & Fonts ─────────────────────────────────────────────── */} 
       <link rel='icon' href='/assets/images/logo/logo-white.svg' />
       <link rel="apple-touch-icon" href="/assets/images/logo/logo-white.svg" /> 
       {font && <link href={font} rel='stylesheet' />}
 
       {/* ── JSON-LD Structured Data (Schema.org) ──────────────────────── */} 
       <script 
         type="application/ld+json" 
         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
       /> 
     </Head> 
   ); 
 }; 
 
 export default SEO; 
 
 /* ───────────────────────────────────────────────────────────────────────── 
    HOW TO USE ON EACH PAGE: 
    ───────────────────────────────────────────────────────────────────────── 
 
    Home page (default values auto-applied): 
      <SEO /> 
 
    Course listing page: 
      <SEO 
        pageTitle="IT Courses in Lahore" 
        pageDescription="Browse all IT courses at PISC Lahore — web development, graphic design, digital marketing and more. Enroll today!" 
        pageUrl="/course" 
      /> 
 
    About page: 
      <SEO 
        pageTitle="About Us" 
        pageDescription="Learn about Professional IT Skills College (PISC) in Shadbagh Lahore — our mission, vision and expert instructors." 
        pageUrl="/about" 
      /> 
 
    Contact page: 
      <SEO 
        pageTitle="Contact Us" 
        pageDescription="Get in touch with PISC Lahore for admissions, course details, and inquiries about our IT training programs." 
        pageUrl="/contact-us" 
      /> 
    ───────────────────────────────────────────────────────────────────────── */ 
