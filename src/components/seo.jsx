import Head from 'next/head';

const SEO = ({ pageTitle, font }) => (
  <Head>
    <title>
      {pageTitle &&
        `${pageTitle} || Professional IT Skills College Education Platform For Innovative Learning`}
    </title>
    <meta name="google-site-verification" content="T7BWEO1iZVWv6u9HvDhNTuHMuyCl0wx4B3oAq7Onals" />
    <meta httpEquiv='x-ua-compatible' content='ie=edge' />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, shrink-to-fit=no'
    />
    <meta name="description" content="PACT is a professional IT skills college in Pakistan that offers innovative learning and training in modern technologies. We provide the best IT education and courses to help you succeed in your career." />
    <meta name="keywords" content="PACT, Professional IT Skills College, IT education, IT training, innovative learning, modern technologies, IT courses, Pakistan, professional skills" />
    <meta name="author" content="PACT" />
    <meta property="og:title" content="PACT - Professional IT Skills College" />
    <meta property="og:description" content="PACT is a professional IT skills college in Pakistan that offers innovative learning and training in modern technologies. We provide the best IT education and courses to help you succeed in your career." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.pact.edu.pk/" />
    <meta property="og:image" content="https://www.pact.edu.pk/logo-white.svg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="PACT - Professional IT Skills College" />
    <meta name="twitter:description" content="PACT is a professional IT skills college in Pakistan that offers innovative learning and training in modern technologies. We provide the best IT education and courses to help you succeed in your career." />
    <meta name="twitter:image" content="https://www.pact.edu.pk/logo-white.svg" />
    {font && <link href={font} rel='stylesheet' />}
    <link rel='icon' href='/logo-white.svg' />
  </Head>
);

export default SEO;
