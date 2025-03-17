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

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialValue = defaultTemplate,
  onChange,
}) => {
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
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <div> element",
          },
          {
            label: "header",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<header>$0</header>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <header> element",
          },
          {
            label: "footer",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<footer>$0</footer>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <footer> element",
          },
          {
            label: "section",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<section>$0</section>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <section> element",
          },
          {
            label: "article",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<article>$0</article>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <article> element",
          },
          {
            label: "nav",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<nav>$0</nav>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <nav> element",
          },
          {
            label: "main",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<main>$0</main>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <main> element",
          },
          {
            label: "aside",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<aside>$0</aside>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <aside> element",
          },
          {
            label: "h1",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<h1>$0</h1>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <h1> element",
          },
          {
            label: "h2",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<h2>$0</h2>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <h2> element",
          },
          {
            label: "h3",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<h3>$0</h3>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <h3> element",
          },
          {
            label: "p",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<p>$0</p>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <p> element",
          },
          {
            label: "a",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<a href="$0">$1</a>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <a> element",
          },
          {
            label: "img",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<img src="$0" alt="" />`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <img> element",
          },
          {
            label: "ul",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<ul>\n\t<li>$0</li>\n</ul>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <ul> list",
          },
          {
            label: "ol",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<ol>\n\t<li>$0</li>\n</ol>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <ol> list",
          },
          {
            label: "li",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<li>$0</li>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <li> element",
          },
          {
            label: "form",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<form>$0</form>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <form> element",
          },
          {
            label: "input",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<input type="text" placeholder="$0" />`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <input> element",
          },
          {
            label: "label",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<label for="$0">$1</label>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <label> element",
          },
          {
            label: "textarea",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<textarea>$0</textarea>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <textarea> element",
          },
          {
            label: "table",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th>$0</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t</tr>\n\t</tbody>\n</table>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <table> element",
          },
          {
            label: "span",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<span>$0</span>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <span> element",
          },
          {
            label: "strong",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<strong>$0</strong>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <strong> element",
          },
          {
            label: "em",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<em>$0</em>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <em> element",
          },
          {
            label: "blockquote",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<blockquote>$0</blockquote>`,
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <blockquote> element",
          },
          // Tailwind CSS classes
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
          {
            label: "flex",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "flex",
            documentation: "Tailwind CSS: display flex",
          },
          {
            label: "items-center",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "items-center",
            documentation: "Tailwind CSS: align items center",
          },
          {
            label: "justify-center",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "justify-center",
            documentation: "Tailwind CSS: justify content center",
          },
          {
            label: "w-full",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "w-full",
            documentation: "Tailwind CSS: full width",
          },
          {
            label: "h-full",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "h-full",
            documentation: "Tailwind CSS: full height",
          },
          {
            label: "bg-gray-100",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "bg-gray-100",
            documentation: "Tailwind CSS: background gray 100",
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
      <div className="flex justify-between items-center p-2 bg-gray-200 border-b dark:bg-[#1e293b]">
        <span className="text-sm font-medium dark:text-white">
          Tailwind CSS
        </span>
        <button
          onClick={handleRun}
          className="px-2 py-1 bg-[#1e1e1e] dark:bg-[#bb86fc] text-white rounded focus:outline-none"
        >
          Run
        </button>
      </div>
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
            wordWrap: "on",
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
