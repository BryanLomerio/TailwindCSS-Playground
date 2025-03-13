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
    </>
  );
};

export default Tutorial;
