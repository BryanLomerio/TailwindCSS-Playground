import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Copy, Github, Save } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  htmlCode: string;
}

const Header = ({ activeTab, setActiveTab, htmlCode }: HeaderProps) => {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode);
    toast({
      title: "Copied to clipboard",
      description: "The HTML code has been copied to your clipboard",
    });
  };

  const saveCode = () => {
    setSaving(true);
    // Simulate saving
    setTimeout(() => {
      setSaving(false);
      toast({
        title: "Code saved",
        description: "Your code has been saved successfully",
      });
    }, 800);
  };

  return (
    <header className="border-b border-border p-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">Tailwind Playground</h1>
      </div>

      <Tabs defaultValue={activeTab} className="w-full sm:w-auto" onValueChange={setActiveTab}>
        <TabsList className="w-full sm:w-auto grid grid-cols-3">
          <TabsTrigger
            value="editor"
            className="data-[state=active]:bg-[#272727] dark:data-[state=active]:bg-[#bb86fc] hover:bg-[#3a3a3a] dark:hover:bg-[#cba4fa44] data-[state=active]:text-primary-foreground dark:data-[state=active]:text-white"
          >
            Editor
          </TabsTrigger>
          <TabsTrigger
            value="components"
            className="data-[state=active]:bg-[#272727] dark:data-[state=active]:bg-[#bb86fc] hover:bg-[#3a3a3a] dark:hover:bg-[#cba4fa5b] data-[state=active]:text-primary-foreground dark:data-[state=active]:text-white"
          >
            Components
          </TabsTrigger>
          <TabsTrigger
            value="colors"
            className="data-[state=active]:bg-[#272727] dark:data-[state=active]:bg-[#bb86fc] hover:bg-[#3a3a3a] dark:hover:bg-[#cba4fa4f] data-[state=active]:text-primary-foreground dark:data-[state=active]:text-white"
          >
            Colors
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 dark:bg-[#bb86fc]"
          onClick={copyToClipboard}
        >
          <Copy className="w-4 h-4" />
          <span className="hidden sm:inline">Copy</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 dark:bg-[#bb86fc]"
          onClick={saveCode}
          disabled={saving}
        >
          <Save className="w-4 h-4" />
          <span className="hidden sm:inline">{saving ? "Saving..." : "Save"}</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 dark:bg-[#bb86fc]"
          asChild
        >
          <a href="https://github.com/BryanLomerio" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
