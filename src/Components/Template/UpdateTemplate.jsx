import React, { useState, useEffect } from "react"; 
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/theme.css";
import "./UpdateTemplate.css";
import slide from "./img/webp/interior11.webp";
import imge1 from "./img/webp/people15.webp";
import imge2 from "./img/webp/people15.webp";
import imge3 from "./img/webp/people4.webp";

const UpdateTemplate = () => {
  const [variables, setVariables] = useState({
    logo: "default-logo.png",
    slide: slide,
    slideText1: "Default slide text 1",
    slideText2: "Default slide text 2",
    service1: "Service 1",
    txtService1: "Description for service 1",
    service2: "Service 2",
    txtService2: "Description for service 2",
    service3: "Service 3",
    txtService3: "Description for service 3",
    aboutUs1: "About Us Title",
    aboutUs: "About Us Description",
    image1: imge1,
    image2: imge2,
    image3: imge3,
    address: "Default address",
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVariables({ ...variables, [name]: value });
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVariables((prevState) => ({
          ...prevState,
          [`image${index}`]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    alert("Template updated!");
    // Add backend integration here if needed
  };

  return (
   
    <div>
    <Helmet>
      <title>Update Template</title>
    </Helmet>

    <div className="container mt-4">
      <div className="row">
        {/* Section formulaire */}
        <div className="col-3">
          <h3>Customize Template</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="logo" className="form-label">
                Logo URL
              </label>
              <input
                type="text"
                className="form-control"
                id="logo"
                name="logo"
                value={variables.logo}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="slide" className="form-label">
                Slide Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="slide"
                name="slide"
                value={variables.slide}
                onChange={handleInputChange}
              />
              <textarea
                className="form-control mt-2"
                name="slideText1"
                rows="2"
                placeholder="Slide Text 1"
                value={variables.slideText1}
                onChange={handleInputChange}
              ></textarea>
              <textarea
                className="form-control mt-2"
                name="slideText2"
                rows="2"
                placeholder="Slide Text 2"
                value={variables.slideText2}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Services</label>
              {[1, 2, 3].map((i) => (
                <div key={`service${i}`} className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Service ${i} Name`}
                    name={`service${i}`}
                    value={variables[`service${i}`]}
                    onChange={handleInputChange}
                  />
                  <textarea
                    className="form-control mt-2"
                    placeholder={`Service ${i} Description`}
                    name={`txtService${i}`}
                    rows="2"
                    value={variables[`txtService${i}`]}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              ))}
            </div>
            <div className="mb-3">
              <label htmlFor="aboutUs" className="form-label">
                About Us Content
              </label>
              <textarea
                className="form-control"
                name="aboutUs1"
                rows="2"
                placeholder="About Us Title"
                value={variables.aboutUs1}
                onChange={handleInputChange}
              ></textarea>
              <textarea
                className="form-control mt-2"
                name="aboutUs"
                rows="3"
                placeholder="About Us Description"
                value={variables.aboutUs}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">About Us Images</label>
              {[1, 2, 3].map((i) => (
                <div key={`image${i}`} className="mb-2">
                  <input
                    type="file"
                    className="form-control mt-2"
                    onChange={(e) => handleImageChange(e, i)}
                  />
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder={`Image ${i} URL (Optional)`}
                    name={`image${i}`}
                    value={variables[`image${i}`]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Footer Address
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                rows="2"
                value={variables.address}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </form>
        </div>
        










{/* UpdateTemplate.css */}

{/* Helmet manages <head> contents */}
<div className="col-9">
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
    className="navbar navbar-expand-lg  "
  >
    <div className="container">
      <a className="navbar-brand pe-4 fs-4" href="/">
        <img
          src={variables.logo}
          alt="Logo"
          style={{ height: "50px" }}
        />
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
          style={{
            backgroundImage: `url(${variables.slide})`,
            backgroundSize: "cover",
          }}
        >
          <div className="row">
            <div
              className="col-lg-7 py-vh-6 position-relative"
              data-aos="fade-right"
            >
              <h1 className="display-1 fw-bold mt-5">
                {variables.slideText1}
              </h1>
              <p className="lead">{variables.slideText2}</p>
              <h1 className="btn btn-dark btn-xl shadow me-3 rounded-0 my-5">
                Welcome
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="small py-vh-3 w-100 overflow-hidden" id="services">
      <div className="container">
        <div className="row">
          {/* Delivery Service Section */}
          {[1, 2, 3].map((i) => (
            <div
              key={`service-preview-${i}`}
              className="col-md-4 mb-4"
              data-aos="fade-up"
            >
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
                    <h3 className="h5 my-2">{variables[`service${i}`]}</h3>
                    <p>{variables[`txtService${i}`]}</p>
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
                      <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <div className="col-md-9 flex-fill">
                    <h3 className="h5 my-2">{variables[`service2${i}`]}</h3>
                    <p>{variables[`txtService2${i}`]}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>
</div>


  <div className="py-vh-4 bg-gray-100 w-100 overflow-hidden" id="aboutus">
<div className="container">
<div className="row d-flex justify-content-between align-items-center">
{/* Left Column */}
{[1, 2, 3].map((i) => (
    <div key={`about-image-${i}`} className="col-md-4">
      <img
        src={variables[`image${i}`]}
        alt={`About Us ${i}`}
        className="img-fluid"
      />

<div className="col-lg-6">
    <div className="row gx-5 d-flex">
      <div className="col-md-11">
        <div
          className="shadow ratio ratio-16x9 rounded bg-cover bp-center align-self-end"
          data-aos="fade-right"
        >
          <img
            src={variables[`image${i}`]}
            alt={`About Us ${i}`}
            className="img-fluid"
          />
        </div>
      </div>
      <div className="col-md-5 offset-md-1">
        <div
          className="shadow ratio ratio-1x1 rounded bg-cover mt-5 bp-center float-end"
          data-aos="fade-up"
        >
          <img
            src={variables[`image${i}`]}
            alt={`About Us ${i}`}
            className="img-fluid"
          />
        </div>
      </div>
      <div className="col-md-6">
        <div
          className="col-12 shadow ratio rounded bg-cover mt-5 bp-center"
          data-aos="fade-left"
        >
          <img
            src={variables[`image${i}`]}
            alt={`About Us ${i}`}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>

</div>
))}


{/* Right Column */}
<div className="col-lg-4">
<h3
  className="py-5 border-top border-dark"
  data-aos="fade-left"
>      
{variables.aboutUs1}
</h3>
<p
  data-aos="fade-left"
  data-aos-delay="200"
>
{variables.aboutUs}
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
<p>{variables.address} </p>
<ul>
<li>Terms of services</li>
<li>Privacy Policy</li>
</ul>
</div>
</div>
</div>
      </div>
    </div>
  );
};

export default UpdateTemplate;