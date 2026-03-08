import React from "react";

const ContactMap = () => {
  return (
    <div className="google-map-area">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=31.601389,74.335924&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
