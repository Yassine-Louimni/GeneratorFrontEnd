import React, { useState, useEffect } from "react"; 
import { Helmet } from "react-helmet";
import AOS from "aos";
import themeCSS from './css/theme.min.css?raw';
import theme1CSS from './css/theme.css?raw';
import updateCSS from './css/UpdateTemplate.css?raw';
import "aos/dist/aos.css";
import "./css/theme.css";
import "./UpdateTemplate.css";
import slide from "./img/webp/interior11.webp";
import imge1 from "./img/webp/people15.webp";
import imge2 from "./img/webp/people15.webp";
import imge3 from "./img/webp/people4.webp";
import imge4 from "./img/webp/people15.webp";
import JSZip from "jszip";
import { saveAs } from "file-saver";


const UpdateTemplate = () => {
  const [variables, setVariables] = useState({
    image4: imge4,
    image5: slide,
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
    alert("Template updated successfully!");
    console.log("Updated Variables:", variables);
    // Vous pouvez ici ajouter une intégration backend pour sauvegarder les données.
  };
  
  const handleDownload = async () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="apple-touch-icon" sizes="180x180" href="./img/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="./img/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="./img/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="./img/favicon.png" />
    <title>${variables.slideText1}</title>
    <link rel="stylesheet" href="aos/dist/aos.css" />
    <link rel="stylesheet" href="css/theme.min.css">
    <link rel="stylesheet" href="css/UpdateTemplate.css" />
  </head>
  <body>
    <div data-bs-spy="scroll" data-bs-target="#navScroll">
      <!-- Navbar -->
      <nav id="navScroll" class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container">
         <a className="navbar-brand pe-4 fs-4" href="/"> <div className="navbar-brand pe-4 fs-4" data-aos="fade-right"   style="background-image: url(${variables.image4});"></div></a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <!-- Add navbar links dynamically here -->
              <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
              <li class="nav-item"><a class="nav-link" href="#aboutus">About us</a></li>
              <li class="nav-item"><a class="nav-link" href="#footer">Contact us</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Main Section -->
      <main>
        <div class="w-100 overflow-hidden bg-gray-100" id="top">
          <div class="container position-relative">
            <div class="col-12 col-lg-8 mt-0 h-100 position-absolute top-0 end-0 bg-cover" data-aos="fade-left" style="background-image: url(${variables.image5});"></div>
            <div class="row">
              <div class="col-lg-7 py-vh-6 position-relative" data-aos="fade-right">
                <h1 class="display-1 fw-bold mt-5"> ${variables.slideText1}</h1>
                <p class="lead">${variables.slideText2}</p>
                <h1 class="btn btn-dark btn-xl shadow me-3 rounded-0 my-5">Welcome</h1>
              </div>
            </div>
          </div>
        </div>

        <!-- Services Section -->
        <div class="small py-vh-3 w-100 overflow-hidden" id="services">
          <div class="container">
            <div class="row">
              <!-- Delivery Service Section -->
              <div class="col-md-6 col-lg-4 border-end" data-aos="fade-up">
                <div class="d-flex">
                  <div class="col-md-3 flex-fill pt-3 pe-3 pe-md-0">
                    <!-- SVG Icon Here -->
                  </div>
                  <div class="col-md-9 flex-fill">
                    <h3 class="h5 my-2">${variables.service1}</h3>
                    <p> ${variables.txtService1}</p>
                  </div>
                </div>
              </div>

              <!-- Independently Checked Section -->
              <div class="col-md-6 col-lg-4 border-end" data-aos="fade-up" data-aos-delay="200">
                <div class="d-flex">
                  <div class="col-md-3 flex-fill pt-3 pe-3 pe-md-0">
                    <!-- SVG Icon Here -->
                  </div>
                  <div class="col-md-9 flex-fill">
                    <h3 class="h5 my-2">${variables.service2}</h3>
                    <p> ${variables.txtService2}</p>
                  </div>
                </div>
              </div>

              <!-- Online Support Section -->
              <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
                <div class="d-flex">
                  <div class="col-md-3 flex-fill pt-3 pe-3 pe-md-0">
                    <!-- SVG Icon Here -->
                  </div>
                  <div class="col-md-9 flex-fill">
                    <h3 class="h5 my-2">${variables.service3}</h3>
                    <p>  ${variables.txtService3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- About Us Section -->
        <div class="py-vh-4 bg-gray-100 w-100 overflow-hidden" id="aboutus">
          <div class="container">
            <div class="row d-flex justify-content-between align-items-center">
              <!-- Left Column with Images -->
              <div class="col-lg-6">
                <div class="row gx-5 d-flex">
                  <div class="col-md-11">
                    <div class="shadow ratio ratio-16x9 rounded bg-cover bp-center align-self-end" data-aos="fade-right" style="background-image: url(${variables.image1});"></div>
                  </div>
                  <div class="col-md-5 offset-md-1">
                    <div class="shadow ratio ratio-1x1 rounded bg-cover mt-5 bp-center float-end" data-aos="fade-up" style="background-image: url(${variables.image2});"></div>
                  </div>
                  <div class="col-md-6">
                    <div class="col-12 shadow ratio rounded bg-cover mt-5 bp-center" data-aos="fade-left" style="background-image: url(${variables.image3});"></div>
                  </div>
                </div>
              </div>

              <!-- Right Column -->
              <div class="col-lg-4">
                <h3 class="py-5 border-top border-dark" data-aos="fade-left">${variables.aboutUs1} </h3>
                <p data-aos="fade-left" data-aos-delay="200"> ${variables.aboutUs}  </p>
                <p>
                  <a href="#" class="link-fancy link-dark" data-aos="fade-left" data-aos-delay="400">Learn more</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Section -->
        <div class="footer" id="footer">
          <p>${variables.address}</p>
          <ul>
            <li>Terms of services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </main>
    </div>

  </body>
</html>

    `;
    const zip = new JSZip();
    zip.file("template.html", htmlContent);
    zip.file("css/theme.min.css", themeCSS);
    zip.file("css/theme.min.css", theme1CSS);
    zip.file("css/UpdateTemplate.css", updateCSS);
// Ajouter dynamiquement les images uploadées
Object.entries(variables).forEach(([key, value]) => {
  if (key.startsWith("image") && value.startsWith("data:image/")) {
    const base64 = value.split(",")[1]; // Extraire uniquement la partie base64
    const extension = value.substring("data:image/".length, value.indexOf(";base64")); // Exemple: 'png', 'jpeg'
    zip.file(`img/${key}.${extension}`, base64, { base64: true });
  }
});
    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "template_site.zip");
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
  <form className="scrollable-form">
    <div className="mb-3">
      <label htmlFor="logo" className="form-label">
        Logo URL
      </label>
      <div key="image4" className="mb-2">
          <input
            type="file"
            className="form-control mt-2"
            onChange={(e) => handleImageChange(e, 4)}
          />
        <input
            type="text"
            className="form-control mt-2"
            placeholder="slide"
            name="slide"
            value={variables.image4}
            onChange={handleInputChange}
          />
        </div>

    </div>
    <div className="mb-3">
      <label htmlFor="slide" className="form-label">
        Slide Image URL
      </label>
      <div key="image5" className="mb-2">
          <input
            type="file"
            className="form-control mt-2"
            onChange={(e) => handleImageChange(e, 5)}
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="slide"
            name="slide"
            value={variables.image5}
            onChange={handleInputChange}
          />
        </div>
    
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
  <button
    type="button"
    className="btn btn-secondary"
    onClick={handleDownload}
  >
    Download
  </button>
</div>
  </form>
</div>
        










{/* UpdateTemplate.css */}

{/* Helmet manages <head> contents */}
<div className="col-9">
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
        <title>{variables.slideText1}</title>
      </Helmet>

      {/* Main Body Content */}
      <div data-bs-spy="scroll" data-bs-target="#navScroll">
      <nav id="navScroll" className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">
    <a className="navbar-brand pe-4 fs-4" href="/"> <div className="navbar-brand pe-4 fs-4" data-aos="fade-right"   style={{ backgroundImage: `url(${variables.image4})` }}></div></a>

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
        <li className="nav-item">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutus">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#footer">Contact us</a>
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
  style={{ backgroundImage: `url(${variables.image5})` }} // Utilisation correcte de l'image dans le style
></div>
              <div className="row">
                <div
                  className="col-lg-7 py-vh-6 position-relative"
                  data-aos="fade-right"
                >
                  <h1 className="display-1 fw-bold mt-5">
                    {variables.slideText1}
                  </h1>
                  <p className="lead">
                   {variables.slideText2}
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
            <h3 className="h5 my-2">{variables.service1}</h3>
            <p>
              {variables.txtService1}
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
            <h3 className="h5 my-2">{variables.service2}</h3>
            <p>
             {variables.txtService2}
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
            <h3 className="h5 my-2">{variables.service3}</h3>
            <p>
             {variables.txtService3}
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
                backgroundImage: `url(${variables.image1})`,
                "--bs-aspect-ratio": "50%",
              }}
            ></div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div
              className="shadow ratio ratio-1x1 rounded bg-cover mt-5 bp-center float-end"
              data-aos="fade-up"
              style={{
                backgroundImage: `url(${variables.image2})`,
              }}
            ></div>
          </div>
          <div className="col-md-6">
            <div
              className="col-12 shadow ratio rounded bg-cover mt-5 bp-center"
              data-aos="fade-left"
              style={{
                backgroundImage: `url(${variables.image3})`,
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
         {variables.aboutUs1}  </h3>
        <p
          data-aos="fade-left"
          data-aos-delay="200"
        >
          {variables.aboutUs}   </p>
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
      <p>{variables.address}</p>
      <ul>
        <li>Terms of services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
        </main>
      </div>
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default UpdateTemplate;
