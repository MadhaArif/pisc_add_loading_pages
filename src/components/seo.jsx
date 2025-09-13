import Head from 'next/head';

const SEO = ({ pageTitle, font }) => (
  <Head>
    <title>
      {pageTitle &&
        `${pageTitle} || Professional IT Skills College Education Platform For Innovative Learning`}
    </title>
    <meta httpEquiv='x-ua-compatible' content='ie=edge' />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, shrink-to-fit=no'
    />
    {font && <link href={font} rel='stylesheet' />}
    <link rel='icon' href='/logo-white.svg' />
  </Head>
);

export default SEO;
