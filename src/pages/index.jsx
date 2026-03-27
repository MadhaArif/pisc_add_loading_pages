import Image from "next/image";
import { useEffect, useState } from "react";
import HomeUniversity from "../components/homes/home-university";
import SEO from "../components/seo";
import { Wrapper } from "../layout";

export default function Home() {
  const [data, setData] = useState([]);
  const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
  const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
  const RANGE = "other";

  // get data from google excel sheet - ensure it runs on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("[Homepage] Fetching data...");
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`,
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log("[Homepage] Raw data:", result);
        
        if (result?.values && result.values.length > 0) {
          result.values.shift(); // Remove header row
          setData(result.values); // Set ALL data, don't limit to 3
          console.log("[Homepage] All data:", result.values);
        } else {
          console.warn("[Homepage] No data found in sheet");
        }
      } catch (error) {
        console.error("[Homepage] Error fetching data: ", error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Only run on client-side
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then(({ Modal }) => {
      const modalElement = document.getElementById("exampleModal");
      if (modalElement) {
        const modal = new Modal(modalElement);
        modal.show();
      }
    });
  }, []);

  return (
    <Wrapper>
      {data.length && (
        <div
          style={{ margin: "100px 0 0" }}
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  position: "absolute",
                  right: "-50px",
                  color: "var(--color-secondary) !important",
                }}
              ></button>

              <div className="modal-body">
                {data.length > 0 && data[0][0] && (
                  <Image
                    src={`/assets/images/course/${data[0][0]}`}
                    alt="Course Popup"
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <SEO 
        pageTitle="Home" 
        pageDescription="Professional IT Skills College (PISC) in Shadbagh, Lahore offers affordable, hands-on IT courses including web development, graphic design, digital marketing, and more. Enroll now for career-ready training in Pakistan." 
        pageUrl="/" 
      />
      {/* Only render HomeUniversity when data is available */}
      {data.length > 0 ? (
        <HomeUniversity data={data} />
      ) : (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </Wrapper>
  );
}
