import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  const scriptGoogleTagManager = `
  (function(w,d,s,l,i) {
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WRXV5ZB');
`;

  return (
    <>
      <Head>
        {/* <!-- Google Tag Manager --> */}
     
      <script dangerouslySetInnerHTML={{ __html: scriptGoogleTagManager }} />

          {/* <!-- End Google Tag Manager --> */}
        <link rel="shortcut icon" href="/images/flat.png" />
        <title>Faculdade IBRA</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      {/* <div className="live-iframe" id="live-iframe">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/IVdbu5heGWE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div
          onClick={() => {
            document.getElementById('live-iframe').style.display = 'none';
          }}
          className="live-iframe-close"
        >
          x
        </div>
      </div> */}
      <Footer />
    </>
  );
}
export default Layout;
