import React, { useState } from "react";
import Editor, { OnChange } from "@monaco-editor/react";

interface CodeEditorWindowProps {
  onChange: (name: string, value: string) => void;
  language?: string;
  code?: string;
}

const CodeEditorWindow: React.FC<CodeEditorWindowProps> = ({ onChange, language, code }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange: OnChange = (newValue, event) => {
    const updatedValue = newValue || "";
    setValue(updatedValue);
    onChange("code", updatedValue);
  };

  return (
    <div className="w-full h-full">
      <Editor
        height="90vh"
        width="100%"
        language={language || "cpp"}
        value={value}
        theme="vs-dark"
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditorWindow;
