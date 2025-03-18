
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { LightbulbIcon } from "lucide-react";

interface TutorialOverlayProps {
  showTutorialPrompt: boolean;
  startTour: () => void;
  skipTutorial: () => void;
}

const TutorialOverlay = ({ showTutorialPrompt, startTour, skipTutorial }: TutorialOverlayProps) => {
  return (
    <AnimatePresence>
      {showTutorialPrompt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
        >
          <motion.div
            className="absolute inset-0 bg-black/30 backdrop-blur-[8px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={skipTutorial}
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              delay: 0.1
            }}
            className="relative bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl overflow-hidden w-full max-w-md backdrop-blur-xl border border-gray-200 dark:border-gray-800"
            style={{
              boxShadow: "0 20px 80px -10px rgba(0,0,0,0.3)"
            }}
          >
            <motion.div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />

            <div className="p-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-blue-50 dark:bg-blue-900/30"
              >
                <LightbulbIcon className="w-10 h-10 text-blue-500 dark:text-blue-400" />
              </motion.div>

              <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-medium text-center mb-2 tracking-tight text-gray-900 dark:text-white"
              >
                Welcome to Tailwind Editor
              </motion.h2>

              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 dark:text-gray-300 text-center mb-8 leading-relaxed"
              >
                Would you like to take a quick tour to learn the essential features of the editor?
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={startTour}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:from-blue-700 hover:to-blue-600 h-12"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  Start Tour
                </Button>
                <Button
                  onClick={skipTutorial}
                  variant="outline"
                  className="border border-gray-200 dark:border-gray-700 rounded-xl bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 px-6 py-2 h-12"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  Skip for Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TutorialOverlay;
