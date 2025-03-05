import { useState } from "react";
import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import Preview from "@/components/Preview";
import ComponentLibrary from "@/components/ComponentLibrary";
import ColorPalette from "@/components/ColorPalette";
import Socials from "@/components/ui/Socials";

const Index = () => {
  const [activeTab, setActiveTab] = useState("editor");
  const [htmlCode, setHtmlCode] = useState(`<!-- Solo Leveling Fan Page -->
<!-- Try editing this code to see the changes in real-time -->

<div class="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2025/02/solo-leveling-ragnarok-sequel-epilogue-jinwoo-suho.jpg?q=70&fit=crop&w=1140&h=&dpr=1" alt="Solo Leveling">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Solo Leveling</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">The Rise of Sung Jin-Woo</a>
      <p class="mt-2 text-slate-500">Explore the epic journey of Sung Jin-Woo, the weakest hunter turned unstoppable force in this action-packed manhwa.</p>
      <button class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
        Discover More
      </button>
    </div>
  </div>
</div>`);

  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        htmlCode={htmlCode}
      />

      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-hidden">
        {activeTab === "editor" ? (
          <>
            <div className="h-[calc(100vh-9rem)] overflow-hidden">
              <CodeEditor onChange={setHtmlCode} initialValue={htmlCode} />
            </div>
            <div className="h-[calc(100vh-9rem)] overflow-hidden">
              <Preview htmlCode={htmlCode} />
            </div>
          </>
        ) : activeTab === "components" ? (
          <div className="col-span-1 md:col-span-2 h-[calc(100vh-9rem)] overflow-hidden">
            <ComponentLibrary />
          </div>
        ) : (
          <div className="col-span-1 md:col-span-2 h-[calc(100vh-9rem)] overflow-hidden">
            <ColorPalette />
          </div>
        )}
      </main>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <Socials />
      </div>
    </div>
  );
};

export default Index;
