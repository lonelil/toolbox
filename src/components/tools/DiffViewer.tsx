import { useState } from "react";
import { Textarea } from "../ui/textarea";
import ReactDiffViewer from "react-diff-viewer-continued";

export default function DiffViewer() {
  const [originalText, setOriginalText] = useState("hello");
  const [newText, setNewText] = useState("hello\nworld");

  return (
    <>
      <div className="mb-4 grid min-h-96 grid-cols-2 gap-4">
        <Textarea
          placeholder="Original"
          value={originalText}
          onChange={(e) => setOriginalText(e.currentTarget.value)}
        />
        <Textarea
          placeholder="New"
          value={newText}
          onChange={(e) => setNewText(e.currentTarget.value)}
        />
      </div>
      <ReactDiffViewer
        oldValue={originalText}
        newValue={newText}
        splitView
        useDarkTheme
      />
    </>
  );
}
