import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Copy, Github, Save } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  htmlCode: string;
  startTour: () => void;
}

const Header = ({ activeTab, setActiveTab, htmlCode, startTour }: HeaderProps) => {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);

  const copyToClipboard = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await navigator.clipboard.writeText(htmlCode);
      toast({
        title: "Copied to clipboard",
        description: "The HTML code has been copied to your clipboard",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard",
        variant: "destructive",
      });
    } finally {
      e.currentTarget.blur();

      e.currentTarget.style.overflow = "";
      e.currentTarget.style.paddingRight = "";
    }

  };

  const saveCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      setSaving(true);
      const blob = new Blob([htmlCode], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "code.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Code downloaded",
        description: "Your code has been downloaded successfully",
      });
    } catch (err) {
      toast({
        title: "Failed to save",
        description: "Could not download your code",
        variant: "destructive",
      });
    } finally {
      setSaving(false);

      e.currentTarget.blur();
    }
  };

  return (
    <header className="border-b border-white backdrop-blur-sm sticky top-0 z-10 transition-all duration-300 ease-in-out dark:border-gray-700 dark:bg-[#272727] dark:text-gray-100">
      <div className="max-w-full mx-auto px-4 sm:px-6 py-3 border-b dark:border-gray-500">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-xl font-semibold tracking-tight">Tailwind Playground</h1>
            <span className="text-xs text-muted-foreground mt-0.5 dark:text-gray-400">
              by AninoDev
            </span>
          </div>

          <Tabs
            defaultValue={activeTab}
            className="w-full sm:w-auto mt-2 sm:mt-0"
            onValueChange={setActiveTab}
          >
            <TabsList className="w-full sm:w-auto grid grid-cols-3 h-9 overflow-hidden items-center text-center rounded-md dark:bg-[#1e1e1e]">
              {["editor", "components", "colors"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className={cn(
                    `tab-${tab}`,
                    "capitalize px-4 py-1.5 text-sm font-medium transition-all duration-200 relative",
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent after:transition-all after:duration-200",
                    "data-[state=active]:bg-[#272727] dark:data-[state=active]:bg-[#bb86fc]",
                    "data-[state=active]:shadow-sm",
                    "hover:bg-[#3a3a3a]/40 dark:hover:bg-[#cba4fa44]",
                    "data-[state=active]:text-white dark:data-[state=active]:text-white",
                    // Prevent focus glow on tab triggers
                    "focus:outline-none focus:ring-0"
                  )}
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex items-center space-x-3 mt-2 sm:mt-0">
            <ThemeToggle className="theme-toggle transition-transform hover:scale-105 focus:outline-none focus:ring-0" />

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="btn-copy header-button flex items-center gap-1.5 h-9 px-3 transition-all duration-200 hover:scale-105 dark:bg-[#bb86fc] dark:text-white dark:hover:bg-[#bb86fc]/90 focus:outline-none focus:ring-0"
                onClick={copyToClipboard}
                onMouseDown={(e) => e.preventDefault()}
              >
                <Copy className="w-4 h-4" />
                <span className="hidden sm:inline p-2">Copy</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="btn-save header-button flex items-center gap-1.5 h-9 px-3 transition-all duration-200 hover:scale-105 dark:bg-[#bb86fc] dark:text-white dark:hover:bg-[#bb86fc]/90 focus:outline-none focus:ring-0"
                onClick={saveCode}
                disabled={saving}
                onMouseDown={(e) => e.preventDefault()}
              >
                <Save className="w-4 h-4" />
                <span className="hidden sm:inline p-2">
                  {saving ? "Saving..." : "Save"}
                </span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="btn-github flex items-center gap-1.5 h-9 px-3 transition-all duration-200 hover:scale-105 dark:bg-[#bb86fc] dark:text-white dark:hover:bg-[#bb86fc]/90 focus:outline-none focus:ring-0"
                asChild

                onMouseDown={(e) => e.preventDefault()}
              >
                <a
                  href="https://github.com/BryanLomerio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="btn-help flex items-center gap-1.5 h-9 px-3 transition-all duration-200 hover:scale-105 dark:bg-[#bb86fc] dark:text-white dark:hover:bg-[#bb86fc]/90 focus:outline-none focus:ring-0"
                onClick={startTour}

                onMouseDown={(e) => e.preventDefault()}
              >
                <span className="hidden sm:inline">Tutorial</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
