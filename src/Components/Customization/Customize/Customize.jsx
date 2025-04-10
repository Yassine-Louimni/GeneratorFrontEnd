import React, { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage";
import "./PageBuilder.css";
import Navbar from "../../Navbar/Navbar";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const Editor = () => {
  const editorRef = useRef(null);
  const [websiteName, setWebsiteName] = useState("My Website");
  const [logo, setLogo] = useState(null);
  const [displayLogo, setDisplayLogo] = useState(true);
  const [displayName, setDisplayName] = useState(true);
  const [pages, setPages] = useState(["index"]);
  const [currentPage, setCurrentPage] = useState("index");

  useEffect(() => {
    if (!editorRef.current) {
      initializeEditor();
    } else {
      // When page changes, save current page and load new one
      const editor = editorRef.current;
      editor.store(() => {
        editor.load();
      });
    }
  }, [currentPage, websiteName, logo, displayLogo, displayName]);

  const initializeEditor = () => {
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
        stepsBeforeSave: 1,
        urlStore: `gjs-project-${currentPage}`,
        urlLoad: `gjs-project-${currentPage}`,
      },
      assetManager: {
        upload: true,
        storeOnChange: true,
        storeAfterUpload: true,
        uploadName: "files",
      },
      styleManager: {
        sectors: [
          {
            name: "General",
            properties: [
              {
                name: "Background",
                property: "background",
                type: "color",
              },
              {
                name: "Color",
                property: "color",
                type: "color",
              },
              {
                name: "Font Family",
                property: "font-family",
                type: "select",
                options: [
                  { value: "Arial, sans-serif", name: "Arial" },
                  { value: "Helvetica, sans-serif", name: "Helvetica" },
                  { value: "'Times New Roman', serif", name: "Times New Roman" },
                  { value: "'Courier New', monospace", name: "Courier New" },
                ],
              },
              {
                name: "Font Size",
                property: "font-size",
                type: "number",
                units: ["px", "em", "rem"],
              },
            ],
          },
          {
            name: "Dimension",
            properties: [
              {
                name: "Width",
                property: "width",
                type: "number",
                units: ["px", "%"],
              },
              {
                name: "Height",
                property: "height",
                type: "number",
                units: ["px", "%"],
              },
              {
                name: "Padding",
                property: "padding",
                type: "composite",
                properties: [
                  { name: "Top", property: "padding-top" },
                  { name: "Right", property: "padding-right" },
                  { name: "Bottom", property: "padding-bottom" },
                  { name: "Left", property: "padding-left" },
                ],
              },
              {
                name: "Margin",
                property: "margin",
                type: "composite",
                properties: [
                  { name: "Top", property: "margin-top" },
                  { name: "Right", property: "margin-right" },
                  { name: "Bottom", property: "margin-bottom" },
                  { name: "Left", property: "margin-left" },
                ],
              },
            ],
          },
          {
            name: "Extra",
            properties: [
              {
                name: "Box Shadow",
                property: "box-shadow",
                type: "shadow",
              },
              {
                name: "Border Radius",
                property: "border-radius",
                type: "composite",
                properties: [
                  { name: "Top Left", property: "border-top-left-radius" },
                  { name: "Top Right", property: "border-top-right-radius" },
                  { name: "Bottom Right", property: "border-bottom-right-radius" },
                  { name: "Bottom Left", property: "border-bottom-left-radius" },
                ],
              },
              {
                name: "Border",
                property: "border",
                type: "composite",
                properties: [
                  { name: "Width", property: "border-width" },
                  { name: "Style", property: "border-style" },
                  { name: "Color", property: "border-color" },
                ],
              },
              {
                name: "Transition",
                property: "transition",
                type: "composite",
                properties: [
                  { name: "Property", property: "transition-property" },
                  { name: "Duration", property: "transition-duration" },
                  { name: "Timing Function", property: "transition-timing-function" },
                ],
              },
            ],
          },
        ],
      },
      layerManager: {
        appendTo: "#layers",
      },
      traitManager: {
        appendTo: "#traits",
      },
    });

    const editor = editorRef.current;
    const blockManager = editor.BlockManager;

     

    // Add commands for page management
    editor.Commands.add("add-page", {
      run(editor, sender, options = {}) {
        const pageName = prompt("Enter page name (e.g., about, contact):");
        if (pageName && !pages.includes(pageName)) {
          setPages([...pages, pageName]);
          setCurrentPage(pageName);
        }
      },
    });

    editor.Commands.add("remove-page", {
      run(editor, sender, options = {}) {
        if (pages.length > 1) {
          const pageToRemove = currentPage;
          const newPages = pages.filter((page) => page !== pageToRemove);
          setPages(newPages);
          setCurrentPage(newPages[0]);
          localStorage.removeItem(`gjs-project-${pageToRemove}`);
        } else {
          alert("You can't delete the last page!");
        }
      },
    });

    // social media editor
    editor.DomComponents.addType('social-link', {
      isComponent: el => el.tagName === 'A' && el.querySelector('i'),
      model: {
        defaults: {
          traits: [
            {
              type: 'text',
              name: 'href',
              label: 'Link URL',
            },
            {
              type: 'select',
              name: 'icon',
              label: 'Icon',
              options: [
                { value: 'facebook-f', name: 'Facebook' },
                { value: 'twitter', name: 'Twitter' },
                { value: 'instagram', name: 'Instagram' },
                { value: 'linkedin-in', name: 'LinkedIn' },
                { value: 'youtube', name: 'YouTube' },
                { value: 'pinterest', name: 'Pinterest' },
                { value: 'tiktok', name: 'TikTok' },
              ]
            }
          ],
        },
      },
    });

    // Existing and new blocks
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

    blockManager.add("video", {
      label: "Video",
      content: `<video controls style="width: 100%;">
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>`,
      category: "Media",
    });

    blockManager.add("map", {
      label: "Google Map",
      content: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373510509!2d-73.9878446845938!3d40.7484404793279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
      category: "Media",
    });

    blockManager.add("social-icons", {
      label: "Social Icons",
      content: `<div style="display: flex; gap: 15px; justify-content: center; padding: 15px;">
                  <a href="#" style="color: #3b5998; font-size: 24px;"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" style="color: #1da1f2; font-size: 24px;"><i class="fab fa-twitter"></i></a>
                  <a href="#" style="color: #e1306c; font-size: 24px;"><i class="fab fa-instagram"></i></a>
                  <a href="#" style="color: #0077b5; font-size: 24px;"><i class="fab fa-linkedin-in"></i></a>
                  <a href="#" style="color: #ff0000; font-size: 24px;"><i class="fab fa-youtube"></i></a>
                </div>`,
      category: "Social",
    });

    // Add Font Awesome for icons
    const link = document.createElement("link");
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    if (editorRef.current) {
      const zip = new JSZip();
      const editor = editorRef.current;
      
      // Add current page
      const html = editor.getHtml();
      const css = editor.getCss();
      zip.file(`${currentPage}.html`, `<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}</body></html>`);
      
      // Add other pages
      for (const page of pages) {
        if (page !== currentPage) {
          // Temporarily switch to each page to get its content
          const current = currentPage;
          setCurrentPage(page);
          
          // Wait for the editor to load the page
          await new Promise(resolve => setTimeout(resolve, 500));
          
          const pageHtml = editor.getHtml();
          const pageCss = editor.getCss();
          zip.file(`${page}.html`, `<!DOCTYPE html><html><head><style>${pageCss}</style></head><body>${pageHtml}</body></html>`);
          
          // Switch back to current page
          setCurrentPage(current);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
      
      // Generate zip file
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "website.zip");
    }
  };

  return (
  <>
    <div className="dark-nav navbar-container">
      <Navbar />
    </div>
    <div className="containerCus">
      <div className="editor-panel" style={{ display: "flex", height: "100vh" }}>
        {/* Left Sidebar for Blocks */}
        <div
          id="blocks"
          style={{
            width: "300px",
            background: "#444",
            padding: "10px",
            resize: "horizontal",
            overflow: "auto",
          }}
        ></div>
        
        {/* Main Editor Area */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          {/* Page Management Toolbar */}
          <div style={{ 
            background: "#444", 
            color: "white", 
            padding: "10px", 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <select 
                value={currentPage} 
                onChange={(e) => setCurrentPage(e.target.value)}
                style={{ 
                  padding: "5px", 
                  marginRight: "10px",
                  background: "#333",
                  color: "white",
                  border: "1px solid #555"
                }}
              >
                {pages.map((page) => (
                  <option key={page} value={page}>{page}</option>
                ))}
              </select>
              <button 
                onClick={() => editorRef.current?.runCommand("add-page")}
                style={{ 
                  padding: "5px 10px", 
                  marginRight: "10px", 
                  background: "#4CAF50", 
                  color: "white", 
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Add Page
              </button>
              {pages.length > 1 && (
                <button 
                  onClick={() => editorRef.current?.runCommand("remove-page")}
                  style={{ 
                    padding: "5px 10px", 
                    background: "#f44336", 
                    color: "white", 
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Remove Page
                </button>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input 
                type="text" 
                value={websiteName} 
                onChange={(e) => setWebsiteName(e.target.value)}
                placeholder="Website Name"
                style={{ 
                  padding: "5px", 
                  marginRight: "10px",
                  background: "#333",
                  color: "white",
                  border: "1px solid #555",
                  borderRadius: "4px"
                }}
              />
              <label style={{ marginRight: "10px", display: "flex", alignItems: "center" }}>
                <input 
                  type="checkbox" 
                  checked={displayName} 
                  onChange={(e) => setDisplayName(e.target.checked)}
                  style={{ marginRight: "5px" }}
                /> 
                <span>Show Name</span>
              </label>
              <label style={{ marginRight: "10px", display: "flex", alignItems: "center" }}>
                <input 
                  type="checkbox" 
                  checked={displayLogo} 
                  onChange={(e) => setDisplayLogo(e.target.checked)}
                  style={{ marginRight: "5px" }}
                /> 
                <span>Show Logo</span>
              </label>
              {displayLogo && (
                <div style={{ position: "relative" }}>
                  <label style={{
                    padding: "5px 10px",
                    background: "#333",
                    color: "white",
                    borderRadius: "4px",
                    cursor: "pointer",
                    display: "inline-block"
                  }}>
                    Upload Logo
                    <input 
                      type="file" 
                      onChange={handleLogoUpload} 
                      accept="image/*"
                      style={{ 
                        position: "absolute",
                        opacity: 0,
                        width: "1px",
                        height: "1px"
                      }}
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
          
          {/* GrapesJS Editor */}
          <div
            id="editor"
            style={{
              flex: 1,
              overflow: "auto",
              background: "#444"
            }}
          ></div>
        </div>
        
        {/* Right Sidebar for Layers and Traits */}
        <div
          style={{
            width: "300px",
            background: "#444",
            padding: "10px",
            resize: "horizontal",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div id="layers" style={{ flex: 1, marginBottom: "10px" }}></div>
          <div id="traits" style={{ flex: 1 }}></div>
        </div>
      </div>
      
      {/* Download Button */}
      <div style={{ 
        display: "flex", 
        justifyContent: "flex-end", 
        padding: "10px", 
        background: "#222",
        borderTop: "1px solid #444"
      }}>
        <button 
          onClick={handleDownload} 
          style={{ 
            padding: "10px 20px", 
            background: "#4CAF50", 
            color: "white", 
            border: "none", 
            display: "flex", 
            alignItems: "center",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background 0.3s"
          }}
          onMouseOver={(e) => e.currentTarget.style.background = "#45a049"}
          onMouseOut={(e) => e.currentTarget.style.background = "#4CAF50"}
        >
          <i className="fas fa-download" style={{ marginRight: "8px", fontSize: "16px" }}></i>
          Download Website (ZIP)
        </button>
      </div>
    </div>

   
  </>
);
};

export default Editor;