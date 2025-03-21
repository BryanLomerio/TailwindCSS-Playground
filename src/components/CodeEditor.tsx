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
  const [editor, setEditor] = useState(null);

  const formatCode = async () => {
    try {
      const prettier = await import('prettier/standalone');
      const parser = await import('prettier/parser-html');

      const formatted = await prettier.format(code, {
        parser: "html",
        plugins: [parser],
        semi: true,
        tabWidth: 2,
        printWidth: 100,
        singleQuote: true,
        trailingComma: "es5",
        bracketSpacing: true,
        arrowParens: "always",
      });
      setCode(formatted);
      onChange(formatted);
    } catch (error) {
      console.error("Formatting error:", error);
    }
  };

  const handleEditorChange = (value?: string) => {
    const updatedCode = value || "";
    setCode(updatedCode);
    onChange(updatedCode);
  };

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    setEditor(editor);

    editor.addAction({
      id: "format-code",
      label: "Format Code",
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyF,
      ],
      run: formatCode,
    });

    monaco.languages.registerCompletionItemProvider("html", {
      provideCompletionItems: () => {
        const suggestions = [
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
            insertText: `<button class="$1">$0</button>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <button> element",
          },
          {
            label: "form",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<form>\n\t$0\n</form>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <form> element",
          },
          {
            label: "input",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<input type="$1" placeholder="$2" class="$3" $0/>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <input> element",
          },
          {
            label: "label",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<label for="$1">$0</label>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <label> element",
          },
          {
            label: "textarea",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<textarea class="$1">$0</textarea>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <textarea> element",
          },
          {
            label: "select",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<select class="$1">\n\t<option value="$2">$3</option>\n\t$0\n</select>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <select> element",
          },
          {
            label: "table",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<table class="$1">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>$2</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>$0</td>\n\t\t</tr>\n\t</tbody>\n</table>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "HTML <table> element",
          },

          // Tailwind Layout
          {
            label: "flex",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "flex",
            documentation: "Tailwind CSS: display flex",
          },
          {
            label: "grid",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "grid",
            documentation: "Tailwind CSS: display grid",
          },
          {
            label: "items-center",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "items-center",
            documentation: "Tailwind CSS: align items center",
          },
          {
            label: "justify-between",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "justify-between",
            documentation: "Tailwind CSS: justify content space between",
          },

          // Common Components
          {
            label: "card",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">\n\t$0\n</div>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Tailwind CSS card component",
          },
          {
            label: "navbar",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<nav class="bg-gray-800 p-4">\n\t<div class="flex items-center justify-between">\n\t\t$0\n\t</div>\n</nav>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Tailwind CSS navbar component",
          },
          {
            label: "button-primary",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">$0</button>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Tailwind CSS primary button",
          },
          {
            label: "button-secondary",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<button class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">$0</button>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Tailwind CSS secondary button",
          },
          {
            label: "input-form",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="$0">`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "Tailwind CSS styled input",
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
        <div className="flex gap-2">
          <button
            onClick={formatCode}
            className="px-2 py-1 bg-[#1e1e1e] dark:bg-[#bb86fc] text-white rounded focus:outline-none"
          >
            Format
          </button>
          <button
            onClick={handleRun}
            className="px-2 py-1 bg-[#1e1e1e] dark:bg-[#bb86fc] text-white rounded focus:outline-none"
          >
            Run
          </button>
        </div>
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
            formatOnPaste: false,
            formatOnType: false,
            autoIndent: "full",
            tabSize: 2,
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
