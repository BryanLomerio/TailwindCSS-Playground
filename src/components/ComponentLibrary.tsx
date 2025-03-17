import { useState } from "react";
import { Dialog } from "@headlessui/react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react";

const ComponentLibrary = () => {
  const [category, setCategory] = useState("buttons");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState("");

  const copyComponent = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setDialogOpen(true);
  };

  return (
    <div className="p-4 h-full overflow-auto editor-scrollbar animate-fade-in">
      <Tabs defaultValue={category} onValueChange={setCategory}>
        <TabsList className="mb-4 grid grid-cols-4 w-full">
          <TabsTrigger
            value="buttons"
            className="data-[state=active]:bg-[#bb86fc] hover:bg-[#cba4fa4f] dark:data-[state=active]:bg-[#bb86fc] dark:hover:bg-[#cba4fa4f]"
          >
            Buttons
          </TabsTrigger>
          <TabsTrigger
            value="cards"
            className="data-[state=active]:bg-[#bb86fc] hover:bg-[#cba4fa4f] dark:data-[state=active]:bg-[#bb86fc] dark:hover:bg-[#cba4fa4f]"
          >
            Cards
          </TabsTrigger>
          <TabsTrigger
            value="forms"
            className="data-[state=active]:bg-[#bb86fc] hover:bg-[#cba4fa4f] dark:data-[state=active]:bg-[#bb86fc] dark:hover:bg-[#cba4fa4f]"
          >
            Forms
          </TabsTrigger>
          <TabsTrigger
            value="navigation"
            className="data-[state=active]:bg-[#bb86fc] hover:bg-[#cba4fa4f] dark:data-[state=active]:bg-[#bb86fc] dark:hover:bg-[#cba4fa4f]"
          >
            Navigation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="buttons" className="space-y-6">
          <h2 className="text-lg font-semibold mb-4">Button Components</h2>
          <div className="component-grid">
            {buttonComponents.map((component, index) => (
              <ComponentCard
                key={index}
                title={component.title}
                preview={component.preview}
                code={component.code}
                onCopy={copyComponent}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cards" className="space-y-6">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Card Components</h2>
          <div className="component-grid dark:text-white">
            {cardComponents.map((component, index) => (
              <ComponentCard
                key={index}
                title={component.title}
                preview={component.preview}
                code={component.code}
                onCopy={copyComponent}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="forms" className="space-y-6">
          <h2 className="text-lg font-semibold mb-4">Form Components</h2>
          <div className="component-grid">
            {formComponents.map((component, index) => (
              <ComponentCard
                key={index}
                title={component.title}
                preview={component.preview}
                code={component.code}
                onCopy={copyComponent}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="navigation" className="space-y-6">
          <h2 className="text-lg font-semibold mb-4">Navigation Components</h2>
          <div className="component-grid">
            {navigationComponents.map((component, index) => (
              <ComponentCard
                key={index}
                title={component.title}
                preview={component.preview}
                code={component.code}
                onCopy={copyComponent}
              />
            ))}
          </div>
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
              The component code has been copied to your clipboard.
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

interface ComponentCardProps {
  title: string;
  preview: string;
  code: string;
  onCopy: (code: string) => void;
}

const ComponentCard = ({ title, preview, code, onCopy }: ComponentCardProps) => {
  const handlePreviewClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const link = target.closest("a");
    if (link) {
      e.preventDefault();
    }
  };

  return (
    <div className="gap-5 border border-border rounded-lg overflow-hidden bg-card shadow-sm transition-all hover:shadow-md">
      <div
        className="p-4 border-b border-border bg-white"
        dangerouslySetInnerHTML={{ __html: preview }}
        onClick={handlePreviewClick}
      />
      <div className="p-3 flex justify-between items-center bg-muted/50">
        <h3 className="text-sm font-medium">{title}</h3>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => onCopy(code)}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};


// Button components
const buttonComponents = [
  {
    title: "Primary Button",
    preview: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>`,
    code: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>`
  },
  {
    title: "Secondary Button",
    preview: `<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Button
</button>`,
    code: `<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Button
</button>`
  },
  {
    title: "Disabled Button",
    preview: `<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
  Button
</button>`,
    code: `<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
  Button
</button>`
  },
  {
    title: "Button with Icon",
    preview: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
  </svg>
  <span>Download</span>
</button>`,
    code: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
  </svg>
  <span>Download</span>
</button>`
  },
  {
    title: "Gradient Button",
    preview: `<button class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-400 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
  Button
</button>`,
    code: `<button class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-red-500 hover:via-pink-500 hover:to-purple-400 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
  Button
</button>`
  },
  {
    title: "Pulse Button",
    preview: `<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded animate-pulse">
  Button
</button>`,
    code: `<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded animate-pulse">
  Button
</button>`
  },
  {
    title: "Loading Button",
    preview: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center" disabled>
  <svg class="animate-spin h-5 w-5 mr-3 border-4 border-t-transparent border-white rounded-full" viewBox="0 0 24 24"></svg>
  Loading...
</button>`,
    code: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center" disabled>
  <svg class="animate-spin h-5 w-5 mr-3 border-4 border-t-transparent border-white rounded-full" viewBox="0 0 24 24"></svg>
  Loading...
</button>`
  },
  {
    title: "Outline Shadow Button",
    preview: `<button class="bg-transparent text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded shadow hover:shadow-lg transition-shadow duration-300">
  Button
</button>`,
    code: `<button class="bg-transparent text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded shadow hover:shadow-lg transition-shadow duration-300">
  Button
</button>`
  },
  {
    title: "Pill Button",
    preview: `<button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transform hover:scale-105 transition-transform duration-200">
  Button
</button>`,
    code: `<button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transform hover:scale-105 transition-transform duration-200">
  Button
</button>`
  },
  {
    title: "Underline Hover Button",
    preview: `<button class="bg-transparent text-purple-500 font-semibold py-2 px-4 relative group">
  Button
  <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
</button>`,
    code: `<button class="bg-transparent text-purple-500 font-semibold py-2 px-4 relative group">
  Button
  <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
</button>`
  },
  {
    title: "Floating Button",
    preview: `<button class="bg-indigo-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
  Floating
</button>`,
    code: `<button class="bg-indigo-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
  Floating
</button>`
  },
  {
    title: "Ripple Button",
    preview: `<button class="relative overflow-hidden bg-teal-500 text-white font-bold py-2 px-4 rounded">
  Ripple
  <span class="absolute inset-0 bg-white opacity-0 transition duration-500 ease-out"></span>
</button>`,
    code: `<button class="relative overflow-hidden bg-teal-500 text-white font-bold py-2 px-4 rounded">
  Ripple
  <span class="absolute inset-0 bg-white opacity-0 transition duration-500 ease-out"></span>
</button>`
  },
  {
    title: "Bounce Button",
    preview: `<button class="bg-yellow-500 text-white font-bold py-2 px-4 rounded transform hover:scale-110 transition-transform duration-300">
  Bounce
</button>`,
    code: `<button class="bg-yellow-500 text-white font-bold py-2 px-4 rounded transform hover:scale-110 transition-transform duration-300">
  Bounce
</button>`
  },
  {
    title: "Zoom Button",
    preview: `<button class="bg-pink-500 text-white font-bold py-2 px-4 rounded transform hover:scale-125 transition-transform duration-300">
  Zoom
</button>`,
    code: `<button class="bg-pink-500 text-white font-bold py-2 px-4 rounded transform hover:scale-125 transition-transform duration-300">
  Zoom
</button>`
  },
  {
    title: "Glow Button",
    preview: `<button class="bg-purple-600 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
  Glow
</button>`,
    code: `<button class="bg-purple-600 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
  Glow
</button>`
  },
  {
    title: "Skew Button",
    preview: `<button class="bg-orange-500 text-white font-bold py-2 px-4 rounded transform hover:skew-x-6 transition-transform duration-300">
  Skew
</button>`,
    code: `<button class="bg-orange-500 text-white font-bold py-2 px-4 rounded transform hover:skew-x-6 transition-transform duration-300">
  Skew
</button>`
  },
  {
    title: "3D Button",
    preview: `<button class="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transform hover:translate-y-1 hover:shadow-2xl transition-transform duration-300">
  3D Effect
</button>`,
    code: `<button class="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transform hover:translate-y-1 hover:shadow-2xl transition-transform duration-300">
  3D Effect
</button>`
  },
  {
    title: "Ghost Button",
    preview: `<button class="bg-transparent border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded hover:bg-gray-500 hover:text-white transition-colors duration-300">
  Ghost
</button>`,
    code: `<button class="bg-transparent border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded hover:bg-gray-500 hover:text-white transition-colors duration-300">
  Ghost
</button>`
  },
  {
    title: "Transparent Hover Button",
    preview: `<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-opacity-50">
  Transparent
</button>`,
    code: `<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-opacity-50">
  Transparent
</button>`
  },
  {
    title: "Scale Up Button",
    preview: `<button class="bg-teal-600 text-white font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-110">
  Scale Up
</button>`,
    code: `<button class="bg-teal-600 text-white font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-110">
  Scale Up
</button>`
  },
  {
    title: "Slide In Button",
    preview: `<button class="bg-red-600 text-white font-bold py-2 px-4 rounded relative overflow-hidden">
  Slide In
  <span class="absolute inset-0 transform -translate-x-full bg-red-500 transition-transform duration-300 hover:translate-x-0"></span>
  <span class="relative">Slide In</span>
</button>`,
    code: `<button class="bg-red-600 text-white font-bold py-2 px-4 rounded relative overflow-hidden">
  Slide In
  <span class="absolute inset-0 transform -translate-x-full bg-red-500 transition-transform duration-300 hover:translate-x-0"></span>
  <span class="relative">Slide In</span>
</button>`
  },
  {
    title: "Flip Button",
    preview: `<button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded transform transition-transform duration-500 hover:rotate-y-180">
  Flip
</button>`,
    code: `<button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded transform transition-transform duration-500 hover:rotate-y-180">
  Flip
</button>`
  },
  {
    title: "Rotate Button",
    preview: `<button class="bg-purple-500 text-white font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:rotate-180">
  Rotate
</button>`,
    code: `<button class="bg-purple-500 text-white font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:rotate-180">
  Rotate
</button>`
  },
  {
    title: "Shrink Button",
    preview: `<button class="bg-green-600 text-white font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-90">
  Shrink
</button>`,
    code: `<button class="bg-green-600 text-white font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-90">
  Shrink
</button>`
  },
  {
    title: "Expand Button",
    preview: `<button class="bg-blue-600 text-white font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-105">
  Expand
</button>`,
    code: `<button class="bg-blue-600 text-white font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-105">
  Expand
</button>`
  },
  {
    title: "Border Transition Button",
    preview: `<button class="bg-transparent text-indigo-600 font-bold py-2 px-4 border-2 border-indigo-600 rounded transition-all duration-300 hover:bg-indigo-600 hover:text-white">
  Border Transition
</button>`,
    code: `<button class="bg-transparent text-indigo-600 font-bold py-2 px-4 border-2 border-indigo-600 rounded transition-all duration-300 hover:bg-indigo-600 hover:text-white">
  Border Transition
</button>`
  },
  {
    title: "Color Cycle Button",
    preview: `<button class="text-white font-bold py-2 px-4 rounded transition-colors duration-500 hover:bg-red-500 hover:bg-yellow-500 hover:bg-green-500">
  Color Cycle
</button>`,
    code: `<button class="text-white font-bold py-2 px-4 rounded transition-colors duration-500 hover:bg-red-500 hover:bg-yellow-500 hover:bg-green-500">
  Color Cycle
</button>`
  },
  {
    title: "Shadow Pulse Button",
    preview: `<button class="bg-gray-700 text-white font-bold py-2 px-4 rounded shadow animate-pulse">
  Shadow Pulse
</button>`,
    code: `<button class="bg-gray-700 text-white font-bold py-2 px-4 rounded shadow animate-pulse">
  Shadow Pulse
</button>`
  },
  {
    title: "Accent Button",
    preview: `<button class="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition-colors duration-300">
  Accent
</button>`,
    code: `<button class="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition-colors duration-300">
  Accent
</button>`
  },
  {
    title: "Outline to Filled Button",
    preview: `<button class="bg-transparent text-blue-500 font-bold py-2 px-4 rounded border-2 border-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white">
  Outline to Filled
</button>`,
    code: `<button class="bg-transparent text-blue-500 font-bold py-2 px-4 rounded border-2 border-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white">
  Outline to Filled
</button>`
  }
];


// Card components
const cardComponents = [
  {
    title: "Simple Card",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 dark:text-black">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Experience the calm beauty of a sunset that fills the sky with vibrant hues.
    </p>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 dark:text-black">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Experience the calm beauty of a sunset that fills the sky with vibrant hues.
    </p>
  </div>
</div>`
  },
  {
    title: "Card with Image",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/an-older-jinwoo-in-solo-leveling-smiling.jpg" alt="Solo Leveling">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 dark:text-black">Sung Jin-Woo</div>
    <p class="text-gray-700 text-base">
      An older Sung Jin-Woo, the unstoppable hunter, exuding power and confidence.
    </p>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/an-older-jinwoo-in-solo-leveling-smiling.jpg" alt="Solo Leveling">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 dark:text-black">Sung Jin-Woo</div>
    <p class="text-gray-700 text-base">
      An older Sung Jin-Woo, the unstoppable hunter, exuding power and confidence.
    </p>
  </div>
</div>`
  },
  {
    title: "Profile Card",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
  <div class="flex items-center space-x-4">
    <img class="w-16 h-16 rounded-full" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/04/one-piece-3006218.jpg?tf=3840x" alt="One Piece Luffy">
    <div>
      <div class="font-bold text-xl mb-2 dark:text-black">Monkey D. Luffy</div>
      <div class="text-gray-600">Captain of the Straw Hat Pirates</div>
    </div>
  </div>
  <p class="mt-4 text-gray-700 text-base">
    Dreaming of becoming the Pirate King, Luffy leads his crew with an unyielding spirit and boundless determination.
  </p>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
  <div class="flex items-center space-x-4">
    <img class="w-16 h-16 rounded-full" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/04/one-piece-3006218.jpg?tf=3840x" alt="One Piece Luffy">
    <div>
      <div class="font-bold text-xl mb-2 dark:text-black">Monkey D. Luffy</div>
      <div class="text-gray-600">Captain of the Straw Hat Pirates</div>
    </div>
  </div>
  <p class="mt-4 text-gray-700 text-base">
    Dreaming of becoming the Pirate King, Luffy leads his crew with an unyielding spirit and boundless determination.
  </p>
</div>`
  },
  {
    title: "Pricing Card",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
  <div class="text-center">
    <div class="font-bold text-2xl mb-4 dark:text-black">Pro Plan</div>
    <div class="text-4xl font-extrabold dark:text-black">₱299<span class="text-xl">/mo</span></div>
  </div>
  <ul class="mt-6 space-y-2 dark:text-black">
    <li class="flex items-center dark:text-black">
      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
      </svg>
      Unlimited Projects
    </li>
    <li class="flex items-center">
      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
      </svg>
      24/7 Support
    </li>
    <li class="flex items-center">
      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
      </svg>
      Advanced Analytics
    </li>
  </ul>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
  <div class="text-center">
    <div class="font-bold text-2xl mb-4 dark:text-black">Pro Plan</div>
    <div class="text-4xl font-extrabold">₱299<span class="text-xl">/mo</span></div>
  </div>
  <ul class="mt-6 space-y-2">
    <li class="flex items-center">
      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
      </svg>
      Unlimited Projects
    </li>
    <li class="flex items-center">
      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
      </svg>
      24/7 Support
    </li>
    <li class="flex items-center">
      <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
      </svg>
      Advanced Analytics
    </li>
  </ul>
</div>`
  },
  {
    title: "Product Card",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097" alt="Product">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 dark:text-black">Wireless Headphones</div>
    <p class="text-gray-700 text-base">
      Enjoy high-quality sound with these comfortable, long-lasting headphones.
    </p>
    <div class="mt-4 flex items-center dark:text-black">
      <span class="text-lg font-bold">₱1299</span>
      <button class="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Buy Now</button>
    </div>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097" alt="Product">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 dark:text-black">Wireless Headphones</div>
    <p class="text-gray-700 text-base">
      Enjoy high-quality sound with these comfortable, long-lasting headphones.
    </p>
    <div class="mt-4 flex items-center">
      <span class="text-lg font-bold">₱1299</span>
      <button class="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Buy Now</button>
    </div>
  </div>
</div>`
  },
  {
    title: "Blog Post Card",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=400" alt="Blog">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 dark:text-black">Exploring the Ocean Depths</div>
    <p class="text-gray-700 text-base">
      Dive into the mysterious world of the deep sea and discover its hidden wonders.
    </p>
    <a href="#" class="mt-4 inline-block text-blue-500 hover:underline">Read More</a>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=400" alt="Blog">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 dark:text-black">Exploring the Ocean Depths</div>
    <p class="text-gray-700 text-base">
      Dive into the mysterious world of the deep sea and discover its hidden wonders.
    </p>
    <a href="#" class="mt-4 inline-block text-blue-500 hover:underline">Read More</a>
  </div>
</div>`
  },
  {
    title: "Testimonial Card",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
  <p class="text-gray-700 text-base italic">
    "This product completely changed my life! Highly recommended."
  </p>
  <div class="mt-4 flex items-center">
    <img class="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/186366590?v=4" alt="User">
    <div class="ml-4">
      <div class="font-bold text-sm dark:text-black">AninoDev</div>
      <div class="text-gray-600 text-xs">Fullstack Developer</div>
    </div>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
  <p class="text-gray-700 text-base italic">
    "This product completely changed my life! Highly recommended."
  </p>
  <div class="mt-4 flex items-center">
    <img class="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/186366590?v=4" alt="User">
    <div class="ml-4">
      <div class="font-bold text-sm dark:text-black">AninoDev</div>
      <div class="text-gray-600 text-xs">Fullstack Developer</div>
    </div>
  </div>
</div>`
  },
  {
    title: "Gallery Card",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <div class="grid grid-cols-2 gap-1">
    <img class="w-full h-24 object-cover" src="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/12/14125211/philippines-tourism-1.jpeg" alt="Gallery 1">
    <img class="w-full h-24 object-cover" src="https://www.outlooktravelmag.com/media/philippines-1-1621524923.profileImage.2x-jpg-webp.webp" alt="Gallery 2">
    <img class="w-full h-24 object-cover" src="https://static1.detourista.com/wp/wp-content/uploads/Unorganized/Philippines-Attractions-Featured-Image-3x2-1200x628.jpg" alt="Gallery 3">
    <img class="w-full h-24 object-cover" src="https://skyticket.com/guide/wp-content/uploads/2024/12/iStock-494444306-e1485763922792-680x383.jpg" alt="Gallery 4">
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 dark:text-black">Travel Memories</div>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <div class="grid grid-cols-2 gap-1">
    <img class="w-full h-24 object-cover" src="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/12/14125211/philippines-tourism-1.jpeg" alt="Gallery 1">
    <img class="w-full h-24 object-cover" src="https://www.outlooktravelmag.com/media/philippines-1-1621524923.profileImage.2x-jpg-webp.webp" alt="Gallery 2">
    <img class="w-full h-24 object-cover" src="https://static1.detourista.com/wp/wp-content/uploads/Unorganized/Philippines-Attractions-Featured-Image-3x2-1200x628.jpg" alt="Gallery 3">
    <img class="w-full h-24 object-cover" src="https://skyticket.com/guide/wp-content/uploads/2024/12/iStock-494444306-e1485763922792-680x383.jpg" alt="Gallery 4">
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 dark:text-black">Travel Memories</div>
  </div>
</div>`
  },
  {
    title: "Feature Card",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
  <div class="flex items-center">
    <div class="p-3 bg-blue-500 text-white rounded-full">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m2-2h.01M12 6v.01"></path>
      </svg>
    </div>
    <h3 class="ml-4 font-bold text-xl dark:text-black">Seamless Integration</h3>
  </div>
  <p class="mt-4 text-gray-700 text-base">
    Our platform integrates with your favorite tools to create a smooth workflow.
  </p>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
  <div class="flex items-center">
    <div class="p-3 bg-blue-500 text-white rounded-full">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m2-2h.01M12 6v.01"></path>
      </svg>
    </div>
    <h3 class="ml-4 font-bold text-xl dark:text-black">Seamless Integration</h3>
  </div>
  <p class="mt-4 text-gray-700 text-base">
    Our platform integrates with your favorite tools to create a smooth workflow.
  </p>
</div>`
  },
  {
    title: "Interactive Card",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105">
  <img class="w-full" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=400" alt="Interactive">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 dark:text-black">Interactive Experience</div>
    <p class="text-gray-700 text-base">
      Hover over this card to see it come to life with a smooth animation.
    </p>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105">
  <img class="w-full" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=400" alt="Interactive">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 dark:text-black">Interactive Experience</div>
    <p class="text-gray-700 text-base">
      Hover over this card to see it come to life with a smooth animation.
    </p>
  </div>
</div>
` },
{
  title: "Event Card",
  preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
<img class="w-full" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Music-Concert-Event-Ticket-Design-scaled.jpg" alt="Event">
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2 dark:text-black">Music Concert</div>
  <p class="text-gray-700 text-base">
    Join us for an unforgettable night of live music and entertainment.
  </p>
  <div class="mt-4 text-sm text-gray-600">
    <span>Date: Aug 25, 2025</span><br>
    <span>Location: Downtown Arena</span>
  </div>
</div>
</div>`,
  code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
<img class="w-full" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Music-Concert-Event-Ticket-Design-scaled.jpg" alt="Event">
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2 dark:text-black">Music Concert</div>
  <p class="text-gray-700 text-base">
    Join us for an unforgettable night of live music and entertainment.
  </p>
  <div class="mt-4 text-sm text-gray-600">
    <span>Date: Aug 25, 2025</span><br>
    <span>Location: Downtown Arena</span>
  </div>
</div>
</div>`
},
{
  title: "News Update Card",
  preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
<img class="w-full" src="https://www.zucisystems.com/wp-content/uploads/2021/07/icon-internet-world-hands-businessman-network-technology-communication-scaled.jpg" alt="News">
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2 dark:text-black">Breaking News</div>
  <p class="text-gray-700 text-base">
    Major updates are unfolding in the world of technology. Stay tuned for more details.
  </p>
  <a href="#" class="mt-4 inline-block text-blue-500 hover:underline">Read More</a>
</div>
</div>`,
  code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
<img class="w-full" src="https://www.zucisystems.com/wp-content/uploads/2021/07/icon-internet-world-hands-businessman-network-technology-communication-scaled.jpg" alt="News">
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2 dark:text-black">Breaking News</div>
  <p class="text-gray-700 text-base">
    Major updates are unfolding in the world of technology. Stay tuned for more details.
  </p>
  <a href="#" class="mt-4 inline-block text-blue-500 hover:underline">Read More</a>
</div>
</div>`
},
{
  title: "Review Card",
  preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
<p class="text-gray-700 text-base italic">
  "An exceptional experience with outstanding customer service."
</p>
<div class="mt-4 flex items-center">
  <img class="w-10 h-10 rounded-full" src="https://preview.redd.it/bgyo-gelos-2x2-picture-goes-viral-in-the-interwebs-v0-4utcv426n1la1.jpg?auto=webp&s=14d561008837fcf49292d82a15ef15d2e7b6ecf6" alt="Reviewer">
  <div class="ml-4">
    <div class="font-bold text-sm dark:text-black">Mark Tan</div>
    <div class="flex text-yellow-400">
      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.561-.954L10 1l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z"/>
      </svg>
      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.561-.954L10 1l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z"/>
      </svg>
      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.561-.954L10 1l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z"/>
      </svg>
      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.561-.954L10 1l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z"/>
      </svg>
      <svg class="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.561-.954L10 1l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z"/>
      </svg>
    </div>
  </div>
</div>
</div>`,
  code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
<p class="text-gray-700 text-base italic">
  "An exceptional experience with outstanding customer service."
</p>
<div class="mt-4 flex items-center">
  <img class="w-10 h-10 rounded-full" src="https://preview.redd.it/bgyo-gelos-2x2-picture-goes-viral-in-the-interwebs-v0-4utcv426n1la1.jpg?auto=webp&s=14d561008837fcf49292d82a15ef15d2e7b6ecf6" alt="Reviewer">
  <div class="ml-4">
    <div class="font-bold text-sm dark:text-black">Mark tan</div>
    <div class="flex text-yellow-400">
      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.561-.954L10 1l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z"/>
      </svg>
      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.561-.954L10 1l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z"/>
      </svg>
      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.561-.954L10 1l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z"/>
      </svg>
      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.561-.954L10 1l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z"/>
      </svg>
      <svg class="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.91l6.561-.954L10 1l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z"/>
      </svg>
    </div>
  </div>
</div>
</div>`
},
{
  title: "Analytics Card",
  preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
<div class="flex items-center">
  <div class="p-3 bg-green-500 text-white rounded-full">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h4v11H3zM10 4h4v17h-4zM17 8h4v13h-4z"></path>
    </svg>
  </div>
  <div class="ml-4">
    <div class="text-2xl font-bold dark:text-black">82%</div>
    <div class="text-gray-600">Engagement</div>
  </div>
</div>
</div>`,
  code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
<div class="flex items-center">
  <div class="p-3 bg-green-500 text-white rounded-full">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h4v11H3zM10 4h4v17h-4zM17 8h4v13h-4z"></path>
    </svg>
  </div>
  <div class="ml-4">
    <div class="text-2xl font-bold dark:text-black">82%</div>
    <div class="text-gray-600">Engagement</div>
  </div>
</div>
</div>`
},
{
  title: "Recipe Card",
  preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
<img class="w-full" src="https://media.istockphoto.com/id/155433174/photo/bolognese-pens.jpg?s=612x612&w=0&k=20&c=A_TBqOAzcOkKbeVv8qSDs0bukfAedhkA458JEFolo_M=" alt="Recipe">
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2 dark:text-black">Delicious Pasta</div>
  <p class="text-gray-700 text-base">
    A delightful blend of fresh ingredients, herbs, and spices to create a mouth-watering pasta dish.
  </p>
  <button class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">View Recipe</button>
</div>
</div>`,
  code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
<img class="w-full" src="https://media.istockphoto.com/id/155433174/photo/bolognese-pens.jpg?s=612x612&w=0&k=20&c=A_TBqOAzcOkKbeVv8qSDs0bukfAedhkA458JEFolo_M=" alt="Recipe">
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2 dark:text-black">Delicious Pasta</div>
  <p class="text-gray-700 text-base">
    A delightful blend of fresh ingredients, herbs, and spices to create a mouth-watering pasta dish.
  </p>
  <button class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">View Recipe</button>
</div>
</div>`
},
{
  title: "Video Card",
  preview: `<div class="relative max-w-sm rounded overflow-hidden shadow-lg bg-white">
<img class="w-full" src="https://i.ytimg.com/vi/XC_Wd0FHAhc/hqdefault.jpg" alt="Video Thumbnail">
<div class="absolute inset-0 flex items-center justify-center">
  <button class="bg-red-500 text-white p-3 rounded-full hover:bg-red-600">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"></path>
    </svg>
  </button>
</div>
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2 dark:text-black">Watch Our Story</div>
  <p class="text-gray-700 text-base">
    Click play to watch our latest video and discover our journey.
  </p>
</div>
</div>`,
  code: `<div class="relative max-w-sm rounded overflow-hidden shadow-lg bg-white">
<img class="w-full" src="https://i.ytimg.com/vi/XC_Wd0FHAhc/hqdefault.jpg" alt="Video Thumbnail">
<div class="absolute inset-0 flex items-center justify-center">
  <button class="bg-red-500 text-white p-3 rounded-full hover:bg-red-600">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"></path>
    </svg>
  </button>
</div>
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2 dark:text-black">Watch Our Story</div>
  <p class="text-gray-700 text-base">
    Click play to watch our latest video and discover our journey.
  </p>
</div>
</div>`
},
{
  title: "Social Media Card",
  preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
<div class="flex items-center">
  <img class="w-12 h-12 rounded-full" src="https://d3rv4lo6ebphhq.cloudfront.net/Uploads/image_1637721988.jpg" alt="Profile">
  <div class="ml-4">
    <div class="font-bold text-xl dark:text-black">Follow Us</div>
    <div class="text-gray-600">Connect on social media</div>
  </div>
</div>
<div class="mt-4 flex space-x-4">
  <a href="#" class="text-blue-600 hover:text-blue-800">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.99 22 12z"/>
    </svg>
  </a>
  <a href="#" class="text-blue-400 hover:text-blue-600">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.13 12.13 0 013 4.92a4.28 4.28 0 001.32 5.7 4.23 4.23 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.98A8.58 8.58 0 012 19.54 12.1 12.1 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0022.46 6z"/>
    </svg>
  </a>
  <a href="#" class="text-pink-500 hover:text-pink-700">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
    </svg>
  </a>
</div>
</div>`,
  code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
<div class="flex items-center">
  <img class="w-12 h-12 rounded-full" src="https://d3rv4lo6ebphhq.cloudfront.net/Uploads/image_1637721988.jpg" alt="Profile">
  <div class="ml-4">
    <div class="font-bold text-xl dark:text-black">Follow Us</div>
    <div class="text-gray-600">Connect on social media</div>
  </div>
</div>
<div class="mt-4 flex space-x-4">
  <a href="#" class="text-blue-600 hover:text-blue-800">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.99 22 12z"/>
    </svg>
  </a>
  <a href="#" class="text-blue-400 hover:text-blue-600">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.13 12.13 0 013 4.92a4.28 4.28 0 001.32 5.7 4.23 4.23 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.98A8.58 8.58 0 012 19.54 12.1 12.1 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0022.46 6z"/>
    </svg>
  </a>
  <a href="#" class="text-pink-500 hover:text-pink-700">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
    </svg>
  </a>
</div>
</div>`
},
{
  title: "Portfolio Card",
  preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
<img class="w-full" src="https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-736x414.webp" alt="Project">
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2 dark:text-black">Project Showcase</div>
  <p class="text-gray-700 text-base">
    A glimpse into our latest creative project, combining innovation and design.
  </p>
  <div class="mt-4 flex space-x-2">
    <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Project</button>
    <button class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Source Code</button>
  </div>
</div>
</div>`,
  code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
<img class="w-full" src="https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-736x414.webp" alt="Project">
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2 dark:text-black">Project Showcase</div>
  <p class="text-gray-700 text-base">
    A glimpse into our latest creative project, combining innovation and design.
  </p>
  <div class="mt-4 flex space-x-2">
    <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Project</button>
    <button class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Source Code</button>
  </div>
</div>
</div>`
},
{
  title: "Discount Card",
  preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white relative">
<img class="w-full" src="https://static.vecteezy.com/system/resources/previews/005/725/259/non_2x/special-offer-sale-red-tag-isolated-illustration-discount-offer-price-label-symbol-for-advertising-campaign-in-retail-sale-promo-marketing-50-percent-off-discount-sticker-vector.jpg" alt="Discount">
<div class="absolute top-0 right-0 m-4 bg-red-500 text-white px-2 py-1 rounded">-50%</div>
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2 dark:text-black">Special Offer</div>
  <p class="text-gray-700 text-base">
    Enjoy a massive discount on our best-selling product. Limited time offer!
  </p>
</div>
</div>`,
  code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white relative">
<img class="w-full" src="https://static.vecteezy.com/system/resources/previews/005/725/259/non_2x/special-offer-sale-red-tag-isolated-illustration-discount-offer-price-label-symbol-for-advertising-campaign-in-retail-sale-promo-marketing-50-percent-off-discount-sticker-vector.jpg" alt="Discount">
<div class="absolute top-0 right-0 m-4 bg-red-500 text-white px-2 py-1 rounded">-50%</div>
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2 dark:text-black">Special Offer</div>
  <p class="text-gray-700 text-base">
    Enjoy a massive discount on our best-selling product. Limited time offer!
  </p>
</div>
</div>`
},
];

// Form components
const formComponents = [
  {
    title: "Simple Input",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
    Username
  </label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
    Username
  </label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
</div>`
  },
  {
    title: "Checkbox",
    preview: `<div class="flex items-center mb-4">
  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
  <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">Default checkbox</label>
</div>`,
    code: `<div class="flex items-center mb-4">
  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
  <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">Default checkbox</label>
</div>`
  },
  {
    title: "Radio Group",
    preview: `<div class="mb-4">
  <span class="block text-gray-700 text-sm font-bold mb-2">Gender</span>
  <div class="flex items-center">
    <input id="male" type="radio" name="gender" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
    <label for="male" class="ml-2 text-sm text-gray-900">Male</label>
  </div>
  <div class="flex items-center mt-2">
    <input id="female" type="radio" name="gender" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
    <label for="female" class="ml-2 text-sm text-gray-900">Female</label>
  </div>
</div>`,
    code: `<div class="mb-4">
  <span class="block text-gray-700 text-sm font-bold mb-2">Gender</span>
  <div class="flex items-center">
    <input id="male" type="radio" name="gender" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
    <label for="male" class="ml-2 text-sm text-gray-900">Male</label>
  </div>
  <div class="flex items-center mt-2">
    <input id="female" type="radio" name="gender" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500">
    <label for="female" class="ml-2 text-sm text-gray-900">Female</label>
  </div>
</div>`
  },
  {
    title: "Text Area",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
    Message
  </label>
  <textarea id="message" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your message"></textarea>
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
    Message
  </label>
  <textarea id="message" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your message"></textarea>
</div>`
  },
  {
    title: "Select Dropdown",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="country">
    Country
  </label>
  <select id="country" class="dark:text-black block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Philippines</option>
    <option>Korea</option>
    <option>China</option>
  </select>
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="country">
    Country
  </label>
  <select id="country" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Philippines</option>
    <option>Korea</option>
    <option>Japan</option>
  </select>
</div>`
  },
  {
    title: "File Input",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="file">
    Upload File
  </label>
  <input id="file" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="file">
    Upload File
  </label>
  <input id="file" type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
</div>`
  },
  {
    title: "Toggle Switch",
    preview: `<div class="mb-4">
  <label for="toggle" class="flex items-center cursor-pointer">
    <div class="relative">
      <input id="toggle" type="checkbox" class="sr-only">
      <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
      <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
    </div>
    <span class="ml-3 text-gray-700 font-medium">Toggle Option</span>
  </label>
</div>`,
    code: `<div class="mb-4">
  <label for="toggle" class="flex items-center cursor-pointer">
    <div class="relative">
      <input id="toggle" type="checkbox" class="sr-only">
      <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
      <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
    </div>
    <span class="ml-3 text-gray-700 font-medium">Toggle Option</span>
  </label>
</div>`
  },
  {
    title: "Range Slider",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="range">
    Volume
  </label>
  <input id="range" type="range" class="w-full">
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="range">
    Volume
  </label>
  <input id="range" type="range" class="w-full">
</div>`
  },
  {
    title: "Password Input",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
    Password
  </label>
  <input id="password" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="********">
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
    Password
  </label>
  <input id="password" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="********">
</div>`
  },
  {
    title: "Email Input",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
    Email
  </label>
  <input id="email" type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="example@mail.com">
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
    Email
  </label>
  <input id="email" type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="example@mail.com">
</div>`
  },
  {
    title: "Search Input",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="search">
    Search
  </label>
  <div class="relative">
    <input id="search" type="search" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search...">
    <svg class="absolute right-3 top-3 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7 7 0 1116.65 2a7 7 0 010 14z"></path>
    </svg>
  </div>
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="search">
    Search
  </label>
  <div class="relative">
    <input id="search" type="search" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search...">
    <svg class="absolute right-3 top-3 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7 7 0 1116.65 2a7 7 0 010 14z"></path>
    </svg>
  </div>
</div>`
  },
  {
    title: "Date Picker",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
    Select Date
  </label>
  <input id="date" type="date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
    Select Date
  </label>
  <input id="date" type="date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>`
  },
  {
    title: "Number Input",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="age">
    Age
  </label>
  <input id="age" type="number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your age">
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="age">
    Age
  </label>
  <input id="age" type="number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your age">
</div>`
  },
  {
    title: "URL Input",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="website">
    Website
  </label>
  <input id="website" type="url" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="https://example.com">
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="website">
    Website
  </label>
  <input id="website" type="url" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="https://example.com">
</div>`
  },
  {
    title: "Color Picker",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="favcolor">
    Favorite Color
  </label>
  <input id="favcolor" type="color" class="w-16 h-10 p-0 border-0" value="#ff0000">
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="favcolor">
    Favorite Color
  </label>
  <input id="favcolor" type="color" class="w-16 h-10 p-0 border-0" value="#ff0000">
</div>`
  },
  {
    title: "Time Picker",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="appt-time">
    Appointment Time
  </label>
  <input id="appt-time" type="time" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="appt-time">
    Appointment Time
  </label>
  <input id="appt-time" type="time" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>`
  },
  {
    title: "Month Picker",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="month">
    Select Month
  </label>
  <input id="month" type="month" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="month">
    Select Month
  </label>
  <input id="month" type="month" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>`
  },
  {
    title: "Week Picker",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="week">
    Select Week
  </label>
  <input id="week" type="week" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="week">
    Select Week
  </label>
  <input id="week" type="week" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>`
  },
  {
    title: "Hidden Input",
    preview: `<div class="mb-4">
  <input id="hidden" type="hidden" value="secret">
  <p class="text-gray-700 text-sm">Hidden input with value "secret"</p>
</div>`,
    code: `<div class="mb-4">
  <input id="hidden" type="hidden" value="secret">
  <p class="text-gray-700 text-sm">Hidden input with value "secret"</p>
</div>`
  },
  {
    title: "Multi-Select Dropdown",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="colors">
    Choose Colors
  </label>
  <select id="colors" multiple class="dark:text-black block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Red</option>
    <option>Green</option>
    <option>Blue</option>
    <option>Yellow</option>
  </select>
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="colors">
    Choose Colors
  </label>
  <select id="colors" multiple class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Red</option>
    <option>Green</option>
    <option>Blue</option>
    <option>Yellow</option>
  </select>
</div>`
  },
  {
    title: "Captcha Input",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="captcha">
    Enter Captcha
  </label>
  <div class="flex items-center">
    <input id="captcha" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Type the characters">
    <img src="https://via.placeholder.com/100x40?text=CAPTCHA" alt="Captcha" class="ml-4">
  </div>
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="captcha">
    Enter Captcha
  </label>
  <div class="flex items-center">
    <input id="captcha" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Type the characters">
    <img src="https://via.placeholder.com/100x40?text=CAPTCHA" alt="Captcha" class="ml-4">
  </div>
</div>`
  },
  {
    title: "Floating Label Input",
    preview: `<div class="mb-4 relative">
  <input id="floating" type="text" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
  <label for="floating" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Floating Label</label>
</div>`,
    code: `<div class="mb-4 relative">
  <input id="floating" type="text" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
  <label for="floating" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Floating Label</label>
</div>`
  },
  {
    title: "Input with Icon",
    preview: `<div class="mb-4 relative">
  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6M3 10a7 7 0 1114 0 7 7 0 01-14 0z"></path>
    </svg>
  </span>
  <input id="icon-input" type="text" class="pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search here">
</div>`,
    code: `<div class="mb-4 relative">
  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6M3 10a7 7 0 1114 0 7 7 0 01-14 0z"></path>
    </svg>
  </span>
  <input id="icon-input" type="text" class="pl-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search here">
</div>`
  },
  {
    title: "Input Group",
    preview: `<div class="mb-4 flex">
  <input type="text" class="dark:text-black shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Username">
  <button class="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600">Submit</button>
</div>`,
    code: `<div class="mb-4 flex">
  <input type="text" class="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Username">
  <button class="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600">Submit</button>
</div>`
  },
  {
    title: "Stepper Input",
    preview: `<div class="mb-4 flex items-center">
  <button class="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400">-</button>
  <input type="number" value="1" class="dark:text-black w-16 text-center border-t border-b border-gray-300 focus:outline-none" />
  <button class="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400">+</button>
</div>`,
    code: `<div class="mb-4 flex items-center">
  <button class="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400">-</button>
  <input type="number" value="1" class="w-16 text-center border-t border-b border-gray-300 focus:outline-none" />
  <button class="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400">+</button>
</div>`
  },
  {
    title: "File Upload Drag & Drop",
    preview: `<div class="mb-4 border-2 border-dashed border-gray-300 rounded p-6 text-center">
  <p class="text-gray-600">Drag and drop your file here, or click to select file</p>
  <input type="file" class="hidden" />
</div>`,
    code: `<div class="mb-4 border-2 border-dashed border-gray-300 rounded p-6 text-center">
  <p class="text-gray-600">Drag and drop your file here, or click to select file</p>
  <input type="file" class="hidden" />
</div>`
  },
  {
    title: "Switch Toggle with Label",
    preview: `<div class="mb-4 flex items-center">
  <label class="mr-4 text-gray-700 font-bold" for="switch2">Enable Notifications</label>
  <label for="switch2" class="flex items-center cursor-pointer">
    <div class="relative">
      <input id="switch2" type="checkbox" class="sr-only">
      <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
      <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
    </div>
  </label>
</div>`,
    code: `<div class="mb-4 flex items-center">
  <label class="mr-4 text-gray-700 font-bold" for="switch2">Enable Notifications</label>
  <label for="switch2" class="flex items-center cursor-pointer">
    <div class="relative">
      <input id="switch2" type="checkbox" class="sr-only">
      <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
      <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
    </div>
  </label>
</div>`
  },
  {
    title: "Text Input with Validation",
    preview: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="validation">
    Username
  </label>
  <input id="validation" type="text" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Invalid username">
  <p class="text-red-500 text-xs italic mt-2">Please choose a username.</p>
</div>`,
    code: `<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="validation">
    Username
  </label>
  <input id="validation" type="text" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Invalid username">
  <p class="text-red-500 text-xs italic mt-2">Please choose a username.</p>
</div>`
  },
  {
    title: "Input with Button",
    preview: `<div class="mb-4 flex">
  <input type="text" class="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter promo code">
  <button class="px-4 py-2 bg-green-500 text-white rounded-r hover:bg-green-600">Apply</button>
</div>`,
    code: `<div class="mb-4 flex">
  <input type="text" class="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter promo code">
  <button class="px-4 py-2 bg-green-500 text-white rounded-r hover:bg-green-600">Apply</button>
</div>`
  },
  {
    title: "Input with Icon and Button",
    preview: `<div class="mb-4 flex relative">
  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6M3 10a7 7 0 1114 0 7 7 0 01-14 0z"></path>
    </svg>
  </span>
  <input type="text" class="pl-10 shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search products">
  <button class="px-4 py-2 bg-purple-500 text-white rounded-r hover:bg-purple-600">Go</button>
</div>`,
    code: `<div class="mb-4 flex relative">
  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6M3 10a7 7 0 1114 0 7 7 0 01-14 0z"></path>
    </svg>
  </span>
  <input type="text" class="pl-10 shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search products">
  <button class="px-4 py-2 bg-purple-500 text-white rounded-r hover:bg-purple-600">Go</button>
</div>`
  },
  {
    title: "Search Bar with Suggestions",
    preview: `<div class="mb-4 relative">
  <input type="search" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search...">
  <ul class="dark:text-black absolute z-10 left-0 right-0 bg-white border border-gray-300 rounded mt-1">
    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Suggestion 1</li>
    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Suggestion 2</li>
    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Suggestion 3</li>
  </ul>
</div>`,
    code: `<div class="mb-4 relative">
  <input type="search" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search...">
  <ul class="absolute z-10 left-0 right-0 bg-white border border-gray-300 rounded mt-1">
    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Suggestion 1</li>
    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Suggestion 2</li>
    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Suggestion 3</li>
  </ul>
</div>`
  },
  {
    title: "Rich Text Editor",
    preview: `<div class="mb-4">
  <div class="border border-gray-300 rounded p-2">
    <div class="flex space-x-2 mb-2 dark:text-black">
      <button class="px-2 py-1 bg-gray-200 rounded">B</button>
      <button class="px-2 py-1 bg-gray-200 rounded">I</button>
      <button class="px-2 py-1 bg-gray-200 rounded">U</button>
    </div>
    <textarea class="w-full h-32 p-2 focus:outline-none" placeholder="Enter your text here..."></textarea>
  </div>
</div>`,
    code: `<div class="mb-4">
  <div class="border border-gray-300 rounded p-2">
    <div class="flex space-x-2 mb-2">
      <button class="px-2 py-1 bg-gray-200 rounded">B</button>
      <button class="px-2 py-1 bg-gray-200 rounded">I</button>
      <button class="px-2 py-1 bg-gray-200 rounded">U</button>
    </div>
    <textarea class="w-full h-32 p-2 focus:outline-none" placeholder="Enter your text here..."></textarea>
  </div>
</div>`
  }
];

// Navigation components
const navigationComponents = [
  {
    title: "Simple Navbar",
    preview: `<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">My Website</span>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        About
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Contact
      </a>
    </div>
  </div>
</nav>`,
    code: `<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">My Website</span>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        About
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Contact
      </a>
    </div>
  </div>
</nav>`
  },
  {
    title: "Breadcrumbs",
    preview: `<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">Projects</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2">Current</span>
      </div>
    </li>
  </ol>
</nav>`,
    code: `<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">Projects</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2">Current</span>
      </div>
    </li>
  </ol>
</nav>`
  },
  {
    title: "Sticky Navbar with Shadow",
    preview: `<nav class="sticky top-0 bg-white shadow p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="text-xl font-bold text-gray-800">StickyBrand</div>
    <div class="space-x-4">
      <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Services</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
    </div>
  </div>
</nav>`,
    code: `<nav class="sticky top-0 z-50 bg-white shadow p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="text-xl font-bold text-gray-800">StickyBrand</div>
    <div class="space-x-4">
      <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Services</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
    </div>
  </div>
</nav>`
  },
  {
    title: "Navbar with Logo & CTA",
    preview: `<nav class="bg-white shadow p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="flex items-center">
      <img src="https://i.ytimg.com/vi/B7pR3fG-SMo/maxresdefault.jpg" alt="Logo" class="h-10 w-10 mr-2">
      <span class="font-bold text-xl text-gray-800">MyBrand</span>
    </div>
    <div class="hidden md:flex space-x-6">
      <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Services</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
    </div>
    <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
  </div>
</nav>`,
    code: `<nav class="bg-white shadow p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="flex items-center">
      <img src="https://i.ytimg.com/vi/B7pR3fG-SMo/maxresdefault.jpg" alt="Logo" class="h-10 w-10 mr-2">
      <span class="font-bold text-xl text-gray-800">MyBrand</span>
    </div>
    <div class="hidden md:flex space-x-6">
      <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Services</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
    </div>
    <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
  </div>
</nav>`
  },
  {
    title: "Responsive Navbar with Hamburger",
    preview: `<nav class="bg-blue-600 p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="text-white font-bold text-xl">ResponsiveBrand</div>
    <div class="block md:hidden">
      <button class="text-white focus:outline-none">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
    <div class="hidden md:flex space-x-6">
      <a href="#" class="text-white hover:text-gray-300">Home</a>
      <a href="#" class="text-white hover:text-gray-300">Services</a>
      <a href="#" class="text-white hover:text-gray-300">Portfolio</a>
      <a href="#" class="text-white hover:text-gray-300">Contact</a>
    </div>
  </div>
</nav>`,
    code: `<nav class="bg-blue-600 p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="text-white font-bold text-xl">ResponsiveBrand</div>
    <div class="block md:hidden">
      <button class="text-white focus:outline-none">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
    <div class="hidden md:flex space-x-6">
      <a href="#" class="text-white hover:text-gray-300">Home</a>
      <a href="#" class="text-white hover:text-gray-300">Services</a>
      <a href="#" class="text-white hover:text-gray-300">Portfolio</a>
      <a href="#" class="text-white hover:text-gray-300">Contact</a>
    </div>
  </div>
</nav>`
  },
  {
    title: "Navbar with Search Bar",
    preview: `<nav class="bg-gray-100 p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="text-xl font-bold text-gray-800">SearchBrand</div>
    <div class="flex items-center space-x-4">
      <input type="text" placeholder="Search..." class="px-3 py-2 border rounded focus:outline-none">
      <button class="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">Search</button>
    </div>
  </div>
</nav>`,
    code: `<nav class="bg-gray-100 p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="text-xl font-bold text-gray-800">SearchBrand</div>
    <div class="flex items-center space-x-4">
      <input type="text" placeholder="Search..." class="px-3 py-2 border rounded focus:outline-none">
      <button class="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">Search</button>
    </div>
  </div>
</nav>`
  },
  {
    title: "Minimalist Navbar",
    preview: `<nav class="p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="text-xl font-light">Minimal</div>
    <div class="space-x-4">
      <a href="#" class="text-gray-700 hover:text-gray-900">Home</a>
      <a href="#" class="text-gray-700 hover:text-gray-900">Work</a>
      <a href="#" class="text-gray-700 hover:text-gray-900">Contact</a>
    </div>
  </div>
</nav>`,
    code: `<nav class="p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="text-xl font-light">Minimal</div>
    <div class="space-x-4">
      <a href="#" class="text-gray-700 hover:text-gray-900">Home</a>
      <a href="#" class="text-gray-700 hover:text-gray-900">Work</a>
      <a href="#" class="text-gray-700 hover:text-gray-900">Contact</a>
    </div>
  </div>
</nav>`
  },
  {
    title: "Dark Mode Navbar",
    preview: `<nav class="bg-gray-900 p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="text-2xl font-bold text-white">DarkBrand</div>
    <div class="space-x-4">
      <a href="#" class="text-gray-300 hover:text-white">Home</a>
      <a href="#" class="text-gray-300 hover:text-white">Features</a>
      <a href="#" class="text-gray-300 hover:text-white">Pricing</a>
      <a href="#" class="text-gray-300 hover:text-white">Contact</a>
    </div>
    <button class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Login</button>
  </div>
</nav>`,
    code: `<nav class="bg-gray-900 p-4">
  <div class="container mx-auto flex items-center justify-between">
    <div class="text-2xl font-bold text-white">DarkBrand</div>
    <div class="space-x-4">
      <a href="#" class="text-gray-300 hover:text-white">Home</a>
      <a href="#" class="text-gray-300 hover:text-white">Features</a>
      <a href="#" class="text-gray-300 hover:text-white">Pricing</a>
      <a href="#" class="text-gray-300 hover:text-white">Contact</a>
    </div>
    <button class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Login</button>
  </div>
</nav>`
  },

];


export default ComponentLibrary;
