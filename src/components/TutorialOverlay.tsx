import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface TutorialOverlayProps {
  showTutorialPrompt: boolean;
  startTour: () => void;
  skipTutorial: () => void;
}

const TutorialOverlay = ({ showTutorialPrompt, startTour, skipTutorial }: TutorialOverlayProps) => {
  if (!showTutorialPrompt) return null;

  return (
    <AnimatePresence>
      {showTutorialPrompt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-md mx-4"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-8 h-8">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Welcome to Tailwind Editor</h2>
              <p className="text-muted-foreground mb-6">
                Would you like to take a quick tour to learn how to use the editor?
              </p>
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 justify-center">
                <Button onClick={startTour} className="apple-button" size="lg">
                  Start Tour
                </Button>
                <Button
                  onClick={skipTutorial}
                  variant="outline"
                  size="lg"
                  className="transition-all duration-300 hover:bg-secondary"
                >
                  Skip Tour
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TutorialOverlay;
