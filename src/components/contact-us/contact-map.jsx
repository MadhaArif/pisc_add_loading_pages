import React from "react";

const ContactMap = () => {
  return (
    <div className="google-map-area">
      <div className="mapouter">
        <div className="gmap_canvas">
         <iframe
  title="Google Map"
  src="https://www.google.com/maps?q=31.598031,74.3433967&output=embed"
  width="100%"
  height="450"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
/>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
