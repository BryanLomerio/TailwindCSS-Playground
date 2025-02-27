
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Play } from "lucide-react";

interface CodeEditorProps {
  initialValue?: string;
  onChange: (value: string) => void;
}

const CodeEditor = ({ initialValue = defaultTemplate, onChange }: CodeEditorProps) => {
  const [code, setCode] = useState(initialValue);
  const { toast } = useToast();

  useEffect(() => {
    onChange(code);
  }, [code, onChange]);

  const handleRun = () => {
    onChange(code);
    toast({
      title: "Code updated",
      description: "Your changes have been applied to the preview",
    });
  };

  return (
    <div className="flex flex-col h-full bg-card rounded-md shadow-sm border border-border overflow-hidden animate-fade-in">
      <div className="flex justify-between items-center px-4 py-2 bg-muted border-b border-border">
        <span className="text-sm font-medium">HTML + Tailwind CSS</span>
        <Button 
          variant="secondary" 
          size="sm" 
          className="flex items-center gap-1 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleRun}
        >
          <Play className="w-4 h-4" />
          Run
        </Button>
      </div>
      <textarea
        className="flex-1 w-full p-4 bg-card text-card-foreground resize-none outline-none font-mono text-sm editor-scrollbar"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck="false"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
      />
    </div>
  );
};

// Default template with basic Tailwind examples
const defaultTemplate = `<!-- Tailwind CSS Playground -->
<!-- Try editing this code to see the changes in real-time -->

<div class="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6" alt="Modern building architecture">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have the perfect location.</p>
      <button class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
        Book now
      </button>
    </div>
  </div>
</div>`;

export default CodeEditor;
