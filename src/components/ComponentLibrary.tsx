import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react";

const ComponentLibrary = () => {
  const { toast } = useToast();
  const [category, setCategory] = useState("buttons");

  const copyComponent = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Component copied",
      description: "The component code has been copied to your clipboard",
    });
  };

  return (
    <div className="p-4 h-full overflow-auto editor-scrollbar animate-fade-in">
      <Tabs defaultValue={category} onValueChange={setCategory}>
        <TabsList className="mb-4 grid grid-cols-4 w-full">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
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
          <h2 className="text-lg font-semibold mb-4">Card Components</h2>
          <div className="component-grid">
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
    <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm transition-all hover:shadow-md">
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
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Experience the calm beauty of a sunset that fills the sky with vibrant hues.
    </p>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
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
      <div class="font-bold text-xl mb-2">Sung Jin-Woo</div>
      <p class="text-gray-700 text-base">
        An older Sung Jin-Woo, the unstoppable hunter, exuding power and confidence.
      </p>
    </div>
  </div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img class="w-full" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/an-older-jinwoo-in-solo-leveling-smiling.jpg" alt="Solo Leveling">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Sung Jin-Woo</div>
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
        <div class="font-bold text-xl">Monkey D. Luffy</div>
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
        <div class="font-bold text-xl">Monkey D. Luffy</div>
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
      <div class="font-bold text-2xl mb-4">Pro Plan</div>
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
  </div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
    <div class="text-center">
      <div class="font-bold text-2xl mb-4">Pro Plan</div>
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
    <div class="font-bold text-xl mb-2">Wireless Headphones</div>
    <p class="text-gray-700 text-base">
      Enjoy high-quality sound with these comfortable, long-lasting headphones.
    </p>
    <div class="mt-4 flex items-center">
      <span class="text-lg font-bold">₱1299</span>
      <button class="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Buy Now</button>
    </div>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097" alt="Product">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Wireless Headphones</div>
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
    <div class="font-bold text-xl mb-2">Exploring the Ocean Depths</div>
    <p class="text-gray-700 text-base">
      Dive into the mysterious world of the deep sea and discover its hidden wonders.
    </p>
    <a href="#" class="mt-4 inline-block text-blue-500 hover:underline">Read More</a>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=400" alt="Blog">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Exploring the Ocean Depths</div>
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
    <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" alt="User">
    <div class="ml-4">
      <div class="font-bold text-sm">Alex Johnson</div>
      <div class="text-gray-600 text-xs">Entrepreneur</div>
    </div>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
  <p class="text-gray-700 text-base italic">
    "This product completely changed my life! Highly recommended."
  </p>
  <div class="mt-4 flex items-center">
    <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" alt="User">
    <div class="ml-4">
      <div class="font-bold text-sm">Alex Johnson</div>
      <div class="text-gray-600 text-xs">Entrepreneur</div>
    </div>
  </div>
</div>`
  },
  {
    title: "Gallery Card",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <div class="grid grid-cols-2 gap-1">
    <img class="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=300&h=200" alt="Gallery 1">
    <img class="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&h=200" alt="Gallery 2">
    <img class="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1507143550189-fed454f93097?auto=format&fit=crop&w=300&h=200" alt="Gallery 3">
    <img class="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&h=200" alt="Gallery 4">
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Travel Memories</div>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <div class="grid grid-cols-2 gap-1">
    <img class="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=300&h=200" alt="Gallery 1">
    <img class="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&h=200" alt="Gallery 2">
    <img class="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1507143550189-fed454f93097?auto=format&fit=crop&w=300&h=200" alt="Gallery 3">
    <img class="w-full h-24 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&h=200" alt="Gallery 4">
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Travel Memories</div>
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
    <h3 class="ml-4 font-bold text-xl">Seamless Integration</h3>
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
    <h3 class="ml-4 font-bold text-xl">Seamless Integration</h3>
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
    <div class="font-bold text-xl mb-2">Interactive Experience</div>
    <p class="text-gray-700 text-base">
      Hover over this card to see it come to life with a smooth animation.
    </p>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105">
  <img class="w-full" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=400" alt="Interactive">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Interactive Experience</div>
    <p class="text-gray-700 text-base">
      Hover over this card to see it come to life with a smooth animation.
    </p>
  </div>
</div>`
  }
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
  <select id="country" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
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
    preview: `<nav class="sticky top-0 z-50 bg-white shadow p-4">
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
      <img src="https://via.placeholder.com/40" alt="Logo" class="h-10 w-10 mr-2">
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
      <img src="https://via.placeholder.com/40" alt="Logo" class="h-10 w-10 mr-2">
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
  }
];


export default ComponentLibrary;
