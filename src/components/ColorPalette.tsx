import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const ColorPalette = () => {
  const [colorCategory, setColorCategory] = useState("default");
  const [isDialogOpen, setDialogOpen] = useState(false);

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setDialogOpen(true);
  };

  return (
    <div className="p-4 h-full overflow-auto editor-scrollbar animate-fade-in">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Tailwind Colors</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Click on any color to copy its class name to your clipboard
        </p>
      </div>

      <Tabs defaultValue={colorCategory} onValueChange={setColorCategory}>
        <TabsList className="mb-4 grid grid-cols-4 w-full">
          <TabsTrigger
            value="default"
            className="data-[state=active]:bg-[#bb86fc] hover:bg-[#cba4fa4f] dark:data-[state=active]:bg-[#bb86fc] dark:hover:bg-[#cba4fa4f]"
          >
            Default
          </TabsTrigger>
          <TabsTrigger
            value="text"
            className="data-[state=active]:bg-[#bb86fc] hover:bg-[#cba4fa4f] dark:data-[state=active]:bg-[#bb86fc] dark:hover:bg-[#cba4fa4f]"
          >
            Text
          </TabsTrigger>
          <TabsTrigger
            value="background"
            className="data-[state=active]:bg-[#bb86fc] hover:bg-[#cba4fa4f] dark:data-[state=active]:bg-[#bb86fc] dark:hover:bg-[#cba4fa4f]"
          >
            Background
          </TabsTrigger>
          <TabsTrigger
            value="border"
            className="data-[state=active]:bg-[#bb86fc] hover:bg-[#cba4fa4f] dark:data-[state=active]:bg-[#bb86fc] dark:hover:bg-[#cba4fa4f]"
          >
            Border
          </TabsTrigger>
        </TabsList>

        <TabsContent value="default" className="space-y-6">
          {Object.entries(colorGroups).map(([groupName, colors]) => (
            <div key={groupName} className="mb-8">
              <h3 className="text-base font-semibold mb-3 capitalize">{groupName}</h3>
              <div className="color-grid">
                {colors.map((color) => (
                  <ColorCard
                    key={color.class}
                    name={color.name}
                    bgClass={color.class}
                    className={color.class}
                    onCopy={() => copyColor(color.class)}
                  />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="text" className="space-y-6">
          {Object.entries(colorGroups).map(([groupName, colors]) => (
            <div key={groupName} className="mb-8">
              <h3 className="text-base font-semibold mb-3 capitalize">{groupName}</h3>
              <div className="color-grid">
                {colors.map((color) => {
                  const textClass = color.class.replace("bg-", "text-");
                  return (
                    <ColorCard
                      key={textClass}
                      name={color.name}
                      bgClass=""
                      textColorClass={textClass}
                      className={textClass}
                      onCopy={() => copyColor(textClass)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="background" className="space-y-6">
          {Object.entries(colorGroups).map(([groupName, colors]) => (
            <div key={groupName} className="mb-8">
              <h3 className="text-base font-semibold mb-3 capitalize">{groupName}</h3>
              <div className="color-grid">
                {colors.map((color) => (
                  <ColorCard
                    key={color.class}
                    name={color.name}
                    bgClass={color.class}
                    className={color.class}
                    onCopy={() => copyColor(color.class)}
                  />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="border" className="space-y-6">
          {Object.entries(colorGroups).map(([groupName, colors]) => (
            <div key={groupName} className="mb-8">
              <h3 className="text-base font-semibold mb-3 capitalize">{groupName}</h3>
              <div className="color-grid">
                {colors.map((color) => {
                  const borderClass = color.class.replace("bg-", "border-");
                  return (
                    <ColorCard
                      key={borderClass}
                      name={color.name}
                      borderClass={borderClass}
                      className={borderClass}
                      onCopy={() => copyColor(borderClass)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>

      <Dialog
        open={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div
          className="flex items-center justify-center min-h-screen"
          onClick={() => setDialogOpen(false)}
        >
          <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />

          <div
            className="relative bg-white dark:bg-gray-800 rounded max-w-sm mx-auto p-6 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Dialog.Title className="text-lg font-bold text-gray-900 dark:text-gray-100">
              Copied to Clipboard
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              The color has been copied to your clipboard.
            </Dialog.Description>
            <div className="mt-6 flex justify-end">
              <Button
                className="bg-black hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600"
                onClick={() => setDialogOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

interface ColorCardProps {
  name: string;
  className: string;
  bgClass?: string;
  borderClass?: string;
  textColorClass?: string;
  onCopy: () => void;
}

const ColorCard = ({
  name,
  className,
  bgClass,
  borderClass,
  textColorClass,
  onCopy,
}: ColorCardProps) => {
  return (
    <div
      className="border border-border rounded-lg overflow-hidden bg-card shadow-sm transition-all hover:shadow-md cursor-pointer"
      onClick={onCopy}
    >
      {bgClass && <div className={`h-16 ${bgClass}`} />}
      {borderClass && <div className={`h-16 border-4 ${borderClass}`} />}
      {textColorClass && (
        <div className="h-16 flex items-center justify-center">
          <span className={`text-2xl font-bold ${textColorClass}`}>Aa</span>
        </div>
      )}
      <div className="p-3 flex justify-between items-center bg-muted/50">
        <span className="text-xs font-mono">{className}</span>
        <Copy className="h-3 w-3 text-muted-foreground" />
      </div>
    </div>
  );
};


// Color groups 
const colorGroups = {
  slate: [
    { name: "Slate 50", class: "bg-slate-50" },
    { name: "Slate 100", class: "bg-slate-100" },
    { name: "Slate 200", class: "bg-slate-200" },
    { name: "Slate 300", class: "bg-slate-300" },
    { name: "Slate 400", class: "bg-slate-400" },
    { name: "Slate 500", class: "bg-slate-500" },
    { name: "Slate 600", class: "bg-slate-600" },
    { name: "Slate 700", class: "bg-slate-700" },
    { name: "Slate 800", class: "bg-slate-800" },
    { name: "Slate 900", class: "bg-slate-900" },
    { name: "Slate 950", class: "bg-slate-950" },
  ],
  gray: [
    { name: "Gray 50", class: "bg-gray-50" },
    { name: "Gray 100", class: "bg-gray-100" },
    { name: "Gray 200", class: "bg-gray-200" },
    { name: "Gray 300", class: "bg-gray-300" },
    { name: "Gray 400", class: "bg-gray-400" },
    { name: "Gray 500", class: "bg-gray-500" },
    { name: "Gray 600", class: "bg-gray-600" },
    { name: "Gray 700", class: "bg-gray-700" },
    { name: "Gray 800", class: "bg-gray-800" },
    { name: "Gray 900", class: "bg-gray-900" },
    { name: "Gray 950", class: "bg-gray-950" },
  ],
  red: [
    { name: "Red 50", class: "bg-red-50" },
    { name: "Red 100", class: "bg-red-100" },
    { name: "Red 200", class: "bg-red-200" },
    { name: "Red 300", class: "bg-red-300" },
    { name: "Red 400", class: "bg-red-400" },
    { name: "Red 500", class: "bg-red-500" },
    { name: "Red 600", class: "bg-red-600" },
    { name: "Red 700", class: "bg-red-700" },
    { name: "Red 800", class: "bg-red-800" },
    { name: "Red 900", class: "bg-red-900" },
    { name: "Red 950", class: "bg-red-950" },
  ],
  green: [
    { name: "Green 50", class: "bg-green-50" },
    { name: "Green 100", class: "bg-green-100" },
    { name: "Green 200", class: "bg-green-200" },
    { name: "Green 300", class: "bg-green-300" },
    { name: "Green 400", class: "bg-green-400" },
    { name: "Green 500", class: "bg-green-500" },
    { name: "Green 600", class: "bg-green-600" },
    { name: "Green 700", class: "bg-green-700" },
    { name: "Green 800", class: "bg-green-800" },
    { name: "Green 900", class: "bg-green-900" },
    { name: "Green 950", class: "bg-green-950" },
  ],
  blue: [
    { name: "Blue 50", class: "bg-blue-50" },
    { name: "Blue 100", class: "bg-blue-100" },
    { name: "Blue 200", class: "bg-blue-200" },
    { name: "Blue 300", class: "bg-blue-300" },
    { name: "Blue 400", class: "bg-blue-400" },
    { name: "Blue 500", class: "bg-blue-500" },
    { name: "Blue 600", class: "bg-blue-600" },
    { name: "Blue 700", class: "bg-blue-700" },
    { name: "Blue 800", class: "bg-blue-800" },
    { name: "Blue 900", class: "bg-blue-900" },
    { name: "Blue 950", class: "bg-blue-950" },
  ],
  purple: [
    { name: "Purple 50", class: "bg-purple-50" },
    { name: "Purple 100", class: "bg-purple-100" },
    { name: "Purple 200", class: "bg-purple-200" },
    { name: "Purple 300", class: "bg-purple-300" },
    { name: "Purple 400", class: "bg-purple-400" },
    { name: "Purple 500", class: "bg-purple-500" },
    { name: "Purple 600", class: "bg-purple-600" },
    { name: "Purple 700", class: "bg-purple-700" },
    { name: "Purple 800", class: "bg-purple-800" },
    { name: "Purple 900", class: "bg-purple-900" },
    { name: "Purple 950", class: "bg-purple-950" },
  ],
};

export default ColorPalette;
