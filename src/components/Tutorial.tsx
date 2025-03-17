import { useState, useEffect } from "react";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";

const Tutorial = () => {
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

    tour.on("show", () => {
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
      {tourActive && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" />
      )}
      {showTutorialPrompt && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-4 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Tutorial</h2>
            <p className="mb-6 text-gray-600">
              Would you like to view the tutorial?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={startTour}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
              >
                Start Tutorial
              </button>
              <button
                onClick={skipTutorial}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200"
              >
                Skip Tutorial
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Tutorial;
