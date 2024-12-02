import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/theme.css";
import slide from "./img/webp/interior11.webp";
import imge1 from "./img/webp/people15.webp";
import imge2 from "./img/webp/people15.webp"
import imge3 from  "./img/webp/people4.webp"


function Template() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      {/* Helmet manages <head> contents */}
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./img/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="./img/favicon.png"
        />
        <title>Stride HTML Template - Frontpage One</title>
      </Helmet>

      {/* Main Body Content */}
      <div data-bs-spy="scroll" data-bs-target="#navScroll">
        {/* Navbar */}
        <nav
          id="navScroll"
          className="navbar navbar-expand-lg navbar-light fixed-top"
        >
          <div className="container">
            <a className="navbar-brand pe-4 fs-4" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-layers-half"
                viewBox="0 0 16 16"
              >
                <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
              </svg>
              <span className="ms-1 fw-bolder">Stride</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li></li>
                <li className="nav-item">
                  <a className="nav-link" href="#aboutus">
                    About us
                  </a>
                </li>
                <li></li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">
                    Contact us
                  </a>
                </li>
       
      </ul>
          
            </div>
          </div>
        </nav>

        {/* Main Section */}
        <main>
          <div className="w-100 overflow-hidden bg-gray-100" id="top">
            <div className="container position-relative">
            <div
  className="col-12 col-lg-8 mt-0 h-100 position-absolute top-0 end-0 bg-cover"
  data-aos="fade-left"
  style={{ backgroundImage: `url(${slide})` }} // Utilisation correcte de l'image dans le style
></div>
              <div className="row">
                <div
                  className="col-lg-7 py-vh-6 position-relative"
                  data-aos="fade-right"
                >
                  <h1 className="display-1 fw-bold mt-5">
                    Sell more useless stuff faster!
                  </h1>
                  <p className="lead">
                    To be honest, this is just a stupid placeholder text. We
                    don’t know how to sell anything, not even lesser or slower
                    than you.
                  </p>
                  <h1
                    
                    className="btn btn-dark btn-xl shadow me-3 rounded-0 my-5"
                  >
                    Welcome
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="small py-vh-3 w-100 overflow-hidden" id="services">
  <div className="container">
    <div className="row">
      {/* Delivery Service Section */}
      <div className="col-md-6 col-lg-4 border-end" data-aos="fade-up">
        <div className="d-flex">
          <div className="col-md-3 flex-fill pt-3 pe-3 pe-md-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              fill="currentColor"
              className="bi bi-box-seam"
              viewBox="0 0 16 16"
            >
              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
            </svg>
          </div>
          <div className="col-md-9 flex-fill">
            <h3 className="h5 my-2">Delivery Service</h3>
            <p>
              If we had any physical goods we would deliver them to your door steps. Of course in time and to the right address. But we have no products...
            </p>
          </div>
        </div>
      </div>

      {/* Independently Checked Section */}
      <div
        className="col-md-6 col-lg-4 border-end"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="d-flex">
          <div className="col-md-3 flex-fill pt-3 pe-3 pe-md-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              fill="currentColor"
              className="bi bi-card-checklist"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
            </svg>
          </div>
          <div className="col-md-9 flex-fill">
            <h3 className="h5 my-2">Independently Checked</h3>
            <p>
              Maybe we would do something to ensure that you get what you ordered. But you can't order anything here, so we can give you a 100% guarantee that anything would be great!
            </p>
          </div>
        </div>
      </div>

      {/* Online Support Section */}
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
        <div className="d-flex">
          <div className="col-md-3 flex-fill pt-3 pe-3 pe-md-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              fill="currentColor"
              className="bi bi-window-sidebar"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
              <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z" />
            </svg>
          </div>
          <div className="col-md-9 flex-fill">
            <h3 className="h5 my-2">Online Support</h3>
            <p>
              Okay, we have this crazy online support form. Fill it out and the content will be mailed to you as PDF. Print it out. Then send it via Fax to our super-duper hidden Fax number.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          <div className="py-vh-4 bg-gray-100 w-100 overflow-hidden" id="aboutus">
  <div className="container">
    <div className="row d-flex justify-content-between align-items-center">
      {/* Left Column */}
      <div className="col-lg-6">
        <div className="row gx-5 d-flex">
          <div className="col-md-11">
            <div
              className="shadow ratio ratio-16x9 rounded bg-cover bp-center align-self-end"
              data-aos="fade-right"
              style={{
                backgroundImage: `url(${imge1})`,
                "--bs-aspect-ratio": "50%",
              }}
            ></div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div
              className="shadow ratio ratio-1x1 rounded bg-cover mt-5 bp-center float-end"
              data-aos="fade-up"
              style={{
                backgroundImage: `url(${imge2})`,
              }}
            ></div>
          </div>
          <div className="col-md-6">
            <div
              className="col-12 shadow ratio rounded bg-cover mt-5 bp-center"
              data-aos="fade-left"
              style={{
                backgroundImage: `url(${imge3})`,
                "--bs-aspect-ratio": "150%",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-lg-4">
        <h3
          className="py-5 border-top border-dark"
          data-aos="fade-left"
        >
          We did some interesting stuff in our field of work. For example, we collect a lot of these free photos and use them on our website.
        </h3>
        <p
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
        <p>
          <a
            href="#"
            className="link-fancy link-dark"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            Learn more
          </a>
        </p>
      </div>
    </div>
  </div>
</div>


<div className='footer' id="footer">
      <p>© 2024 Yam . All rights reserved. </p>
      <ul>
        <li>Terms of services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
        </main>
      </div>
    </>
  );
}

export default Template;
