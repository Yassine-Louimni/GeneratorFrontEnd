import React, { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage";
import "./PageBuilder.css";
import Navbar from "../../Navbar/Navbar";

const Editor = () => {
  const editorRef = useRef(null);
  const [websiteName, setWebsiteName] = useState("My Website");
  const [logo, setLogo] = useState(null);
  const [displayLogo, setDisplayLogo] = useState(true);
  const [displayName, setDisplayName] = useState(true);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = grapesjs.init({
        container: "#editor",
        height: "100vh",
        width: "auto",
        plugins: ["gjs-preset-webpage"],
        pluginsOpts: {
          "gjs-preset-webpage": {
            blocksBasicOpts: { flexGrid: true },
            navbarOpts: true,
          },
        },
        blockManager: {
          appendTo: "#blocks",
        },
        storageManager: {
          type: "local",
          autosave: true,
          autoload: true,
        },
      });

      const blockManager = editorRef.current.BlockManager;

      // Existing Blocks
      blockManager.add("hero-section", {
        label: "Hero Section",
        content: `<section style="padding: 50px; text-align: center; background-color: #f4f4f4;">
                    <h1>Hero Title</h1>
                    <p>Your hero description goes here.</p>
                  </section>`,
        category: "Sections",
      });

      blockManager.add("navbar", {
        label: "Navbar",
        content: `<nav style="display: flex; justify-content: space-between; padding: 10px; background-color: #333; color: white;">
                    ${displayLogo ? `<img src="${logo || "https://via.placeholder.com/50"}" alt="Logo" style="height: 40px;" />` : ""}
                    ${displayName ? `<span style="margin-left: 10px; font-size: 20px;">${websiteName}</span>` : ""}
                    <div>
                      <a href="#" style="margin: 0 15px; color: white;">Home</a>
                      <a href="#" style="margin: 0 15px; color: white;">About</a>
                      <a href="#" style="margin: 0 15px; color: white;">Contact</a>
                    </div>
                  </nav>`,
        category: "Sections",
      });

      blockManager.add("footer", {
        label: "Footer",
        content: `<footer style="padding: 20px; text-align: center; background-color: #222; color: white;">
                    <p>Footer Text Here</p>
                  </footer>`,
        category: "Sections",
      });

      blockManager.add("form", {
        label: "Contact Form",
        content: `<form style="padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
                    <label for="name">Name:</label><br>
                    <input type="text" id="name" name="name" style="width: 100%; margin-bottom: 10px;"><br>
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" name="email" style="width: 100%; margin-bottom: 10px;"><br>
                    <button type="submit" style="padding: 10px 20px; background-color: #333; color: white; border: none;">Submit</button>
                  </form>`,
        category: "Forms",
      });

      blockManager.add("link", {
        label: "Link",
        content: `<a href="#" style="color: blue;">New Link</a>`,
        category: "Basic",
      });

      blockManager.add("image", {
        label: "Image",
        content: `<img src="https://via.placeholder.com/150" alt="Placeholder Image" style="width: 100%;">`,
        category: "Basic",
      });

      // New Blocks
      blockManager.add("carousel-slider", {
        label: "Carousel/Slider",
        content: `<div style="display: flex; overflow-x: scroll;">
                    <img src="https://via.placeholder.com/300" alt="Slide 1" style="margin-right: 10px;">
                    <img src="https://via.placeholder.com/300" alt="Slide 2" style="margin-right: 10px;">
                    <img src="https://via.placeholder.com/300">
                  </div>`,
        category: "Media",
      });

      blockManager.add("testimonials", {
        label: "Testimonials",
        content: `<section style="padding: 20px; background-color: #f9f9f9;">
                    <blockquote style="font-style: italic; margin-bottom: 10px;">"This is a testimonial quote."</blockquote>
                    <cite>- John Doe</cite>
                  </section>`,
        category: "Sections",
      });

      blockManager.add("accordion", {
        label: "Accordion/FAQ",
        content: `<div>
                    <button style="width: 100%; padding: 10px;">Question 1</button>
                    <div style="padding: 10px; display: none;">Answer to Question 1</div>
                  </div>`,
        category: "Interactive",
      });

      blockManager.add("text-block", {
        label: "Text",
        content: `<div>
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <p>Paragraph text here.</p>
                  </div>`,
        category: "Basic",
      });
    }
  }, [websiteName, logo, displayLogo, displayName]);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (editorRef.current) {
      const editor = editorRef.current;
      const html = editor.getHtml();
      const css = editor.getCss();
      const blob = new Blob([`<style>${css}</style>${html}`], { type: "text/html" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "project.html";
      link.click();
    }
  };

  return (
    <>
      <div className="dark-nav navbar-container">
       <Navbar />
      </div>
      <div className="containerCus">
      <div className="editor-panel" style={{ display: "flex", height: "100vh" }}>
        {/* Resizable Sidebar for Blocks */}
        <div
          id="blocks"
          style={{
            width: "300px",
            background: "#f7f7f7",
            padding: "2px",
            resize: "horizontal",
            overflow: "auto",
          }}
        ></div>
        {/* GrapesJS Editor */}
        <div
          id="editor"
          style={{
            flex: 1,
            overflow: "auto",
            resize: "both",
          }}
        ></div>
      </div>
      {/* Button container directly under the editor */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <button onClick={handleDownload} style={{ padding: "10px 20px", background: "#333", color: "white", border: "none", display: "flex", alignItems: "center" }}>
          <i className="fas fa-download" style={{ marginRight: "5px", fontSize: "20px" }}></i>
          Download HTML & CSS
        </button>
      </div>
    </div>
    </>
  );
};

export default Editor;
