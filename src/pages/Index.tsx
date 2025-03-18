import { useState, useEffect } from "react";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";
import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import Preview from "@/components/Preview";
import ComponentLibrary from "@/components/ComponentLibrary";
import ColorPalette from "@/components/ColorPalette";
import TutorialOverlay from "@/components/TutorialOverlay";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

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
      const timer = setTimeout(() => {
        setShowTutorialPrompt(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const savedCode = localStorage.getItem("savedCode");
    if (savedCode) {
      setHtmlCode(savedCode);
    }
  }, []);

  const startTour = () => {
    setTourActive(true);
    setShowTutorialPrompt(false);
    localStorage.setItem("tutorialSeen", "true");

    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: "shepherd-theme-custom",
        scrollTo: {
          behavior: "smooth",
          block: "center"
        },
        when: {
          show() {
            const currentStep = tour.getCurrentStep();
            const element = currentStep?.getElement();
            if (element) {
              element.style.zIndex = "10000";
            }
          }
        }
      },
      useModalOverlay: true
    });

    tour.on("complete", () => {
      setTourActive(false);
      document.querySelectorAll(".shepherd-active").forEach(el => el.classList.remove("shepherd-active"));
      toast.success("Tutorial completed! You're all set.");
    });

    tour.on("cancel", () => {
      setTourActive(false);
      document.querySelectorAll(".shepherd-active").forEach(el => el.classList.remove("shepherd-active"));
    });

    tour.addStep({
      id: "welcome",
      text: `
        <div class="text-center mb-4">
          <h3 class="text-lg font-bold mb-2">Welcome to Tailwind Editor</h3>
          <p>This brief tour will help you get familiar with the interface.</p>
        </div>
      `,
      buttons: [
        {
          text: "Let's Start",
          action: tour.next,
          classes: "shepherd-button-primary"
        }
      ]
    });

    tour.addStep({
      id: "step-code-editor",
      text: `
        <div>
          <h3 class="text-lg font-bold mb-2">Code Editor</h3>
          <p>This is where you write your HTML with Tailwind CSS classes. Changes appear live in the preview panel.</p>
        </div>
      `,
      attachTo: {
        element: ".code-editor",
        on: "right"
      },
      buttons: [
        {
          text: "Next",
          action: tour.next,
          classes: "shepherd-button-primary"
        }
      ]
    });

    tour.addStep({
      id: "step-preview",
      text: `
        <div>
          <h3 class="text-lg font-bold mb-2">Live Preview</h3>
          <p>See your changes instantly in this preview panel. It updates as you type.</p>
        </div>
      `,
      attachTo: {
        element: ".preview",
        on: "left"
      },
      buttons: [
        {
          text: "Back",
          action: tour.back,
          classes: "shepherd-button-secondary"
        },
        {
          text: "Next",
          action: tour.next,
          classes: "shepherd-button-primary"
        }
      ]
    });

    tour.addStep({
      id: "step-nav-editor",
      text: `
        <div>
          <h3 class="text-lg font-bold mb-2">Editor Tab</h3>
          <p>Return to the code editor view anytime by clicking here.</p>
        </div>
      `,
      attachTo: {
        element: ".tab-editor",
        on: "bottom"
      },
      buttons: [
        {
          text: "Back",
          action: tour.back,
          classes: "shepherd-button-secondary"
        },
        {
          text: "Next",
          action: tour.next,
          classes: "shepherd-button-primary"
        }
      ]
    });

    tour.addStep({
      id: "step-nav-components",
      text: `
        <div>
          <h3 class="text-lg font-bold mb-2">Components Tab</h3>
          <p>Browse and copy pre-built components to use in your designs.</p>
        </div>
      `,
      attachTo: {
        element: ".tab-components",
        on: "bottom"
      },
      buttons: [
        {
          text: "Back",
          action: tour.back,
          classes: "shepherd-button-secondary"
        },
        {
          text: "Next",
          action: tour.next,
          classes: "shepherd-button-primary"
        }
      ]
    });

    tour.addStep({
      id: "step-nav-colors",
      text: `
        <div>
          <h3 class="text-lg font-bold mb-2">Colors Tab</h3>
          <p>Explore color palettes and copy color values to your clipboard.</p>
        </div>
      `,
      attachTo: {
        element: ".tab-colors",
        on: "bottom"
      },
      buttons: [
        {
          text: "Back",
          action: tour.back,
          classes: "shepherd-button-secondary"
        },
        {
          text: "Next",
          action: tour.next,
          classes: "shepherd-button-primary"
        }
      ]
    });

    tour.addStep({
      id: "step-copy-button",
      text: `
        <div>
          <h3 class="text-lg font-bold mb-2">Copy Code</h3>
          <p>Quickly copy your HTML code to the clipboard.</p>
        </div>
      `,
      attachTo: {
        element: ".btn-copy",
        on: "bottom"
      },
      buttons: [
        {
          text: "Back",
          action: tour.back,
          classes: "shepherd-button-secondary"
        },
        {
          text: "Next",
          action: tour.next,
          classes: "shepherd-button-primary"
        }
      ]
    });

    tour.addStep({
      id: "step-save-button",
      text: `
        <div>
          <h3 class="text-lg font-bold mb-2">Save Code</h3>
          <p>Save your code locally to continue later.</p>
        </div>
      `,
      attachTo: {
        element: ".btn-save",
        on: "bottom"
      },
      buttons: [
        {
          text: "Back",
          action: tour.back,
          classes: "shepherd-button-secondary"
        },
        {
          text: "Next",
          action: tour.next,
          classes: "shepherd-button-primary"
        }
      ]
    });

    tour.addStep({
      id: "step-help-button",
      text: `
        <div>
          <h3 class="text-lg font-bold mb-2">Tutorial Button</h3>
          <p>Start this tutorial again anytime by clicking here.</p>
        </div>
      `,
      attachTo: {
        element: ".btn-help",
        on: "bottom"
      },
      buttons: [
        {
          text: "Back",
          action: tour.back,
          classes: "shepherd-button-secondary"
        },
        {
          text: "Finish Tour",
          action: tour.complete,
          classes: "shepherd-button-primary"
        }
      ]
    });

    tour.addStep({
      id: "step-github",
      text: `
        <div>
          <h3 class="text-lg font-bold mb-2">GitHub Button</h3>
          <p>This button links to our GitHub repository. Click here to view our source code and contribute!</p>
        </div>
      `,
      attachTo: {
        element: ".btn-github",
        on: "bottom"
      },
      buttons: [
        { text: "Back", action: tour.back, classes: "shepherd-button-secondary" },
        { text: "Next", action: tour.next, classes: "shepherd-button-primary" }
      ]
    });

    tour.addStep({
      id: "step-theme-toggle",
      text: `
        <div>
          <h3 class="text-lg font-bold mb-2">Dark/Light Mode Toggle</h3>
          <p>Use this toggle to switch between Dark and Light modes to suit your preference.</p>
        </div>
      `,
      attachTo: {
        element: ".theme-toggle",
        on: "bottom"
      },
      buttons: [
        { text: "Back", action: tour.back, classes: "shepherd-button-secondary" },
        { text: "Next", action: tour.next, classes: "shepherd-button-primary" }
      ]
    });

    tour.start();
  };

  const skipTutorial = () => {
    setShowTutorialPrompt(false);
    localStorage.setItem("tutorialSeen", "true");
    toast.info("You can start the tutorial anytime by clicking the Tutorial button.");
  };

  return (
    <>
      <style>{`
        .shepherd-theme-custom {
          --shepherd-bg: #ffffff;
          --shepherd-text: #333333;
          --shepherd-header-bg: #f8f9fa;
          --shepherd-header-text: #333333;
          --shepherd-button-primary-bg: #3b82f6;
          --shepherd-button-primary-text: white;
          --shepherd-button-secondary-bg: #f1f5f9;
          --shepherd-button-secondary-text: #334155;
        }

        .shepherd-theme-custom .shepherd-content {
          border-radius: 0.75rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          padding: 0;
          width: 350px;
        }

        .shepherd-theme-custom .shepherd-text {
          padding: 1.5rem;
          line-height: 1.6;
        }

        .shepherd-theme-custom .shepherd-footer {
          border-top: 1px solid #e2e8f0;
          padding: 0.75rem;
          display: flex;
          justify-content: flex-end;
        }

        .shepherd-theme-custom .shepherd-button {
          border-radius: 0.375rem;
          font-weight: 500;
          font-size: 0.875rem;
          padding: 0.5rem 1rem;
          transition: all 0.2s;
          margin-left: 0.5rem;
        }

        .shepherd-theme-custom .shepherd-button-primary {
          background-color: var(--shepherd-button-primary-bg);
          color: var(--shepherd-button-primary-text);
        }

        .shepherd-theme-custom .shepherd-button-primary:hover {
          background-color: #2563eb;
        }

        .shepherd-theme-custom .shepherd-button-secondary {
          background-color: var(--shepherd-button-secondary-bg);
          color: var(--shepherd-button-secondary-text);
        }

        .shepherd-theme-custom .shepherd-button-secondary:hover {
          background-color: #e2e8f0;
        }

        .shepherd-theme-custom .shepherd-cancel-icon {
          color: #94a3b8;
          transition: color 0.2s;
        }

        .shepherd-theme-custom .shepherd-cancel-icon:hover {
          color: #475569;
        }

        .shepherd-modal-overlay-container {
          backdrop-filter: blur(4px);
          background-color: rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease-out;
        }
      `}</style>

      <TutorialOverlay
        showTutorialPrompt={showTutorialPrompt}
        startTour={startTour}
        skipTutorial={skipTutorial}
      />

      <div className="app-content relative flex flex-col min-h-screen bg-background">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          htmlCode={htmlCode}
          startTour={startTour}
        />

        <main className="flex-1 p-4 overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "editor" ? (
              <motion.div
                key="editor"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(100vh-9rem)]"
              >
                <div className="overflow-hidden shadow-lg rounded-lg code-editor">
                  <CodeEditor onChange={setHtmlCode} initialValue={htmlCode} />
                </div>
                <div className="overflow-hidden shadow-lg rounded-lg preview">
                  <Preview htmlCode={htmlCode} />
                </div>
              </motion.div>
            ) : activeTab === "components" ? (
              <motion.div
                key="components"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-1 md:col-span-2 h-[calc(100vh-9rem)] overflow-auto"
              >
                <ComponentLibrary />
              </motion.div>
            ) : (
              <motion.div
                key="colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-1 md:col-span-2 h-[calc(100vh-9rem)] overflow-auto"
              >
                <ColorPalette />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </>
  );
};

export default Index;
