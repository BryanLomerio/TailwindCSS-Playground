
import { useState, useEffect } from "react";

interface PreviewProps {
  htmlCode: string;
}

const Preview = ({ htmlCode }: PreviewProps) => {
  const [iframeHeight, setIframeHeight] = useState("100%");

  // Create a secure iframe src document
  const createIframeSrc = (html: string) => {
    // Add necessary Tailwind CDN
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              padding: 1rem;
            }
          </style>
        </head>
        <body>
          ${html}
          <script>
            // Send height to parent for iframe adjustment
            window.onload = function() {
              window.parent.postMessage({
                height: document.body.scrollHeight
              }, '*');
            };
          </script>
        </body>
      </html>
    `;
  };

  // Handle messages from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.height) {
        setIframeHeight(`${event.data.height + 32}px`); // Add some padding
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="flex flex-col h-full bg-white rounded-md shadow-sm border border-border overflow-hidden animate-fade-in">
      <div className="px-4 py-2 bg-muted border-b border-border">
        <span className="text-sm font-medium">Preview</span>
      </div>
      <div className="flex-1 overflow-auto bg-secondary/30 editor-scrollbar">
        <iframe
          title="preview"
          srcDoc={createIframeSrc(htmlCode)}
          className="w-full h-full border-0"
          sandbox="allow-scripts"
          style={{ height: iframeHeight, minHeight: "300px" }}
        />
      </div>
    </div>
  );
};

export default Preview;
