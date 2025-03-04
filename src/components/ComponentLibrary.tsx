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
  <img class="w-full" src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?auto=format&fit=crop&w=600&h=400" alt="Mountain">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Mountain View</div>
    <p class="text-gray-700 text-base">
      A beautiful mountain landscape view.
    </p>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?auto=format&fit=crop&w=600&h=400" alt="Mountain">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Mountain View</div>
    <p class="text-gray-700 text-base">
      A beautiful mountain landscape view.
    </p>
  </div>
</div>`
  },
  {
    title: "Profile Card",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
  <div class="flex items-center space-x-4">
    <img class="w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=64&h=64" alt="Profile">
    <div>
      <div class="font-bold text-xl">Jane Doe</div>
      <div class="text-gray-600">Software Engineer</div>
    </div>
  </div>
  <p class="mt-4 text-gray-700 text-base">
    Passionate about building scalable web applications and exploring new technologies.
  </p>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
  <div class="flex items-center space-x-4">
    <img class="w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=64&h=64" alt="Profile">
    <div>
      <div class="font-bold text-xl">Jane Doe</div>
      <div class="text-gray-600">Software Engineer</div>
    </div>
  </div>
  <p class="mt-4 text-gray-700 text-base">
    Passionate about building scalable web applications and exploring new technologies.
  </p>
</div>`
  },
  {
    title: "Pricing Card",
    preview: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
  <div class="text-center">
    <div class="font-bold text-2xl mb-4">Pro Plan</div>
    <div class="text-4xl font-extrabold">$29<span class="text-xl">/mo</span></div>
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
    <div class="text-4xl font-extrabold">$29<span class="text-xl">/mo</span></div>
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
  <img class="w-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&h=400" alt="Product">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Wireless Headphones</div>
    <p class="text-gray-700 text-base">
      Enjoy high-quality sound with these comfortable, long-lasting headphones.
    </p>
    <div class="mt-4 flex items-center">
      <span class="text-lg font-bold">$99</span>
      <button class="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Buy Now</button>
    </div>
  </div>
</div>`,
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&h=400" alt="Product">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Wireless Headphones</div>
    <p class="text-gray-700 text-base">
      Enjoy high-quality sound with these comfortable, long-lasting headphones.
    </p>
    <div class="mt-4 flex items-center">
      <span class="text-lg font-bold">$99</span>
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
