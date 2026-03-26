import { useEffect, useState } from "react";

const AboutArea = ({ imgage }) => {
  const [data, setData] = useState([]);
  const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
  const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
  const RANGE = "ceo";

  // get data from google excel sheet
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`,
        );
        const result = await response.json();
        result?.values.shift() && setData(result?.values);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const img = data.length
    ? `/assets/images/course/${data[0][0]}`
    : "/assets/images/about/about-01.jpg";
  const detail = data.length
    ? data[0][1]
    : "CEO details not available at the moment.";

  return (
    <div className="gap-top-equal about-style-7">
      <div className="container gap-bottom-equal">
        <div className=" row g-5 align-items-center">
          <div className="col-lg-6">
            <div style={{ paddingRight: "0" }} className="about-content">
              <div
                className="section-title section-left"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <span className="pre-title">About us</span>
                <h2 className="title sub-heading">Inside PISC</h2>
                <span className="shape-line">
                  <i className="icon-19"></i>
                </span>
                <p style={{ textAlign: "justify" }}>
                  At Professional IT Skills College, Shadbagh Lahore, we are
                  dedicated to transforming careers through high-quality IT
                  education and practical training. Our mission is to make IT
                  courses in Lahore accessible to everyone, empowering students
                  with the digital, computer, and professional skills needed to
                  succeed in today&apos;s competitive job market. We provide
                  hands-on, career-focused programs that give learners
                  real-world experience with the latest software, tools, and
                  technologies. Whether you are starting fresh or aiming to
                  advance your skills, our experienced instructors and
                  supportive learning environment ensure every student is
                  prepared to excel locally, nationally, and internationally. We
                  also offer flexible scheduling, personalized guidance,
                  industry-relevant certifications, and continuous support to
                  help graduates confidently enter the technology sector. Join
                  us at Professional IT Skills College and take the first step
                  toward a successful tech career, staying ahead in a rapidly
                  evolving global digital world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image-gallery">
              <img
                style={{ width: "100%" }}
                className="main-img-1"
                src={`/assets/images/course/${imgage}`}
                alt="About Image"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="gap-top-equal gap-bottom-equal"
        style={{ background: "var(--color-smoke)" }}
      >
        <div className="container">
          <div className="row gx-5">
            <div
              className="col-lg-6"
              style={{ borderRight: "3px solid var(--color-secondary)" }}
            >
              <div
                className="section-title section-left"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <h2 className="title sub-heading">
                  Our <span className="color-secondary">Mission</span>
                </h2>
                <span className="shape-line">
                  <i className="icon-19"></i>
                </span>
                <p style={{ textAlign: "justify" }}>
                  At Professional IT Skills College, Shadbagh Lahore, our
                  mission is to deliver high-quality, affordable, and practical
                  IT courses that empower students with digital, computer, and
                  professional skills. Through hands-on training, real-world
                  projects, and expert mentorship, we prepare learners to solve
                  problems, think critically, and succeed in today’s competitive
                  tech industry. Our programs are designed for beginners and
                  professionals alike, ensuring every student gains the
                  confidence and knowledge to achieve career growth locally,
                  nationally, and internationally.
                  <br /> <br />
                  We aim to achieve this by:
                  <ul>
                    <li>
                      Delivering practical IT courses in Lahore tailored to
                      industry demands.
                    </li>
                    <li>
                      Providing hands-on & real-world training for immediate
                      skill application.
                    </li>
                    <li>
                      Equipping students with critical thinking, problem-solving
                      & professional skills.
                    </li>
                    <li>
                      Offering expert mentorship and guidance to ensure
                      effective learning.
                    </li>
                    <li>
                      Preparing learners for career success in the digital and
                      tech sectors.
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="section-title section-left"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <h2 className="title sub-heading">
                  Our <span className="color-secondary">Vision</span>
                </h2>
                <span className="shape-line">
                  <i className="icon-19"></i>
                </span>
                <p style={{ textAlign: "justify" }}>
                  Our vision is to become the leading center for IT education in
                  Lahore, Pakistan, and beyond, recognized for innovative,
                  career-focused computer training. We aspire to make technology
                  education accessible to everyone, equipping students with the
                  latest digital skills and industry-ready experience to thrive
                  in a rapidly evolving global job market. By fostering a
                  dynamic, inclusive, and future-ready learning environment, we
                  aim to shape a generation of professionals who excel locally,
                  nationally, and globally.
                  <br /> <br />
                  We aim to achieve this by:
                  <ul>
                    <li>
                      Providing cutting-edge IT courses in Lahore that meet
                      industry demands.
                    </li>
                    <li>
                      Offering hands-on, practical training for real-world
                      career readiness.
                    </li>
                    <li>
                      Encouraging creativity, critical thinking, and
                      problem-solving skills.
                    </li>
                    <li>
                      Fostering a dynamic, inclusive, and supportive learning
                      environment.
                    </li>
                    <li>
                      Preparing students for success locally, nationally, and
                      globally in the digital era.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {data.length && (
        <div className="gap-top-equal gap-bottom-equal">
          <div className="container">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-7">
                <div className="section-title section-left">
                  <h2 className="title sub-heading mt-0">
                    About <span className="color-secondary">CEO</span>
                  </h2>

                  <span className="shape-line">
                    <i className="icon-19"></i>
                  </span>

                  <p style={{ textAlign: "justify", color: "black" }}>
                    {detail}
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="about-image-gallery" style={{ padding: '0', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '100%',
                    height: '100%',
                    border: '10px solid var(--color-secondary)',
                    borderRadius: '20px',
                    zIndex: '-1',
                    opacity: '0.2'
                  }}></div>
                  <img
                    src={img}
                    alt="CEO Image"
                    className="img-fluid"
                    style={{ 
                      width: "100%", 
                      objectFit: "cover", 
                      borderRadius: "20px", 
                      boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                      border: "5px solid white",
                      position: 'relative',
                      zIndex: '1'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '-30px',
                    background: 'white',
                    padding: '15px 25px',
                    borderRadius: '10px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    zIndex: '2',
                    borderLeft: '5px solid var(--color-secondary)'
                  }}>
                    <h4 style={{ margin: '0', fontSize: '18px', fontWeight: '700', color: 'var(--color-heading)' }}>Founder & CEO</h4>
                    <p style={{ margin: '0', fontSize: '14px', color: 'var(--color-body)' }}>Professional IT Skills College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutArea;
