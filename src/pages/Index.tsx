import { useState, useEffect } from "react";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";
import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import Preview from "@/components/Preview";
import ComponentLibrary from "@/components/ComponentLibrary";
import ColorPalette from "@/components/ColorPalette";

const Index = () => {
  const [activeTab, setActiveTab] = useState("editor");
  const [htmlCode, setHtmlCode] = useState(`
<div class="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2025/02/solo-leveling-ragnarok-sequel-epilogue-jinwoo-suho.jpg?q=70&fit=crop&w=1140&h=&dpr=1" alt="Solo Leveling">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Solo Leveling</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">The Rise of Sung Jin-Woo</a>
      <p class="mt-2 text-slate-500">Explore the epic journey of Sung Jin-Woo, the weakest hunter turned unstoppable force in this action-packed manhwa.</p>
      <button class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
        Discover More
      </button>
    </div>
  </div>
</div>
`);
  const [tourActive, setTourActive] = useState(false);
  const [showTutorialPrompt, setShowTutorialPrompt] = useState(false);

  useEffect(() => {
    const tutorialSeen = localStorage.getItem("tutorialSeen");
    if (!tutorialSeen) {
      setShowTutorialPrompt(true);
    }
  }, []);

  const startTour = () => {
    setTourActive(true);
    setShowTutorialPrompt(false);
    localStorage.setItem("tutorialSeen", "true");
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: { enabled: true },
        classes: "shepherd-theme-arrows",
        scrollTo: { behavior: "smooth", block: "center" }
      }
    });
    tour.on("show", function() {
      document.querySelectorAll(".no-blur").forEach(el => el.classList.remove("no-blur"));
      const step = tour.getCurrentStep();
      const targetSelector = step.options.attachTo?.element;
      if (targetSelector) {
        const target = document.querySelector(targetSelector);
        if (target) {
          target.classList.add("no-blur");
        }
      }
    });
    tour.on("complete", () => {
      setTourActive(false);
      document.querySelectorAll(".no-blur").forEach(el => el.classList.remove("no-blur"));
    });
    tour.on("cancel", () => {
      setTourActive(false);
      document.querySelectorAll(".no-blur").forEach(el => el.classList.remove("no-blur"));
    });
    tour.addStep({
      id: "step-code-editor",
      text: "This is the Code Editor where you can write your HTML code.",
      attachTo: { element: ".code-editor", on: "right" },
      buttons: [{ text: "Next", action: tour.next }]
    });
    tour.addStep({
      id: "step-preview",
      text: "This is the Preview section where you can see live changes.",
      attachTo: { element: ".preview", on: "left" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next }
      ]
    });
    tour.addStep({
      id: "step-nav-editor",
      text: "Click here to switch to the Editor tab.",
      attachTo: { element: ".tab-editor", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next }
      ]
    });
    tour.addStep({
      id: "step-nav-components",
      text: "This is the Components tab where you can view various UI components.",
      attachTo: { element: ".tab-components", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next }
      ]
    });
    tour.addStep({
      id: "step-nav-colors",
      text: "Here you can see and select different color palettes.",
      attachTo: { element: ".tab-colors", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next }
      ]
    });
    tour.addStep({
      id: "step-copy-button",
      text: "This button copies the HTML code to your clipboard.",
      attachTo: { element: ".btn-copy", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next }
      ]
    });
    tour.addStep({
      id: "step-save-button",
      text: "Click here to save your code.",
      attachTo: { element: ".btn-save", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next }
      ]
    });
    tour.addStep({
      id: "step-github-button",
      text: "This button links to the GitHub repository.",
      attachTo: { element: ".btn-github", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Done", action: tour.complete }
      ]
    });
    tour.start();
  };

  const skipTutorial = () => {
    setShowTutorialPrompt(false);
    localStorage.setItem("tutorialSeen", "true");
  };

  return (
    <>
      <style>{`
        .blur-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(5px);
          z-index: 100;
          pointer-events: none;
        }
        .no-blur {
          position: relative;
          z-index: 101 !important;
        }
        .shepherd-theme-arrows .shepherd-content {
          background-color: #272727;
          color: #fff;
        }
        .shepherd-theme-arrows .shepherd-content * {
          color: #fff !important;
        }
        .shepherd-theme-arrows .shepherd-button {
          background-color: #1e1e1e;
          color: #fff;
          border: none;
        }
        .shepherd-theme-arrows .shepherd-button:hover {
          background-color: #333;
        }
        .shepherd-theme-arrows .shepherd-arrow {
          color: #1e1e1e !important;
        }
        .shepherd-theme-arrows .shepherd-arrow svg,
        .shepherd-theme-arrows .shepherd-arrow svg path,
        .shepherd-theme-arrows .shepherd-arrow svg polygon {
          fill: #1e1e1e !important;
          stroke: #1e1e1e !important;
        }
        .tutorial-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tutorial-modal {
          background: #272727;
          color: #fff;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          max-width: 300px;
          width: 100%;
        }
        .tutorial-modal button {
          background: #1e1e1e;
          color: #fff;
          border: none;
          padding: 10px 20px;
          margin: 10px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .tutorial-modal button:hover {
          background: #333;
        }
      `}</style>
      {tourActive && <div className="blur-overlay" />}
      {showTutorialPrompt && (
        <div className="tutorial-modal-overlay">
          <div className="tutorial-modal">
            <h2>Tutorial</h2>
            <p>Would you like to view the tutorial?</p>
            <button onClick={startTour}>Start Tutorial</button>
            <button onClick={skipTutorial}>Skip Tutorial</button>
          </div>
        </div>
      )}
      <div className="app-content relative flex flex-col min-h-screen bg-background">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} htmlCode={htmlCode} />
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-hidden">
          {activeTab === "editor" ? (
            <>
              <div className="h-[calc(100vh-9rem)] overflow-hidden code-editor">
                <CodeEditor onChange={setHtmlCode} initialValue={htmlCode} />
              </div>
              <div className="h-[calc(100vh-9rem)] overflow-hidden preview">
                <Preview htmlCode={htmlCode} />
              </div>
            </>
          ) : activeTab === "components" ? (
            <div className="col-span-1 md:col-span-2 h-[calc(100vh-9rem)] overflow-hidden">
              <ComponentLibrary />
            </div>
          ) : (
            <div className="col-span-1 md:col-span-2 h-[calc(100vh-9rem)] overflow-hidden">
              <ColorPalette />
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Index;
