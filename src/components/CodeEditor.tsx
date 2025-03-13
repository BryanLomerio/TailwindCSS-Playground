import React, { useState } from "react";
import Editor, { OnMount } from "@monaco-editor/react";

const defaultTemplate = `<!-- Solo Leveling Fan Page -->
<div class="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6" alt="Modern building architecture">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat? We have the perfect location.</p>
      <button class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
        Book now
      </button>
    </div>
  </div>
</div>`;

interface CodeEditorProps {
  initialValue?: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue = defaultTemplate, onChange }) => {
  const [code, setCode] = useState(initialValue);

  const handleEditorChange = (value?: string) => {
    const updatedCode = value || "";
    setCode(updatedCode);
    onChange(updatedCode);
  };

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    monaco.languages.registerCompletionItemProvider("html", {
      provideCompletionItems: (model, position) => {
        const suggestions = [
          // HTML tags
          {
            label: "div",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<div>$0</div>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <div> element",
          },
          {
            label: "button",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<button>$0</button>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <button> element",
          },
          {
            label: "p",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<p>$0</p>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <p> element",
          },
          {
            label: "a",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<a href="$0">$1</a>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <a> element",
          },
          {
            label: "img",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<img src="$0" alt="" />`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <img> element",
          },
          {
            label: "p-8",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "p-8",
            documentation: "Tailwind CSS: padding 8",
          },
          {
            label: "max-w-md",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "max-w-md",
            documentation: "Tailwind CSS: max width medium",
          },
          {
            label: "bg-white",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "bg-white",
            documentation: "Tailwind CSS: background white",
          },
          {
            label: "text-indigo-500",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "text-indigo-500",
            documentation: "Tailwind CSS: text color indigo 500",
          },

        ];
        return { suggestions };
      },
    });
  };

  const handleRun = () => {
    console.log("Code updated:", code);
  };

  return (
    <div className="flex flex-col w-full h-full border rounded shadow">
      <div className="flex justify-between items-center p-2 bg-gray-200 border-b">
        <span className="text-sm font-medium">HTML + Tailwind CSS (Monaco Editor)</span>
        <button
          onClick={handleRun}
          className="px-2 py-1 bg-blue-500 text-white rounded focus:outline-none"
        >
          Run
        </button>
      </div>
      {/* Wrap Editor in a flex item to fill available space */}
      <div className="flex-1">
        <Editor
          width="100%"
          height="100%"
          defaultLanguage="html"
          value={code}
          theme="vs-dark"
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
