
import { useState, useEffect } from "react";
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
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm transition-all hover:shadow-md">
      <div className="p-4 border-b border-border bg-white" dangerouslySetInnerHTML={{ __html: preview }} />
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
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>`,
    code: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>`
  }
];

// Card components
const cardComponents = [
  {
    title: "Simple Card",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
  </div>
</div>`
  },
  {
    title: "Card with Image",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?auto=format&fit=crop&w=600&h=400" alt="Mountain">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Mountain View</div>
    <p class="text-gray-700 text-base">
      A beautiful mountain landscape view.
    </p>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?auto=format&fit=crop&w=600&h=400" alt="Mountain">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Mountain View</div>
    <p class="text-gray-700 text-base">
      A beautiful mountain landscape view.
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
  }
];

export default ComponentLibrary;
