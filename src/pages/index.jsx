import Image from "next/image";
import { useEffect, useState } from "react";
import HomeUniversity from "../components/homes/home-university";
import SEO from "../components/seo";
import { Wrapper } from "../layout";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID;
  const RANGE = "other";

  // get data from google excel sheet - ensure it runs on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log("[Homepage] Fetching data from Google Sheets...");
        console.log("[Homepage] API Key:", API_KEY ? "Present" : "Missing");
        console.log("[Homepage] Spreadsheet ID:", SPREADSHEET_ID || "Missing");
        console.log("[Homepage] Range:", RANGE);
        
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
        console.log("[Homepage] Fetching URL:", url);
        
        const response = await fetch(url);
        
        console.log("[Homepage] Response status:", response.status);
        console.log("[Homepage] Response OK?", response.ok);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error("[Homepage] Error response:", errorText);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log("[Homepage] Raw API Response:", JSON.stringify(result, null, 2));
        
        if (result?.values && result.values.length > 0) {
          console.log("[Homepage] Data received:", result.values.length, "rows");
          result.values.shift(); // Remove header row
          setData(result.values); // Set ALL data, don't limit to 3
          setError(null);
          console.log("[Homepage] Data set successfully!");
        } else {
          console.warn("[Homepage] No data found in sheet");
          setError("No data available");
        }
      } catch (error) {
        console.error("[Homepage] Error fetching data: ", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
        console.log("[Homepage] Loading complete. Error:", error);
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
      
      {/* Loading State */}
      {loading ? (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {/* Popup Modal - only show if data exists */}
          {data.length && !error && (
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

          {/* Main Content - Always show, even with error */}
          <HomeUniversity data={data} hasError={!!error} errorMessage={error} />
        </>
      )}
    </Wrapper>
  );
}
