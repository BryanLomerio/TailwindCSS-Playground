import { useState } from "react";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";
import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import Preview from "@/components/Preview";
import ComponentLibrary from "@/components/ComponentLibrary";
import ColorPalette from "@/components/ColorPalette";

const Index = () => {
  const [activeTab, setActiveTab] = useState("editor");
  const [htmlCode, setHtmlCode] = useState(`<!-- Solo Leveling Fan Page -->
<!-- Try editing this code to see the changes in real-time -->
<!-- You can use either React's className or HTML's class attributes in this playground. -->
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
</div>`);
  const [tourActive, setTourActive] = useState(false);

  const startTour = () => {
    setTourActive(true);

    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: { enabled: true },
        classes: "shepherd-theme-arrows",
        scrollTo: { behavior: "smooth", block: "center" }
      }
    });

    tour.on("show", function() {
      const step = tour.getCurrentStep();
      const targetSelector = step.options.attachTo?.element;
      if (targetSelector) {
        const target = document.querySelector(targetSelector);
        if (target) {
          target.classList.add("no-blur");
        }
      }
    });

    tour.on("hide", function() {
      const step = tour.getCurrentStep();
      const targetSelector = step.options.attachTo?.element;
      if (targetSelector) {
        const target = document.querySelector(targetSelector);
        if (target) {
          target.classList.remove("no-blur");
        }
      }
    });

    tour.on("complete", () => setTourActive(false));
    tour.on("cancel", () => setTourActive(false));

    // Step 1
    tour.addStep({
      id: "step-code-editor",
      text: "This is the Code Editor where you can write your HTML code.",
      attachTo: { element: ".code-editor", on: "right" },
      buttons: [{ text: "Next", action: tour.next }]
    });

    // Step 2
    tour.addStep({
      id: "step-preview",
      text: "This is the Preview section where you can see live changes.",
      attachTo: { element: ".preview", on: "left" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next }
      ]
    });

    // Step 3
    tour.addStep({
      id: "step-nav-editor",
      text: "Click here to switch to the Editor tab.",
      attachTo: { element: ".tab-editor", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next }
      ]
    });

    // Step 4
    tour.addStep({
      id: "step-nav-components",
      text: "This is the Components tab where you can view various UI components.",
      attachTo: { element: ".tab-components", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next }
      ]
    });

    // Step 5
    tour.addStep({
      id: "step-nav-colors",
      text: "Here you can see and select different color palettes.",
      attachTo: { element: ".tab-colors", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next }
      ]
    });

    // Step 6
    tour.addStep({
      id: "step-copy-button",
      text: "This button copies the HTML code to your clipboard.",
      attachTo: { element: ".btn-copy", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next }
      ]
    });

    // Step 7
    tour.addStep({
      id: "step-save-button",
      text: "Click here to save your code.",
      attachTo: { element: ".btn-save", on: "bottom" },
      buttons: [
        { text: "Back", action: tour.back },
        { text: "Next", action: tour.next }
      ]
    });

    // Step 8
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

  return (
    <>
      {/* Styles for the overlay and to ensure highlighted elements are above it */}
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
      `}</style>

      {tourActive && <div className="blur-overlay" />}

      <div className="app-content relative flex flex-col min-h-screen bg-background">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          htmlCode={htmlCode}
        />

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

      <div className="fixed bottom-20 right-4 z-50">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
          onClick={startTour}
        >
          Start Tour
        </button>
      </div>
    </>
  );
};

export default Index;
